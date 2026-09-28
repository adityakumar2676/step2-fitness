import { Dumbbell, Heart, Activity, Shuffle, UserCheck, Users } from 'lucide-react';
import { Section, RevealItem } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

const facilities = [
  {
    icon: Dumbbell,
    title: 'STRENGTH & WEIGHT TRAINING',
    desc: 'Dedicated strength and free-weight training areas.',
    img: 'https://images.pexels.com/photos/6389886/pexels-photo-6389886.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: '',
  },
  {
    icon: Heart,
    title: 'CARDIO',
    desc: 'A dedicated cardio training zone.',
    img: 'https://images.pexels.com/photos/13211514/pexels-photo-13211514.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: '',
  },
  {
    icon: Activity,
    title: 'FUNCTIONAL TRAINING',
    desc: 'Training designed around movement, conditioning and functional fitness.',
    img: 'https://images.pexels.com/photos/7188069/pexels-photo-7188069.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: '',
  },
  {
    icon: Shuffle,
    title: 'CROSS TRAINING',
    desc: 'Cross-training options for varied workouts.',
    img: 'https://images.pexels.com/photos/4720804/pexels-photo-4720804.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: '',
  },
  {
    icon: UserCheck,
    title: 'PERSONAL TRAINING',
    desc: 'Professional trainer support available on the gym floor.',
    img: 'https://images.pexels.com/photos/4164516/pexels-photo-4164516.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: '',
  },
  {
    icon: Users,
    title: 'GROUP TRAINING',
    desc: 'Group-oriented fitness and training options.',
    img: 'https://images.pexels.com/photos/39219683/pexels-photo-39219683.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: '',
  },
];

export function Facilities() {
  return (
    <Section id="facilities" className="bg-ink-950">
      <SectionHeading
        eyebrow="Our Facilities"
        title="BUILT FOR EVERY PART OF YOUR TRAINING"
        description="Multiple training areas designed to support every style of workout — from heavy lifting to cardio and functional fitness."
      />

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:auto-rows-[280px]">
        {facilities.map((f, i) => (
          <RevealItem
            key={f.title}
            delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
            className={f.span}
          >
            <div className="group relative rounded-2xl overflow-hidden h-full min-h-[280px]">
              <img
                src={f.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-500 text-ink-950">
                    <f.icon className="w-5 h-5" />
                  </span>
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg leading-tight mb-1">
                  {f.title}
                </h3>
                <p className="text-sm text-ink-300 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          </RevealItem>
        ))}
      </div>
    </Section>
  );
}
