import { FormData } from "@/pages/FormPage";

interface Props {
  data: FormData;
  onChange: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
}

export default function StepEngagement({ data, onChange }: Props) {
  return (
    <div>
      <div className="mb-6 pb-5 border-b border-gray-100">
        <h2 className="text-base font-semibold text-gray-900">Engagement</h2>
        <p className="text-sm text-gray-400 mt-0.5">Étape 4 sur 4 — Confirmation finale</p>
      </div>

      <div className="rounded-md border border-gray-200 bg-gray-50 p-4 mb-6">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Récapitulatif du dossier</p>
        <div className="space-y-1.5">
          <Row label="Nom complet" value={`${data.firstName} ${data.fullName}`.trim() || "—"} />
          <Row label="ID Employé" value={data.employeeId || "—"} />
          <Row label="Téléphone" value={data.phone || "—"} />
          <Row label="Disponibilité" value={data.availabilityDate || "—"} />
          <Row label="Carte CNPS" value={data.hasCNPS === true ? "Oui" : data.hasCNPS === false ? "Non" : "—"} />
          {data.hasCNPS === true && <Row label="N° CNPS" value={data.cnpsNumber || "—"} />}
          {data.hasCNPS === false && (
            <Row label="Preuve de paiement" value={data.cnpsProof ? data.cnpsProof.name : "Non fournie"} />
          )}
        </div>
      </div>

      <div className="space-y-4">
        <label
          className="flex items-start gap-3 cursor-pointer"
          onClick={() => onChange("confirmAccuracy", !data.confirmAccuracy)}
        >
          <div
            className={`mt-0.5 w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
              data.confirmAccuracy ? "bg-gray-900 border-gray-900" : "bg-white border-gray-300"
            }`}
          >
            {data.confirmAccuracy && (
              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <div>
            <span className="text-sm text-gray-600 leading-relaxed">
              Je confirme l'exactitude des informations fournies dans ce dossier et m'engage à fournir
              les justificatifs correspondants si demandé.
            </span>
            <span className="text-red-500 font-normal"> *</span>
          </div>
        </label>

        <label
          className="flex items-start gap-3 cursor-pointer"
          onClick={() => onChange("acceptTerms", !data.acceptTerms)}
        >
          <div
            className={`mt-0.5 w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
              data.acceptTerms ? "bg-gray-900 border-gray-900" : "bg-white border-gray-300"
            }`}
          >
            {data.acceptTerms && (
              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <div>
            <span className="text-sm text-gray-600 leading-relaxed">
              J'accepte les conditions générales d'utilisation et la politique de confidentialité du
              Société Ivoirienne de Raffinage concernant le traitement de mes données personnelles.
            </span>
            <span className="text-red-500 font-normal"> *</span>
          </div>
        </label>
      </div>

      {(!data.confirmAccuracy || !data.acceptTerms) && (
        <p className="mt-4 text-xs text-gray-400 text-center">
          Veuillez cocher les deux cases pour soumettre votre dossier.
        </p>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <span className="text-gray-400">{label}</span>
      <span className="text-gray-700 text-right font-medium">{value}</span>
    </div>
  );
}
