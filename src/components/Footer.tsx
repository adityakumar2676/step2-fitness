import { Dumbbell, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BUSINESS, NAV_LINKS, TEL_LINK, CTA_LABEL } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-ink-900 border-t border-ink-700/50 pt-16 pb-24 md:pb-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-500 text-ink-950">
                <Dumbbell className="w-5 h-5" strokeWidth={2.5} />
              </span>
              <span className="font-display font-extrabold text-lg leading-none tracking-tight">
                STEP 2 FITNESS
                <span className="block text-[10px] font-semibold text-ink-300 tracking-[0.2em] mt-0.5">
                  UNISEX GYM
                </span>
              </span>
            </div>
            <p className="text-sm text-ink-300 leading-relaxed max-w-sm mb-4">
              A modern unisex fitness environment in Govindpuram, Ghaziabad for
              strength training, bodybuilding, weight management and cross-training.
            </p>
            <div className="flex items-start gap-2 text-sm text-ink-300">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-500" />
              <span>{BUSINESS.address.line4}, {BUSINESS.address.line5.split(', ')[0]}</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-200 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-300 mb-4">
              Contact
            </h3>
            <a
              href={TEL_LINK}
              className="flex items-center gap-2 text-sm text-ink-200 hover:text-accent-400 transition-colors mb-4"
            >
              <Phone className="w-4 h-4 text-accent-500" />
              {BUSINESS.phone}
            </a>
            <Button href="#enquire" size="sm" className="w-full">
              {CTA_LABEL}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ink-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-300 text-center sm:text-left">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-300">
            Govindpuram, Ghaziabad, Uttar Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
}
