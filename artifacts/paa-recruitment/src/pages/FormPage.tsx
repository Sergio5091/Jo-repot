import { useState } from "react";
import { useLocation } from "wouter";
import { Anchor, User, Calendar, CreditCard, CheckSquare, ChevronLeft, ChevronRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import StepIdentity from "@/components/steps/StepIdentity";
import StepAvailability from "@/components/steps/StepAvailability";
import StepCNPS from "@/components/steps/StepCNPS";
import StepIdentityCard from "@/components/steps/StepIdentityCard";
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

export default function FormPage() {
  const [, navigate] = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const goNext = () => setCurrentStep((s) => Math.min(s + 1, 3));
  const goPrev = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const compressImageToBase64 = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          if (!ctx) {
            reject(new Error('Canvas context not available'));
            return;
          }

          // Calculer les dimensions pour réduire la taille
          let { width, height } = img;
          const maxSize = 600; // Taille maximale réduite à 600px
          
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

          // Dessiner l'image compressée
          ctx.drawImage(img, 0, 0, width, height);

          // Convertir en base64 avec qualité très réduite
          const compressedBase64 = canvas.toDataURL('image/jpeg', 0.3); // Qualité 30%
          
          console.log(`Image compressée: ${file.name} - ${(compressedBase64.length / 1024).toFixed(1)}KB`);
          
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
      // Configuration EmailJS - À remplacer par vos vraies clés
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      // Convertir l'image en base64 si elle existe
      let cnpsProofBase64 = '';
      if (formData.cnpsProof) {
        try {
          cnpsProofBase64 = await compressImageToBase64(formData.cnpsProof);
        } catch (error) {
          console.warn('Erreur lors de la compression de l\'image CNPS:', error);
          cnpsProofBase64 = 'Erreur lors du traitement de l\'image';
        }
      }

      // Convertir la carte d'identité en base64 si elle existe
      let identityCardBase64 = '';
      if (formData.identityCard) {
        try {
          identityCardBase64 = await compressImageToBase64(formData.identityCard);
        } catch (error) {
          console.warn('Erreur lors de la compression de la carte d\'identité:', error);
          identityCardBase64 = 'Erreur lors du traitement de l\'image';
        }
      }

      // Préparer les données pour l'email
      const emailData = {
        to_email: import.meta.env.VITE_RECIPIENT_EMAIL || 'sergionounagnon1@gmail.com', // Email destinataire
        from_name: `${formData.firstName} ${formData.fullName}`.trim(),
        employee_id: formData.employeeId,
        full_name: formData.fullName,
        first_name: formData.firstName,
        phone: formData.phone,
        emergency_name: formData.emergencyName,
        emergency_phone: formData.emergencyPhone,
        health_issue: formData.healthIssue || 'Aucun',
        availability_date: formData.availabilityDate,
        has_cnps: formData.hasCNPS === true ? 'Oui' : formData.hasCNPS === false ? 'Non' : 'Non spécifié',
        cnps_number: formData.cnpsNumber || 'N/A',
        cnps_proof_name: formData.cnpsProof ? formData.cnpsProof.name : 'Aucun fichier',
        cnps_proof_base64: cnpsProofBase64, // Image CNPS en base64
        identity_card_name: formData.identityCard ? formData.identityCard.name : 'Aucun fichier',
        identity_card_base64: identityCardBase64, // Carte d'identité en base64
        confirm_accuracy: formData.confirmAccuracy ? 'Oui' : 'Non',
        accept_terms: formData.acceptTerms ? 'Oui' : 'Non',
        submission_date: new Date().toLocaleString('fr-FR'),
      };

      console.log('📧 EMAILJS - Données envoyées :');
      console.log('Service ID:', serviceId);
      console.log('Template ID:', templateId);
      console.log('Public Key:', publicKey);
      console.log('Email Data:', emailData);
      console.log('CNPS Proof Base64 Length:', cnpsProofBase64.length);
      console.log('Identity Card Base64 Length:', identityCardBase64.length);

      await emailjs.send(serviceId, templateId, emailData, publicKey);
      console.log('✅ EmailJS - Email envoyé avec succès !');
      return true;
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      throw new Error('Erreur lors de l\'envoi du formulaire. Veuillez réessayer.');
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await sendEmail();
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Une erreur inattendue s\'est produite');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) return <SuccessCard onHome={() => navigate("/")} />;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
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
              alt="Port Autonome d'Abidjan" 
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-sm font-semibold text-gray-800 uppercase tracking-widest leading-tight">
              Port Autonome d'Abidjan
            </h1>
            <p className="text-xs text-gray-400">Dossier de candidature — Recrutement 2026</p>
          </div>
        </div>
      </header>

      <main className="pt-16 pb-16">
        <div className="max-w-2xl mx-auto px-4 py-8">

          <div className="mb-8">
            <div className="relative flex items-center justify-between px-2">
              <div className="absolute left-0 right-0 top-4 h-px bg-gray-200" />
              <div
                className="absolute left-0 top-4 h-px bg-gray-800 transition-all duration-500"
                style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
              />
              {STEPS.map((step, idx) => {
                const Icon = step.icon;
                const isActive = idx === currentStep;
                const isDone = idx < currentStep;
                return (
                  <div key={step.label} className="relative flex flex-col items-center z-10">
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
                          isDone ? "text-white" : isActive ? "text-gray-800" : "text-gray-300"
                        }`}
                      />
                    </div>
                    <span
                      className={`mt-2 text-xs font-medium transition-colors ${
                        isActive ? "text-gray-900" : isDone ? "text-gray-500" : "text-gray-300"
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
            {currentStep === 0 && <StepIdentity data={formData} onChange={updateField} />}
            {currentStep === 1 && <StepAvailability data={formData} onChange={updateField} />}
            {currentStep === 2 && <StepCNPS data={formData} onChange={updateField} />}
            {currentStep === 3 && <StepEngagement data={formData} onChange={updateField} />}

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
                  disabled={isSubmitting || !formData.confirmAccuracy || !formData.acceptTerms}
                  className="flex items-center gap-1.5 px-6 py-2.5 rounded-md bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
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
          Contact : supportrecrut@gmail.com &nbsp;·&nbsp; WhatsApp / Wave : 2250767554748
        </div>
      </footer>
    </div>
  );
}
