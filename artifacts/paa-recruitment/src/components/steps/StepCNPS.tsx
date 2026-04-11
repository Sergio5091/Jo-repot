import { useState, useRef } from "react";
import { Upload, X, FileText, CreditCard } from "lucide-react";
import { FormData } from "@/pages/FormPage";

interface Props {
  data: FormData;
  onChange: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
}

export default function StepCNPS({ data, onChange }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const identityCardInputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [identityDragging, setIdentityDragging] = useState(false);

  const handleFile = (file: File | null) => onChange("cnpsProof", file);
  const handleIdentityCard = (file: File | null) => onChange("identityCard", file);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const onIdentityDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIdentityDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleIdentityCard(file);
  };

  // Validation pour vérifier si les fichiers sont requis
  const isFilesRequired = data.hasCNPS === false;
  const isCnpsProofMissing = isFilesRequired && !data.cnpsProof;
  const isIdentityCardMissing = isFilesRequired && !data.identityCard;
  const hasValidationError = isCnpsProofMissing || isIdentityCardMissing;

  return (
    <div>
      <div className="mb-6 pb-5 border-b border-gray-100">
        <h2 className="text-base font-semibold text-gray-900">CNPS</h2>
        <p className="text-sm text-gray-400 mt-0.5">Étape 3 sur 4 — Caisse Nationale de Prévoyance Sociale</p>
      </div>

      <div className="mb-5">
        <p className="text-sm font-medium text-gray-700 mb-3">Avez-vous une carte CNPS ? <span className="text-red-500 font-normal">*</span></p>
        <div className="flex gap-2">
          <button
            onClick={() => onChange("hasCNPS", true)}
            className={`px-4 py-2 rounded-md border-2 font-medium text-sm transition-all ${
              data.hasCNPS === true
                ? "bg-gray-900 border-gray-900 text-white"
                : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            Oui
          </button>
          <button
            onClick={() => onChange("hasCNPS", false)}
            className={`px-4 py-2 rounded-md border-2 font-medium text-sm transition-all ${
              data.hasCNPS === false
                ? "bg-gray-900 border-gray-900 text-white"
                : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            Non
          </button>
        </div>
      </div>

      {data.hasCNPS === true && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Numéro CNPS <span className="text-red-500 font-normal">*</span>
          </label>
          <input
            type="text"
            placeholder="Ex : CI-2024-00000"
            value={data.cnpsNumber}
            onChange={(e) => onChange("cnpsNumber", e.target.value)}
            required
            className="w-full bg-white border border-gray-200 rounded-md px-3 py-2.5 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all"
          />
        </div>
      )}

      {data.hasCNPS === false && (
        <div className="space-y-4">
          <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm font-semibold text-gray-800 mb-1">
              Frais de dossier CNPS : <span className="font-bold">14 500 FCFA</span>
            </p>
            <p className="text-xs text-gray-500 leading-relaxed mb-2">
              Ces frais correspondent à l'ouverture et au traitement de votre dossier auprès de la
              Caisse Nationale de Prévoyance Sociale (CNPS) en Côte d'Ivoire.
            </p>
            <p className="text-xs text-gray-600">
              Paiement via WhatsApp / Wave :{" "}
              <span className="font-semibold text-gray-900">2250767554748</span>
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Preuve de paiement</p>
              <div
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={onDrop}
                onClick={() => !data.cnpsProof && fileInputRef.current?.click()}
                className={`rounded-md border-2 border-dashed p-6 text-center transition-all ${
                  dragging
                    ? "border-gray-400 bg-gray-50"
                    : data.cnpsProof
                    ? "border-gray-300 bg-gray-50 cursor-default"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 cursor-pointer"
                }`}
              >
                {data.cnpsProof ? (
                  <div className="flex items-center justify-center gap-3">
                    <FileText className="w-5 h-5 text-gray-500" />
                    <div className="text-left">
                      <p className="text-sm font-medium text-gray-700">{data.cnpsProof.name}</p>
                      <p className="text-xs text-gray-400">{(data.cnpsProof.size / 1024).toFixed(1)} KB</p>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleFile(null); }}
                      className="ml-auto w-7 h-7 rounded-md border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-3.5 h-3.5 text-gray-500" />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">
                      Glissez un fichier ici ou{" "}
                      <span className="text-gray-600 underline">parcourir</span>
                    </p>
                    <p className="text-xs text-gray-300 mt-1">JPG, PNG ou PDF</p>
                  </>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,.pdf"
                  className="hidden"
                  onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Pièce d'identité (Recto/Verso)</p>
              <div
                onDragOver={(e) => { e.preventDefault(); setIdentityDragging(true); }}
                onDragLeave={() => setIdentityDragging(false)}
                onDrop={onIdentityDrop}
                onClick={() => !data.identityCard && identityCardInputRef.current?.click()}
                className={`rounded-md border-2 border-dashed p-6 text-center transition-all ${
                  identityDragging
                    ? "border-gray-400 bg-gray-50"
                    : data.identityCard
                    ? "border-gray-300 bg-gray-50 cursor-default"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 cursor-pointer"
                }`}
              >
                {data.identityCard ? (
                  <div className="flex items-center justify-center gap-3">
                    <CreditCard className="w-5 h-5 text-gray-500" />
                    <div className="text-left">
                      <p className="text-sm font-medium text-gray-700">{data.identityCard.name}</p>
                      <p className="text-xs text-gray-400">{(data.identityCard.size / 1024).toFixed(1)} KB</p>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleIdentityCard(null); }}
                      className="ml-auto w-7 h-7 rounded-md border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-3.5 h-3.5 text-gray-500" />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">
                      Glissez un fichier ici ou{" "}
                      <span className="text-gray-600 underline">parcourir</span>
                    </p>
                    <p className="text-xs text-gray-300 mt-1">JPG, PNG ou PDF - Recto/Verso</p>
                  </>
                )}
                <input
                  ref={identityCardInputRef}
                  type="file"
                  accept="image/*,.pdf"
                  className="hidden"
                  onChange={(e) => handleIdentityCard(e.target.files?.[0] ?? null)}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {data.hasCNPS === null && (
        <div className="rounded-md border border-gray-100 bg-gray-50 p-6 text-center text-sm text-gray-400">
          Veuillez sélectionner une option ci-dessus.
        </div>
      )}
    </div>
  );
}
