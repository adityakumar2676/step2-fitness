import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const { ref, visible } = useReveal();
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} max-w-3xl ${alignClass} ${className}`}
    >
      {eyebrow && (
        <div
          className={`flex items-center gap-3 mb-4 ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <span className="h-px w-8 bg-accent-500" />
          <span className="text-accent-400 text-xs font-semibold uppercase tracking-[0.2em]">
            {eyebrow}
          </span>
          {align === 'center' && <span className="h-px w-8 bg-accent-500" />}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-ink-300 text-base sm:text-lg leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
