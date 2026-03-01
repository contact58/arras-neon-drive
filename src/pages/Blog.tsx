import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "VTC ou Taxi à Arras : comment choisir ?",
    excerpt: "Découvrez les différences entre VTC et taxi à Arras. Prix, confort, disponibilité : on vous dit tout. Taxi Arras",
    date: "15 Fév 2026",
    tag: "Guide",
  },
  {
    title: "Les 5 trajets les plus demandés au départ d'Arras",
    excerpt: "Gare d'Arras, aéroport de Lille-Lesquin, CDG... Voici les itinéraires préférés de nos clients. Taxi Arras",
    date: "10 Fév 2026",
    tag: "Tendances",
  },
  {
    title: "Comment réserver un VTC à Arras en 2 minutes",
    excerpt: "Notre guide pas à pas pour réserver votre chauffeur en quelques clics. Simple, moderne, accessible. Taxi Arras",
    date: "5 Fév 2026",
    tag: "Tutoriel",
  },
  {
    title: "Taxi Arras : tarifs et conseils pour économiser",
    excerpt: "Tout savoir sur les tarifs de transport à Arras. Comparez et trouvez le meilleur prix pour vos trajets.",
    date: "1 Fév 2026",
    tag: "Prix",
  },
  {
    title: "Transport médical à Arras : vos options",
    excerpt: "RDV médicaux, hôpital, spécialistes : notre service de transport adapté et ponctuel pour vos besoins de santé.",
    date: "25 Jan 2026",
    tag: "Santé",
  },
  {
    title: "Pourquoi choisir un VTC plutôt qu'un taxi à Arras ?",
    excerpt: "Confort, prix fixe, réservation à l'avance : les avantages du VTC face au taxi traditionnel à Arras.",
    date: "20 Jan 2026",
    tag: "Comparatif",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            <span className="gradient-text">Blog</span> & Actualités
          </h1>
          <p className="text-muted-foreground text-lg">
            Conseils, guides et actualités sur le transport à Arras.
          </p>
          <span className="stealth-seo">Taxi Arras blog VTC transport</span>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="neo-card p-6 flex flex-col cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {article.tag}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock size={12} /> {article.date}
                </span>
              </div>
              <h2 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {article.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm text-primary font-medium">
                Lire la suite <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
