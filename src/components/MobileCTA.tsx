import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { TEL_LINK, WHATSAPP_LINK, CTA_LABEL, CTA_SHORT } from '@/lib/constants';

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden pb-safe">
      <div className="grid grid-cols-3 gap-px bg-ink-700/50 border-t border-ink-700 backdrop-blur-xl">
        <a
          href={TEL_LINK}
          className="flex flex-col items-center justify-center gap-1 py-3 bg-ink-900/95 active:bg-ink-800 transition-colors"
          aria-label="Call now"
        >
          <Phone className="w-5 h-5 text-accent-400" />
          <span className="text-xs font-semibold text-ink-100">Call</span>
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-ink-900/95 active:bg-ink-800 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-[#25D366]" />
          <span className="text-xs font-semibold text-ink-100">WhatsApp</span>
        </a>
        <a
          href="#enquire"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-accent-500 active:bg-accent-400 transition-colors"
          aria-label={CTA_LABEL}
        >
          <Sparkles className="w-5 h-5 text-ink-950" />
          <span className="text-xs font-bold text-ink-950">{CTA_SHORT}</span>
        </a>
      </div>
    </div>
  );
}
