import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export function WhatsAppFloat() {
  const url = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    "Hello, I would like to inquire about your services.",
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-600/30 transition-transform hover:scale-105 hover:bg-green-700"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
