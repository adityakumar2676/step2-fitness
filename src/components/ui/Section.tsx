import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface RevealItemProps {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4;
  className?: string;
}

export function RevealItem({ children, delay, className = '' }: RevealItemProps) {
  const { ref, visible } = useReveal();
  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
