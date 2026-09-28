import { useState, type FormEvent } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { Section, RevealItem } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { BUSINESS, whatsappLink } from '@/lib/constants';

const goals = ['Muscle Building', 'Weight Loss', 'Strength', 'General Fitness', 'Cross Training', 'Other'];
const field =
  'w-full px-4 py-3 rounded-xl bg-ink-900 border border-ink-700 text-ink-100 placeholder-ink-400 focus:outline-none focus:border-accent-500 transition-colors';
const label = 'block text-xs font-semibold uppercase tracking-wider text-ink-300 mb-2';

export function Enquire() {
  const [link, setLink] = useState<string | null>(null);
  const trial = BUSINESS.offersFreeTrial;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const goal = d.get('goal') ? `, goal: ${d.get('goal')}` : '';
    const url = whatsappLink(
      `Hi, I'm ${d.get('name')} (${d.get('phone')})${goal}. I'd like to ${trial ? 'claim a free trial at' : 'enquire about joining'} ${BUSINESS.name}.`
    );
    window.open(url, '_blank', 'noopener');
    setLink(url);
  };

  return (
    <Section id="enquire" className="bg-ink-900">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-balance">
          {trial ? 'CLAIM YOUR FREE TRIAL' : 'ENQUIRE ABOUT MEMBERSHIP'}
        </h2>
        <p className="mt-5 text-ink-300 text-base sm:text-lg">
          Send us your details. Your message opens in WhatsApp, ready to send.
        </p>
      </div>
      <RevealItem>
        <div className="max-w-xl mx-auto">
          {link ? (
            <div className="p-8 rounded-3xl bg-ink-950 border border-accent-500/30 text-center">
              <h3 className="font-display font-extrabold text-2xl mb-3">Opening WhatsApp to send your message</h3>
              <p className="text-ink-300 mb-6">If it didn't open, use the button below.</p>
              <Button href={link} target="_blank" rel="noopener noreferrer" variant="whatsapp">
                <MessageCircle className="w-5 h-5" />
                Open WhatsApp
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="p-6 md:p-8 rounded-3xl bg-ink-950 border border-ink-700/50 space-y-5">
              <div>
                <label htmlFor="name" className={label}>Full Name</label>
                <input id="name" name="name" type="text" required autoComplete="name" className={field} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="phone" className={label}>Phone Number</label>
                <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <label htmlFor="goal" className={label}>Fitness Goal</label>
                <select id="goal" name="goal" defaultValue="" className={`${field} appearance-none`}>
                  <option value="" disabled>Select a goal</option>
                  {goals.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send on WhatsApp
                <Send className="w-5 h-5" />
              </Button>
            </form>
          )}
        </div>
      </RevealItem>
    </Section>
  );
}
