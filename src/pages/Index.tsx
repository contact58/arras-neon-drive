import { Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroScene from "@/components/HeroScene";
import ServicesSection from "@/components/ServicesSection";
import SocialProof from "@/components/SocialProof";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative">
        <Suspense fallback={
        <div className="w-full h-[70vh] md:h-[80vh] bg-background flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <HeroScene />
        </Suspense>

        {/* Hero overlay content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center px-4 pointer-events-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl font-black mb-4 leading-tight">

              <span className="gradient-text text-neon-cyan">Le meilleur chauffeur,</span>
              <br />
              <span className="text-foreground">au meilleur prix.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg mx-auto">

              VTC moderne et accessible à Arras. Gare, aéroport, trajets urbains.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4 justify-center">

              <Link
                to="/reserver"
                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2">

                Réserver <ArrowRight size={20} />
              </Link>
              <a
                href="tel:0609501557"
                className="px-8 py-4 rounded-xl border border-border text-foreground font-bold text-lg hover:border-primary/40 transition-all">

                Appeler
              </a>
            </motion.div>
            <span className="stealth-seo">Taxi Arras - VTC Arras - Transport Arras</span>
          </div>
        </div>
      </section>

      <ServicesSection />
      <SocialProof />
    </div>);

};

export default Index;