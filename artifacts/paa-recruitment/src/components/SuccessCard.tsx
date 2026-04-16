import { CheckCircle, Home, Mail, Phone, Anchor } from "lucide-react";

interface Props {
  onHome: () => void;
}

export default function SuccessCard({ onHome }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center gap-3">
          <div className="flex items-center justify-center w-24 h-8">
            <img 
              src="/logo.jpeg" 
              alt="Société Ivoirienne de Raffinage" 
              className="h-full w-auto object-contain"
            />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-gray-800 uppercase tracking-widest">Société Ivoirienne de Raffinage</h1>
            <p className="text-xs text-gray-400">Direction des Ressources Humaines</p>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center pt-16 px-6 py-16">
        <div className="max-w-md w-full text-center animate-fade-in-up">
          <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Dossier soumis avec succès
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Votre candidature a bien été enregistrée. Vous serez contacté(e) par la
            Direction des Ressources Humaines dans les plus brefs délais.
          </p>

          <div className="rounded-md border border-gray-200 bg-white p-4 mb-8 text-sm space-y-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Nos coordonnées</p>
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <Mail className="w-4 h-4 text-gray-400" />
              <span>supportrecrut@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <Phone className="w-4 h-4 text-gray-400" />
              <span>WhatsApp / Wave : 2250767554748</span>
            </div>
          </div>

          <button
            onClick={onHome}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium shadow-sm transition-colors"
          >
            <Home className="w-4 h-4" />
            Retour à l'accueil
          </button>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-4 text-center text-gray-400 text-xs">
          Société Ivoirienne de Raffinage — République de Côte d'Ivoire
        </div>
      </footer>
    </div>
  );
}
