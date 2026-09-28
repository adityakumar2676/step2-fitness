import { Navbar } from '@/components/Navbar';
import { MobileCTA } from '@/components/MobileCTA';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Facilities } from '@/components/sections/Facilities';
import { Membership } from '@/components/sections/Membership';
import { Reviews } from '@/components/sections/Reviews';
import { Enquire } from '@/components/sections/Enquire';
import { Visit } from '@/components/sections/Visit';

function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-ink-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Membership />
        <Reviews />
        <Enquire />
        <Visit />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}

export default App;
