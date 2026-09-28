import { Dumbbell, TrendingUp, Weight, Activity } from "lucide-react";
import { Section, RevealItem } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Dumbbell,
    title: "Bodybuilding",
    desc: "Structured hypertrophy-focused training for serious muscle development.",
  },
  {
    icon: TrendingUp,
    title: "Weight Gain",
    desc: "Progressive overload and nutrition guidance to help you build mass.",
  },
  {
    icon: Weight,
    title: "Weight Loss",
    desc: "Targeted training and cardio programming to support fat-loss goals.",
  },
  {
    icon: Activity,
    title: "Cross Training",
    desc: "Dynamic, varied workouts that build conditioning and functional fitness.",
  },
];

export function About() {
  return (
    <Section id="about" className="bg-ink-950">
      <SectionHeading
        eyebrow="About Us"
        title={
          <>
            MORE THAN A GYM.
            <br />A PLACE TO GET STRONGER.
          </>
        }
        description="Step 2 Fitness is where we train for bodybuilding, weight gain, weight loss, weight lifting, and cross training — in a welcoming environment for both men and women."
      />

      <div className="mt-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <RevealItem>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
            <img
              src="https://images.pexels.com/photos/6389516/pexels-photo-6389516.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Barbell on the gym floor"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
          </div>
        </RevealItem>

        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <RevealItem key={f.title} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div className="p-6 rounded-2xl bg-ink-900 border border-ink-700/50 hover:border-accent-500/40 transition-all duration-300 h-full group">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500/10 text-accent-500 mb-4 group-hover:bg-accent-500 group-hover:text-ink-950 transition-colors duration-300">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-ink-300 leading-relaxed">{f.desc}</p>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </Section>
  );
}
