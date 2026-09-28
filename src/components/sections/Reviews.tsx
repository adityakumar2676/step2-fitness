import { Star, ExternalLink } from 'lucide-react';
import { Section, RevealItem } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { BUSINESS, REVIEWS_LINK } from '@/lib/constants';

export function Reviews() {
  return (
    <Section id="reviews" className="bg-ink-950">
      <SectionHeading eyebrow="Reviews" title="RATED BY MEMBERS ON GOOGLE" />
      <RevealItem>
        <div className="mt-12 flex flex-col items-center gap-2">
          <div className="flex items-center gap-1" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-7 h-7 text-accent-500 fill-accent-500" />
            ))}
          </div>
          <div className="font-display font-extrabold text-3xl">
            {BUSINESS.rating}{' '}
            <span className="text-ink-300 font-normal text-lg">from {BUSINESS.reviewCount} Google reviews</span>
          </div>
          <div className="mt-8">
            <Button href={REVIEWS_LINK} target="_blank" rel="noopener noreferrer" variant="outline" size="lg">
              View Google Reviews
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </RevealItem>
    </Section>
  );
}
