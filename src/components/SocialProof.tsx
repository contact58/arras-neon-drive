import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Marie D.", text: "Toujours à l'heure, voiture impeccable. Je recommande !", rating: 5 },
  { name: "Thomas L.", text: "Trajet gare d'Arras → Lille en 40 min. Prix imbattable.", rating: 5 },
  { name: "Sophie R.", text: "Service top pour aller à l'aéroport CDG. Chauffeur très pro.", rating: 5 },
  { name: "Jean-Pierre M.", text: "Utilisé pour un RDV médical. Ponctuel et attentionné.", rating: 5 },
];

export default function SocialProof() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ce que disent nos <span className="neon-text">clients</span>
          </h2>
          <span className="stealth-seo">Taxi Arras</span>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="neo-card p-6"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
              <p className="text-sm font-bold">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
