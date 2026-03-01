import { motion } from "framer-motion";
import { Train, Plane, Car } from "lucide-react";

const services = [
  {
    icon: Train,
    title: "Gare & Station",
    description: "Navette gare d'Arras, Lille, et toutes les gares du Pas-de-Calais. Ponctualité garantie.",
    tag: "Populaire",
  },
  {
    icon: Plane,
    title: "Aéroport",
    description: "Transferts CDG, Orly, Lille-Lesquin. Suivi de vol en temps réel, zéro stress.",
    tag: "Efficace",
  },
  {
    icon: Car,
    title: "Trajets Urbains",
    description: "Courses en ville, rendez-vous médicaux, sorties. Moderne et accessible pour tous.",
    tag: "Accessible",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Nos <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Un service de transport moderne, efficace et accessible à Arras et ses environs.
          </p>
          <span className="stealth-seo">Taxi Arras</span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="neo-card p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="text-primary" size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {service.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
