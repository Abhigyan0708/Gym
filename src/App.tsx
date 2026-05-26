import { Classes } from './components/Classes';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Pricing } from './components/Pricing';
import { WhyChooseUs } from './components/WhyChooseUs';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-brand selection:text-zinc-950">
      <Navigation />
      <main>
        <Hero />
        <WhyChooseUs />
        <Classes />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

