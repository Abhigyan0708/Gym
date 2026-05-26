import { Dumbbell, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-8 w-8 text-brand" />
            <span className="font-display font-bold text-2xl tracking-wider uppercase text-white">
              Gym Junkies
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'About', 'Sessions', 'Pricing'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-brand px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider transition-colors"
                >
                  {item}
                </a>
              ))}
              <a href="#join" className="bg-brand text-zinc-950 px-6 py-2 rounded font-bold uppercase tracking-wide hover:bg-brand-hover transition-colors">
                Join Now
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About', 'Classes', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-brand block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="#join" className="block text-center mt-4 bg-brand text-zinc-950 px-6 py-3 rounded font-bold uppercase tracking-wide hover:bg-brand-hover transition-colors" onClick={() => setIsOpen(false)}>
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
