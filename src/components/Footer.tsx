import { Dumbbell, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Dumbbell className="h-8 w-8 text-brand" />
              <span className="font-display font-bold text-2xl tracking-wider uppercase text-white">
                Gym Junkies
              </span>
            </div>
            <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed">
              The premier fitness destination for those who demand excellence. 
              Top-tier equipment, elite trainers, and a community of champions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 bg-zinc-900 flex items-center justify-center rounded text-zinc-400 hover:text-brand hover:bg-zinc-800 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-zinc-900 flex items-center justify-center rounded text-zinc-400 hover:text-brand hover:bg-zinc-800 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-zinc-900 flex items-center justify-center rounded text-zinc-400 hover:text-brand hover:bg-zinc-800 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Classes', 'Trainers', 'Pricing'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-zinc-400 hover:text-brand transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4 text-zinc-400">
              <li>123 Fitness Blvd<br/>Iron City, IC 90210</li>
              <li><a href="tel:5551234567" className="hover:text-brand transition-colors">(555) 123-4567</a></li>
              <li><a href="mailto:info@gymjunkies.com" className="hover:text-brand transition-colors">info@gymjunkies.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Gym Junkies. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
