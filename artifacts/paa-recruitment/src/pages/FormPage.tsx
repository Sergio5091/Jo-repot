import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ChevronLeft, ChevronRight, User, Calendar, CreditCard, CheckSquare, X } from "lucide-react";
import { useLocation } from "wouter";
import StepIdentity from "@/components/steps/StepIdentity";
import StepAvailability from "@/components/steps/StepAvailability";
import StepCNPS from "@/components/steps/StepCNPS";
import StepEngagement from "@/components/steps/StepEngagement";
import SuccessCard from "@/components/SuccessCard";

export type FormData = {
  employeeId: string;
  fullName: string;
  firstName: string;
  phone: string;
  emergencyName: string;
  emergencyPhone: string;
  healthIssue: string;
  availabilityDate: string;
  hasCNPS: boolean | null;
  cnpsNumber: string;
  cnpsProof: File | null;
  identityCard: File | null;
  confirmAccuracy: boolean;
  acceptTerms: boolean;
};

const INITIAL_DATA: FormData = {
  employeeId: "",
  fullName: "",
  firstName: "",
  phone: "+225 ",
  emergencyName: "",
  emergencyPhone: "",
  healthIssue: "",
  availabilityDate: "",
  hasCNPS: null,
  cnpsNumber: "",
  cnpsProof: null,
  identityCard: null,
  confirmAccuracy: false,
  acceptTerms: false,
};

const STEPS = [
  { label: "Identité", icon: User },
  { label: "Disponibilité", icon: Calendar },
  { label: "CNPS", icon: CreditCard },
  { label: "Engagement", icon: CheckSquare },
];

// Composant Modal d'erreur
function ErrorModal({
  messages,
  onClose,
}: {
  messages: string[];
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Boîte de dialogue */}
      <div className="relative bg-white rounded-xl shadow-xl max-w-sm w-full p-6 border border-red-100">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
            <span className="text-red-600 font-bold text-sm">!</span>
          </div>
          <h2 className="text-sm font-semibold text-gray-800">
            Documents manquants
          </h2>
        </div>

        <ul className="space-y-2">
          {messages.map((msg, i) => (
            <li
              key={i}
              className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2 leading-snug"
            >
              {msg}
            </li>
          ))}
        </ul>

        <button
          onClick={onClose}
          className="mt-5 w-full py-2 rounded-md bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium transition-colors"
        >
          Compris
        </button>
      </div>
    </div>
  );
}

