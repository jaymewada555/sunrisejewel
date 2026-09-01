import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({
  message = "Hi Sunrise Diamond & Jewels, I'd like to enquire about your jewellery.",
}: {
  message?: string;
}) {
  const href = `https://wa.me/918424000907?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:scale-105 transition-transform"
    >
      <MessageCircle className="w-7 h-7" fill="white" strokeWidth={0} />
    </a>
  );
}
