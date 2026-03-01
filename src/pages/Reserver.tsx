import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, ArrowLeft, Check } from "lucide-react";

const steps = ["Date & Heure", "Départ", "Destination", "Passagers"];

export default function Reserver() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    date: "",
    time: "",
    pickup: "",
    dropoff: "",
    passengers: "1",
    name: "",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateForm = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = () => {
    const summary = `Réservation VTC - Les Chauffeurs d'Arras
Date: ${form.date} à ${form.time}
Départ: ${form.pickup}
Destination: ${form.dropoff}
Passagers: ${form.passengers}
Nom: ${form.name}
Téléphone: ${form.phone}
Notes: ${form.notes}`;

    const mailtoLink = `mailto:contact@leschauffeursdarras.com?subject=${encodeURIComponent(
      "Nouvelle réservation VTC"
    )}&body=${encodeURIComponent(summary)}`;
    
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="neo-card p-12 text-center max-w-md"
        >
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Check className="text-primary" size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-2">Demande envoyée !</h2>
          <p className="text-muted-foreground">
            Nous vous recontacterons dans les plus brefs délais pour confirmer votre réservation.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            <span className="gradient-text">Réserver</span> un trajet
          </h1>
          <p className="text-muted-foreground">Simple, rapide, efficace.</p>
          <span className="stealth-seo">Taxi Arras réservation</span>
        </motion.div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  i <= step
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className={`w-8 h-0.5 ${i < step ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Form steps */}
        <div className="neo-card p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {step === 0 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Calendar className="text-primary" size={20} /> Date & Heure
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Date</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => updateForm("date", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Heure</label>
                      <input
                        type="time"
                        value={form.time}
                        onChange={(e) => updateForm("time", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <MapPin className="text-primary" size={20} /> Lieu de départ
                  </h3>
                  <input
                    type="text"
                    placeholder="Ex: Gare d'Arras, 12 rue de la Paix..."
                    value={form.pickup}
                    onChange={(e) => updateForm("pickup", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <MapPin className="text-neon-cyan" size={20} /> Destination
                  </h3>
                  <input
                    type="text"
                    placeholder="Ex: Aéroport CDG, Centre de Lille..."
                    value={form.dropoff}
                    onChange={(e) => updateForm("dropoff", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Users className="text-primary" size={20} /> Informations
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Nom</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => updateForm("name", e.target.value)}
                        placeholder="Votre nom"
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Téléphone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateForm("phone", e.target.value)}
                        placeholder="06 XX XX XX XX"
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Passagers</label>
                    <select
                      value={form.passengers}
                      onChange={(e) => updateForm("passengers", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                        <option key={n} value={n}>{n} passager{n > 1 ? "s" : ""}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Notes (optionnel)</label>
                    <textarea
                      value={form.notes}
                      onChange={(e) => updateForm("notes", e.target.value)}
                      placeholder="Bagages, besoins particuliers..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="px-6 py-3 rounded-xl border border-border text-foreground font-medium disabled:opacity-30 hover:border-primary/40 transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={16} /> Retour
            </button>
            {step < steps.length - 1 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                Suivant <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                Envoyer <Check size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
