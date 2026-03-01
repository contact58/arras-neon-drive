import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-outfit font-black text-sm">LC</span>
              </div>
              <span className="font-bold">Les Chauffeurs d'Arras</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Le meilleur chauffeur au meilleur prix. Service VTC moderne et accessible à Arras.
            </p>
            <span className="stealth-seo">Taxi Arras VTC transport Arras gare aéroport</span>
          </div>
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
              <Link to="/reserver" className="hover:text-foreground transition-colors">Réserver</Link>
              <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <Link to="/avis" className="hover:text-foreground transition-colors">Avis Clients</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="tel:0609501557" className="hover:text-foreground transition-colors">06 09 50 15 57</a>
              <a href="mailto:contact@leschauffeursdarras.com" className="hover:text-foreground transition-colors">contact@leschauffeursdarras.com</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Les Chauffeurs d'Arras. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
