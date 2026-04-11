import { FormData } from "@/pages/FormPage";

interface Props {
  data: FormData;
  onChange: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
}

export default function StepIdentity({ data, onChange }: Props) {
  return (
    <div>
      <div className="mb-6 pb-5 border-b border-gray-100">
        <h2 className="text-base font-semibold text-gray-900">Identité</h2>
        <p className="text-sm text-gray-400 mt-0.5">Étape 1 sur 4 — Informations personnelles</p>
      </div>

      <div className="space-y-4">
        <Field label="ID Employé" required>
          <input
            type="text"
            placeholder="PAA-03-123"
            value={data.employeeId}
            onChange={(e) => onChange("employeeId", e.target.value)}
            required
            className="field-input"
          />
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nom de famille" required>
            <input
              type="text"
              placeholder="KOUASSI"
              value={data.fullName}
              onChange={(e) => onChange("fullName", e.target.value)}
              required
              className="field-input"
            />
          </Field>
          <Field label="Prénom" required>
            <input
              type="text"
              placeholder="Jean"
              value={data.firstName}
              onChange={(e) => onChange("firstName", e.target.value)}
              required
              className="field-input"
            />
          </Field>
        </div>

        <Field label="Téléphone mobile" required>
          <input
            type="tel"
            placeholder="+225 0700000000"
            value={data.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            required
            className="field-input"
          />
        </Field>

        <div className="pt-4 mt-2 border-t border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Personne à prévenir en cas d'urgence
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Nom complet" required>
              <input
                type="text"
                placeholder="TRAORÉ Marie"
                value={data.emergencyName}
                onChange={(e) => onChange("emergencyName", e.target.value)}
                required
                className="field-input"
              />
            </Field>
            <Field label="Téléphone" required>
              <input
                type="tel"
                placeholder="+225 0700000000"
                value={data.emergencyPhone}
                onChange={(e) => onChange("emergencyPhone", e.target.value)}
                required
                className="field-input"
              />
            </Field>
          </div>
        </div>
      </div>

      <style>{`
        .field-input {
          width: 100%;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.375rem;
          padding: 0.5rem 0.75rem;
          color: #111827;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.15s;
        }
        .field-input::placeholder { color: #d1d5db; }
        .field-input:focus { border-color: #6b7280; box-shadow: 0 0 0 2px rgba(107,114,128,0.1); }
      `}</style>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
        {required && <span className="text-gray-400 ml-1 font-normal">*</span>}
      </label>
      {children}
    </div>
  );
}