export default function FormPage() {
  const [, navigate] = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // État pour les messages d'erreur du modal
  const [modalErrors, setModalErrors] = useState<string[]>([]);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const goNext = () => {
    // Validation étape 1 - Identité
    if (currentStep === 0) {
      const requiredFields = ['employeeId', 'fullName', 'firstName', 'phone', 'emergencyName', 'emergencyPhone'];
      const missingFields = requiredFields.filter(field => !formData[field as keyof FormData]);
      if (missingFields.length > 0) {
        setModalErrors(["Veuillez remplir tous les champs obligatoires de l'étape Identité avant de continuer."]);
        setShowErrorModal(true);
        return;
      }
    }
    
    // Validation étape 2 - Disponibilité
    if (currentStep === 1) {
      if (!formData.availabilityDate) {
        setModalErrors(["Veuillez sélectionner votre date de disponibilité avant de continuer."]);
        setShowErrorModal(true);
        return;
      }
    }
    
    // Validation étape 3 - CNPS
    if (currentStep === 2) {
      // Vérifier d'abord si l'utilisateur a fait un choix
      if (formData.hasCNPS === null) {
        setModalErrors(["Veuillez sélectionner 'Oui' ou 'Non' pour la carte CNPS avant de continuer."]);
        setShowErrorModal(true);
        return;
      }
      
      if (formData.hasCNPS === true) {
        // Si l'utilisateur a une carte CNPS, le numéro est obligatoire
        if (!formData.cnpsNumber || formData.cnpsNumber.trim() === '') {
          setModalErrors(["Veuillez entrer votre numéro CNPS avant de continuer."]);
          setShowErrorModal(true);
          return;
        }
      } else if (formData.hasCNPS === false) {
        const errors: string[] = [];
        if (!formData.cnpsProof) {
          errors.push(
            "Vous devez ajouter la preuve de paiement de 14500 FCFA pour permettre la création de votre carte CNPS avant de continuer."
          );
        }
        if (!formData.identityCard) {
          errors.push(
            "Vous devez ajouter votre pièce d'identité pour permettre la création de votre carte CNPS avant de continuer."
          );
        }

        if (errors.length > 0) {
          setModalErrors(errors);
          setShowErrorModal(true);
          return; // Bloquer la navigation
        }
      }
    }
    
    // Réinitialiser les erreurs si on change d'étape
    setShowErrorModal(false);
    setModalErrors([]);
    setCurrentStep((s) => Math.min(s + 1, 3));
  };

  const goPrev = () => {
    setCurrentStep((s) => Math.max(s - 1, 0));
  };

  const canGoNext = () => {
    if (currentStep === 2 && formData.hasCNPS === false) {
      return formData.cnpsProof !== null && formData.identityCard !== null;
    }
    return true;
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const compressImageToBase64 = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          if (!ctx) {
            reject(new Error("Canvas context not available"));
            return;
          }

          const isMobile =
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            );

          let maxSize = isMobile ? 400 : 600;
          let quality = isMobile ? 0.2 : 0.3;

          console.log(
            `Device: ${isMobile ? "Mobile" : "Desktop"} - Max size: ${maxSize}px, Quality: ${quality}`
          );

          let { width, height } = img;

          if (width > height) {
            if (width > maxSize) {
              height = (height * maxSize) / width;
              width = maxSize;
            }
          } else {
            if (height > maxSize) {
              width = (width * maxSize) / height;
              height = maxSize;
            }
          }

          canvas.width = width;
          canvas.height = height;

          ctx.drawImage(img, 0, 0, width, height);

          const compressedBase64 = canvas.toDataURL("image/jpeg", quality);

          console.log(
            `Image compressée (${isMobile ? "Mobile" : "Desktop"}): ${file.name} - ${(
              compressedBase64.length / 1024
            ).toFixed(1)}KB`
          );

          resolve(compressedBase64);
        };
        img.onerror = reject;
        img.src = e.target?.result as string;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const sendEmail = async () => {
    try {
      const serviceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id";
      const templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id";
      const publicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

      let cnpsProofBase64 = "";
      if (formData.cnpsProof) {
        try {
          cnpsProofBase64 = await compressImageToBase64(formData.cnpsProof);
        } catch (error) {
          console.warn("Erreur lors de la compression de l'image CNPS:", error);
          cnpsProofBase64 = "Erreur lors du traitement de l'image";
        }
      }

      let identityCardBase64 = "";
      if (formData.identityCard) {
        try {
          identityCardBase64 = await compressImageToBase64(formData.identityCard);
        } catch (error) {
          console.warn(
            "Erreur lors de la compression de la carte d'identité:",
            error
          );
          identityCardBase64 = "Erreur lors du traitement de l'image";
        }
      }

      const emailData = {
        to_email:
          import.meta.env.VITE_RECIPIENT_EMAIL || "sergionounagnon1@gmail.com",
        from_name: `${formData.firstName} ${formData.fullName}`.trim(),
        employee_id: formData.employeeId,
        full_name: formData.fullName,
        first_name: formData.firstName,
        phone: formData.phone,
        emergency_name: formData.emergencyName,
        emergency_phone: formData.emergencyPhone,
        health_issue: formData.healthIssue || "Aucun",
        availability_date: formData.availabilityDate,
        has_cnps:
          formData.hasCNPS === true
            ? "Oui"
            : formData.hasCNPS === false
            ? "Non"
            : "Non spécifié",
        cnps_number: formData.cnpsNumber || "N/A",
        cnps_proof_name: formData.cnpsProof
          ? formData.cnpsProof.name
          : "Aucun fichier",
        cnps_proof_base64: cnpsProofBase64,
        identity_card_name: formData.identityCard
          ? formData.identityCard.name
          : "Aucun fichier",
        identity_card_base64: identityCardBase64,
        confirm_accuracy: formData.confirmAccuracy ? "Oui" : "Non",
        accept_terms: formData.acceptTerms ? "Oui" : "Non",
        submission_date: new Date().toLocaleString("fr-FR"),
      };

      console.log("📧 EMAILJS - Données envoyées :");
      console.log("Service ID:", serviceId);
      console.log("Template ID:", templateId);
      console.log("Public Key:", publicKey);
      console.log("Email Data:", emailData);
      console.log("CNPS Proof Base64 Length:", cnpsProofBase64.length);
      console.log("Identity Card Base64 Length:", identityCardBase64.length);

      await emailjs.send(serviceId, templateId, emailData, publicKey);
      console.log("✅ EmailJS - Email envoyé avec succès !");
      return true;
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      throw new Error(
        "Erreur lors de l'envoi du formulaire. Veuillez réessayer."
      );
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await sendEmail();
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Une erreur inattendue s'est produite"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) return <SuccessCard onHome={() => navigate("/")} />;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Modal d'erreur — affiché uniquement après clic sur "Continuer" */}
      {showErrorModal && (
        <ErrorModal
          messages={modalErrors}
          onClose={() => {
            setShowErrorModal(false);
            setModalErrors([]);
          }}
        />
      )}

      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-gray-500" />
          </button>
          <div className="flex items-center justify-center w-25 h-12">
            <img
              src="/logo.jpeg"
              alt="Société Ivoirienne de Raffinage"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-sm font-semibold text-gray-800 uppercase tracking-widest leading-tight">
              Société Ivoirienne de Raffinage
            </h1>
            <p className="text-xs text-gray-400">
              Dossier de candidature — Recrutement 2026
            </p>
          </div>
        </div>
      </header>

      <main className="pt-16 pb-16">
        <div className="max-w-2xl mx-auto px-4 py-8">
          {/* Stepper */}
          <div className="mb-8">
            <div className="relative flex items-center justify-between px-2">
              <div className="absolute left-0 right-0 top-4 h-px bg-gray-200" />
              <div
                className="absolute left-0 top-4 h-px bg-gray-800 transition-all duration-500"
                style={{
                  width: `${(currentStep / (STEPS.length - 1)) * 100}%`,
                }}
              />
              {STEPS.map((step, idx) => {
                const Icon = step.icon;
                const isActive = idx === currentStep;
                const isDone = idx < currentStep;
                return (
                  <div
                    key={step.label}
                    className="relative flex flex-col items-center z-10"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isDone
                          ? "bg-gray-800 border-gray-800"
                          : isActive
                          ? "bg-white border-gray-800 ring-2 ring-gray-200"
                          : "bg-white border-gray-300"
                      }`}
                    >
                      <Icon
                        className={`w-3.5 h-3.5 ${
                          isDone
                            ? "text-white"
                            : isActive
                            ? "text-gray-800"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                    <span
                      className={`mt-2 text-xs font-medium transition-colors ${
                        isActive
                          ? "text-gray-900"
                          : isDone
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white shadow-sm p-6 sm:p-8">
            {currentStep === 0 && (
              <StepIdentity data={formData} onChange={updateField} />
            )}
            {currentStep === 1 && (
              <StepAvailability data={formData} onChange={updateField} />
            )}
            {currentStep === 2 && (
              <StepCNPS data={formData} onChange={updateField} />
            )}
            {currentStep === 3 && (
              <StepEngagement data={formData} onChange={updateField} />
            )}

            {submitError && (
              <div className="mt-4 p-3 rounded-md bg-red-50 border border-red-200">
                <p className="text-sm text-red-600">{submitError}</p>
              </div>
            )}

            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100 gap-4">
              <button
                onClick={goPrev}
                disabled={currentStep === 0}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-md border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                Précédent
              </button>

              {currentStep < 3 ? (
                <button
                  onClick={goNext}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-md bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium transition-colors shadow-sm"
                >
                  Suivant
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={
                    isSubmitting ||
                    !formData.confirmAccuracy ||
                    !formData.acceptTerms
                  }
                  className="flex items-center gap-1.5 px-6 py-2.5 rounded-md bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Soumettre le dossier
                      <CheckSquare className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Vos informations sont traitées de manière strictement confidentielle.
          </p>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-4 text-center text-gray-400 text-xs">
          Contact : supportrecrut@gmail.com &nbsp;·&nbsp; WhatsApp / Wave :
          2250767554748
        </div>
      </footer>
    </div>
  );
}