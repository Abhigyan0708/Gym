import { ArrowRight } from 'lucide-react';

const classes = [
  {
    name: 'Strength & Conditioning',
    time: 'Daily â 6AM, 6PM',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop',
  },
  {
    name: 'HIIT Burn',
    time: 'Mon, Wed, Fri â 7AM',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1325&auto=format&fit=crop',
  },
  {
    name: 'Powerlifting',
    time: 'Tue, Thu â 5PM',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
  },
];

export function Classes() {
  return (
    <section id="classes" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand font-bold uppercase tracking-[0.2em] mb-2 block">Our Programs</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Push Your Limits
            </h2>
          </div>
          <a href="#schedule" className="text-white hover:text-brand flex items-center font-bold uppercase tracking-wider transition-colors">
            Full Schedule <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classes.map((cls) => (
            <div key={cls.name} className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer">
              <img 
                src={cls.image} 
                alt={cls.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-brand font-bold uppercase tracking-wider text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {cls.time}
                </div>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide">
                  {cls.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
