import site from "@/data/site.json";

export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-black/40 hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.93.56 3.73 1.5 5.27L2 22l4.94-1.6a9.86 9.86 0 0 0 5.1 1.4c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.07c-.25.7-1.45 1.34-2 1.42-.52.08-1.06.11-1.71-.1-.4-.13-1.2-.4-2.18-.84-1.6-.72-3.06-1.96-4.15-3.6-.6-.86-.92-1.74-.96-2.43-.04-.7.21-1.31.6-1.78.18-.22.43-.34.65-.34.2 0 .35.01.5.02.16.01.37-.04.58.45.22.5.74 1.83.8 1.96.07.13.12.29.02.46-.1.18-.16.29-.31.46-.16.18-.34.4-.48.54-.16.16-.33.33-.15.65.18.32.81 1.34 1.74 2.18 1.2 1.07 2.21 1.4 2.54 1.56.33.16.52.13.71-.08.2-.21.81-.94 1.03-1.27.21-.32.43-.27.72-.16.3.11 1.88.89 2.2 1.05.32.16.53.24.61.38.08.15.08.83-.17 1.53z" />
      </svg>
    </a>
  );
}
