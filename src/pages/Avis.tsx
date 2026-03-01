import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Marie D.", text: "Toujours à l'heure, voiture impeccable. Le chauffeur connaît parfaitement Arras et ses environs. Je recommande vivement !", rating: 5, featured: true },
  { name: "Thomas L.", text: "Trajet gare d'Arras → Lille en 40 min. Prix imbattable et voiture très confortable.", rating: 5 },
  { name: "Sophie R.", text: "Transfert CDG impeccable. Suivi de vol, le chauffeur était là malgré le retard de mon avion. Service vraiment pro.", rating: 5, featured: true },
  { name: "Jean-Pierre M.", text: "RDV médical à Lens. Ponctuel, attentionné, et patient. Merci !", rating: 5 },
  { name: "Camille B.", text: "Super service pour nos déplacements professionnels. Fiable et moderne.", rating: 5 },
  { name: "Lucas F.", text: "Réservé en 2 minutes. Chauffeur au top. Je ne prends plus le taxi classique.", rating: 5 },
  { name: "Isabelle G.", text: "Transport pour ma mère âgée. Le chauffeur l'a aidée avec ses bagages. Humain et pro.", rating: 5, featured: true },
  { name: "Olivier P.", text: "Arras-Lesquin en un temps record. Tarif annoncé respecté. Nickel.", rating: 5 },
];

export default function Avis() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            <span className="neon-text">Avis</span> Clients
          </h1>
          <p className="text-muted-foreground text-lg">
            La satisfaction de nos clients, notre meilleure publicité.
          </p>
          <span className="stealth-seo">Taxi Arras avis clients</span>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`neo-card p-6 ${
                review.featured ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              <Quote className="text-primary/30 mb-4" size={review.featured ? 32 : 24} />
              <p className={`text-muted-foreground leading-relaxed mb-4 ${
                review.featured ? "text-base" : "text-sm"
              }`}>
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm">{review.name}</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={12} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
