import { useLocation } from "wouter";
import { Anchor, CheckCircle, Briefcase, Clock, Shield, PenLine } from "lucide-react";

export default function Index() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-3">
          <div className="flex items-center justify-center w-24 h-9">
            <img 
              src="/logo.jpeg" 
              alt="Société Ivoirienne de Raffinage" 
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-sm font-semibold tracking-widest text-gray-800 uppercase leading-tight">
              Société Ivoirienne de Raffinage
            </h1>
            <p className="text-xs text-gray-400">Direction des Ressources Humaines · République de Côte d'Ivoire</p>
          </div>
          <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
            Recrutement 2026
          </span>
        </div>
      </header>

      <main className="pt-16">
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center justify-center min-h-[88vh] py-16 text-center">
          <div className="animate-fade-in-up w-full">
            <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
              Félicitations, vous êtes présélectionné(e) !
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg mx-auto">
              Vous avez été retenu(e) pour poursuivre le processus de recrutement au{" "}
              <span className="font-semibold text-gray-700">Société Ivoirienne de Raffinage</span>.
              Veuillez compléter votre dossier en remplissant le formulaire ci-dessous.
            </p>

            <button
              onClick={() => navigate("/formulaire")}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-gray-900 hover:bg-gray-700 text-white font-medium text-sm shadow-sm transition-colors"
            >
              <PenLine className="w-4 h-4" />
              Accéder au formulaire
            </button>
          </div>

          <div className="animate-fade-in-up-delay-2 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 w-full">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 text-center">
              <div className="w-9 h-9 rounded-md bg-white border border-gray-200 flex items-center justify-center mx-auto mb-3">
                <Briefcase className="w-4 h-4 text-gray-500" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">Stage professionnel</h3>
              <p className="text-gray-400 text-xs">Durée de 3 à 6 mois</p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 text-center">
              <div className="w-9 h-9 rounded-md bg-white border border-gray-200 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-4 h-4 text-gray-500" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">Inscription rapide</h3>
              <p className="text-gray-400 text-xs">Formulaire en 4 étapes</p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 text-center">
              <div className="w-9 h-9 rounded-md bg-white border border-gray-200 flex items-center justify-center mx-auto mb-3">
                <Shield className="w-4 h-4 text-gray-500" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">Données sécurisées</h3>
              <p className="text-gray-400 text-xs">Informations strictement confidentielles</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-4 text-center text-gray-400 text-xs">
          Société Ivoirienne de Raffinage — Direction des Ressources Humaines &nbsp;·&nbsp;
          supportrecrut@gmail.com &nbsp;·&nbsp; WhatsApp / Wave : 2250767554748
        </div>
      </footer>
    </div>
  );
}
