import heroImage from '../assets/images/hero_gym_flex_1779734912876.png';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Gym background" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/80 to-zinc-950/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand font-bold uppercase tracking-[0.2em] mb-4 block">
              Unleash Your Potential
            </span>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-white mb-6 leading-[0.9]">
              Build Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">
                Best Body
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-xl font-light">
              Join the elite community of fitness enthusiasts. State-of-the-art equipment, expert trainers, and a relentless pursuit of greatness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#join"
                className="bg-brand text-zinc-950 px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-brand-hover transition-colors flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#classes"
                className="bg-transparent border-2 border-zinc-500 text-white px-8 py-4 rounded font-bold uppercase tracking-wider hover:border-brand hover:text-brand transition-colors flex items-center justify-center"
              >
                Explore Classes
              </a>
            </div>
          </motion.div>
          
          {/* Quick Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 py-8"
          >
            <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 p-6 rounded-2xl">
              <div className="font-display text-4xl font-bold text-white mb-1">10k+</div>
              <div className="text-zinc-400 text-sm uppercase tracking-wider">Members</div>
            </div>
            <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 p-6 rounded-2xl">
              <div className="font-display text-4xl font-bold text-white mb-1">150+</div>
              <div className="text-zinc-400 text-sm uppercase tracking-wider">Machines</div>
            </div>
            <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 p-6 rounded-2xl">
              <div className="font-display text-4xl font-bold text-white mb-1">50+</div>
              <div className="text-zinc-400 text-sm uppercase tracking-wider">Trainers</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
