import type { ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'ghost' | 'whatsapp';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: 'button' | 'submit';
  ariaLabel?: string;
  target?: string;
  rel?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent-500 text-ink-950 hover:bg-accent-400 shadow-lg shadow-accent-500/20',
  outline:
    'border border-ink-500 text-ink-100 hover:border-accent-500 hover:text-accent-400',
  ghost: 'text-ink-100 hover:text-accent-400',
  whatsapp:
    'bg-[#25D366] text-ink-950 hover:bg-[#1ebe5a] shadow-lg shadow-[#25D366]/20',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ariaLabel,
  target,
  rel,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold uppercase tracking-wider transition-all duration-300 active:scale-95 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={base} aria-label={ariaLabel} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
