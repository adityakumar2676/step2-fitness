import { useEffect, useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { NAV_LINKS, CTA_LABEL, CTA_SHORT } from '@/lib/constants';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(true);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ink-950/90 backdrop-blur-xl border-b border-ink-700/50'
            : 'bg-transparent'
        }`}
      >
        {bannerOpen && (
          <div className="flex items-center justify-center gap-3 bg-accent-500 px-4 py-1.5 text-xs font-semibold text-ink-950">
            <span>Concept demo — not the official Step 2 Fitness website.</span>
            <button onClick={() => setBannerOpen(false)} aria-label="Dismiss banner" className="p-1 -m-1">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
        <nav className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#home" className="flex items-center gap-2.5 group" aria-label="Step 2 Fitness home">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-500 text-ink-950 transition-transform group-hover:scale-110">
                <Dumbbell className="w-5 h-5" strokeWidth={2.5} />
              </span>
              <span className="font-display font-extrabold text-lg leading-none tracking-tight">
                STEP 2<span className="block text-[10px] font-semibold text-ink-300 tracking-[0.2em] mt-0.5">FITNESS</span>
              </span>
            </a>

            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-ink-200 hover:text-accent-400 transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
              <Button href="#enquire" size="sm">
                {CTA_SHORT}
              </Button>
            </div>

            <button
              className="md:hidden flex items-center justify-center w-10 h-10 text-ink-100"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-xl" onClick={handleNav} />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-ink-900 border-l border-ink-700 flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between h-16 px-5 border-b border-ink-700">
            <span className="font-display font-extrabold text-lg">Menu</span>
            <button
              className="flex items-center justify-center w-10 h-10 text-ink-100"
              onClick={handleNav}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <ul className="flex-1 flex flex-col gap-1 p-5 overflow-y-auto">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNav}
                  className="block py-4 px-4 rounded-xl text-lg font-semibold text-ink-100 hover:bg-ink-800 hover:text-accent-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="p-5 border-t border-ink-700">
            <Button href="#enquire" size="lg" className="w-full">
              {CTA_LABEL}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
