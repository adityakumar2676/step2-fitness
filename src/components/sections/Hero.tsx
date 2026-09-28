import { ArrowRight, MessageCircle, Star, Users, Heart, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { WHATSAPP_LINK, BUSINESS, CTA_LABEL } from '@/lib/constants';

const credibility = [
  { icon: Star, label: `${BUSINESS.rating}★ Google Rating` },
  { icon: Users, label: `${BUSINESS.reviewCount} Reviews` },
  { icon: Heart, label: 'Unisex Gym' },
  { icon: Clock, label: 'Morning & Evening Sessions' },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/29825227/pexels-photo-29825227.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 w-full pt-36 pb-16 md:pt-32">
        <div className="max-w-2xl">
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse-slow" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-300">
              {BUSINESS.name}
            </span>
          </div>

          <h1
            className="animate-fade-up font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-balance"
            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
          >
            Unisex Gym in Govindpuram, Ghaziabad
          </h1>
          <p
            className="animate-fade-up mt-4 font-display font-extrabold text-2xl sm:text-3xl text-accent-500"
            style={{ animationDelay: '0.15s', animationFillMode: 'both' }}
          >
            Train Strong. Live Strong.
          </p>

          <p
            className="animate-fade-up mt-6 text-base sm:text-lg md:text-xl text-ink-200 leading-relaxed max-w-xl text-balance"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            A modern unisex fitness environment in Govindpuram for strength training,
            bodybuilding, weight management and cross-training.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col sm:flex-row gap-3"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            <Button href="#enquire" size="lg" className="w-full sm:w-auto">
              {CTA_LABEL}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </Button>
          </div>

          {/* Credibility strip */}
          <div
            className="animate-fade-up mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            {credibility.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5 text-sm text-ink-200"
              >
                <item.icon className="w-4 h-4 text-accent-500 flex-shrink-0" />
                <span className="font-medium leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ink-300 animate-pulse-slow">
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-ink-400 to-transparent" />
      </div>
    </section>
  );
}
