import { MapPin, Navigation, Phone, MessageCircle, Clock } from 'lucide-react';
import { Section, RevealItem } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { BUSINESS, MAPS_LINK, TEL_LINK, WHATSAPP_LINK } from '@/lib/constants';

const { weekdays, sunday } = BUSINESS.hours;
const rows = [
  { day: 'Monday – Saturday', time: `${weekdays.morning}  |  ${weekdays.evening}` },
  { day: 'Sunday', time: sunday },
];

export function Visit() {
  const a = BUSINESS.address;
  return (
    <Section id="visit" className="bg-ink-950">
      <SectionHeading eyebrow="Visit" title="FIND US IN GOVINDPURAM" description="On Hapur Road, near Flora Enclave, Ghaziabad." />
      <div className="mt-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <RevealItem>
          <div className="h-full p-8 rounded-2xl bg-ink-900 border border-ink-700/50 space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" />
              <address className="not-italic text-ink-200 leading-relaxed text-sm">
                {a.line1} {a.line2} {a.line3} {a.line4} {a.line5}
              </address>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" />
              <ul className="space-y-3 text-sm">
                {rows.map((r) => (
                  <li key={r.day}>
                    <div className="font-semibold text-ink-100">{r.day}</div>
                    <div className="text-ink-300">{r.time}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Navigation className="w-4 h-4" />
                Get Directions
              </Button>
              <Button href={TEL_LINK} variant="outline" className="flex-1">
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </Button>
            </div>
            <Button href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" variant="whatsapp" className="w-full">
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </Button>
          </div>
        </RevealItem>
        <RevealItem delay={1}>
          <div className="h-full min-h-[320px] rounded-2xl overflow-hidden border border-ink-700/50 bg-ink-900">
            <iframe
              title="Step 2 Fitness location map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS.mapsQuery)}&output=embed`}
              className="w-full h-full min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </RevealItem>
      </div>
    </Section>
  );
}
