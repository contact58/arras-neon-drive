import { Phone, MessageCircle } from "lucide-react";

export default function StickyContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/33609501557"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-glow-pulse"
        aria-label="WhatsApp"
      >
        <MessageCircle className="text-background" size={24} />
      </a>
      <a
        href="tel:0609501557"
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Appeler"
      >
        <Phone className="text-primary-foreground" size={24} />
      </a>
    </div>
  );
}
