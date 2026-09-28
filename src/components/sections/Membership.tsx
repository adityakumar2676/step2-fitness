import { MessageCircle } from 'lucide-react';
import { Section, RevealItem } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { WHATSAPP_LINK, TEL_LINK } from '@/lib/constants';

export function Membership() {
  return (
    <Section id="membership" className="bg-ink-900">
      <SectionHeading
        eyebrow="Membership"
        title="MEMBERSHIP PLANS"
        description="Membership plans are available. Ask for current rates on WhatsApp or by phone."
      />
      <RevealItem>
        <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
          <Button href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="lg">
            <MessageCircle className="w-5 h-5" />
            Ask for Rates
          </Button>
          <Button href={TEL_LINK} variant="outline" size="lg">
            Call to Enquire
          </Button>
        </div>
      </RevealItem>
    </Section>
  );
}
