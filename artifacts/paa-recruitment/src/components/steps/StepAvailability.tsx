import { FormData } from "@/pages/FormPage";

interface Props {
  data: FormData;
  onChange: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
}

export default function StepAvailability({ data, onChange }: Props) {
  return (
    <div>
      <div className="mb-6 pb-5 border-b border-gray-100">
        <h2 className="text-base font-semibold text-gray-900">Disponibilité</h2>
        <p className="text-sm text-gray-400 mt-0.5">Étape 2 sur 4 — Date de prise de poste</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Problème de santé{" "}
            <span className="text-gray-400 font-normal">(optionnel)</span>
          </label>
          <textarea
            rows={3}
            placeholder="Décrivez brièvement tout problème de santé pertinent..."
            value={data.healthIssue}
            onChange={(e) => onChange("healthIssue", e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-md px-3 py-2.5 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 resize-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Date de disponibilité <span className="text-red-500 font-normal">*</span>
          </label>
          <input
            type="date"
            value={data.availabilityDate}
            onChange={(e) => onChange("availabilityDate", e.target.value)}
            required
            className="w-full bg-white border border-gray-200 rounded-md px-3 py-2.5 text-gray-900 text-sm focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all"
          />
        </div>

        <div className="mt-6 rounded-md border border-gray-200 bg-gray-50 p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Rémunération
          </p>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Indemnité de stage</span>
              <span className="font-medium text-gray-800">40 000 – 80 000 FCFA</span>
            </div>
            <div className="h-px bg-gray-200" />
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Salaire CDI</span>
              <span className="font-medium text-gray-800">100 000 – 250 000 FCFA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
