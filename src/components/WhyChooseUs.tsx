import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const reasons = [
  {
    prefix: 'State-of-the-Art',
    suffix: 'Equipment',
    content: 'Experience top-tier machinery and free weights designed for optimal performance and safety. Our facility is equipped with industry-leading brands to ensure you have the best possible training environment.'
  },
  {
    prefix: 'Expert',
    suffix: 'Trainers',
    content: 'Our certified trainers are here to guide you every step of the way, offering personalized workout plans and expert advice. With years of experience, they ensure that your workouts are both safe and effective, helping you achieve your fitness goals faster and with confidence.'
  },
  {
    prefix: 'Wide Range',
    suffix: 'of Classes',
    content: 'From high-intensity interval training to relaxing yoga sessions, find the perfect class to fit your lifestyle. We offer over 50 classes a week across various disciplines.'
  },
  {
    prefix: 'Welcoming',
    suffix: 'Community',
    content: 'Join a supportive environment where everyone from beginners to pros can feel at home and stay motivated. Our members are the heart of what makes us truly special.'
  }
];

export function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Default to "Expert Trainers" open

  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wide text-white">
            Why Choose Us For Your <span className="text-brand">Fitness</span> Journey?
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden h-[400px] lg:h-[600px] relative">
            <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" 
              alt="Gym lifting" 
              className="w-full h-full object-cover object-top" 
            />
          </div>
          
          {/* Right Accordion List */}
          <div className="flex flex-col gap-4">
            {reasons.map((reason, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`rounded-2xl p-6 lg:p-8 cursor-pointer transition-all duration-300 ${isOpen ? 'bg-zinc-900 border border-zinc-800' : 'bg-transparent border border-transparent hover:bg-zinc-900/50'}`} 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <div className="flex justify-between items-center group">
                    <h3 className="text-xl md:text-2xl font-light">
                      <span className="text-brand">{reason.prefix}</span> <span className="text-white">{reason.suffix}</span>
                    </h3>
                    {isOpen ? (
                      <ArrowUpRight className="text-brand w-5 h-5 shrink-0" />
                    ) : (
                      <ArrowDownRight className="text-zinc-500 group-hover:text-white transition-colors w-5 h-5 shrink-0" />
                    )}
                  </div>
                  
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-zinc-400 text-sm lg:text-base leading-relaxed">
                        {reason.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
