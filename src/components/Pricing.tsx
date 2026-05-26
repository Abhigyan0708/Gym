import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '49',
    description: 'Perfect for getting started.',
    features: [
      'Access to gym equipment',
      'Locker room access',
      'Free fitness assessment',
      '1 Guest pass per month'
    ]
  },
  {
    name: 'Pro',
    price: '89',
    popular: true,
    description: 'The standard for serious lifters.',
    features: [
      '24/7 Gym access',
      'All group classes included',
      'Locker & sauna access',
      'Monthly body composition scan',
      '4 Guest passes per month'
    ]
  },
  {
    name: 'Elite',
    price: '149',
    description: 'For those who want it all.',
    features: [
      '24/7 Gym access',
      'Unlimited group classes',
      '2 Personal training sessions/mo',
      'Priority class booking',
      'Unlimited guest passes',
      'Free protein shakes'
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand font-bold uppercase tracking-[0.2em] mb-2 block">Memberships</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Invest In Yourself
          </h2>
          <p className="text-zinc-400 text-lg">
            No hidden fees. No long-term contracts unless you want them. Just clear, honest pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative bg-zinc-950 rounded-lg p-8 border ${
                plan.popular ? 'border-brand' : 'border-zinc-800'
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-zinc-950 px-4 py-1 rounded-full font-bold uppercase tracking-wider text-xs">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide mb-2">
                  {plan.name}
                </h3>
                <p className="text-zinc-400 h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline text-white">
                  <span className="text-5xl font-display font-bold">${plan.price}</span>
                  <span className="text-zinc-400 ml-2">/month</span>
                </div>
              </div>
              
              <ul className="mb-8 flex-1 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-zinc-300">
                    <Check className="h-5 w-5 text-brand shrink-0 mr-3 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 rounded font-bold uppercase tracking-wider transition-colors ${
                  plan.popular 
                    ? 'bg-brand text-zinc-950 hover:bg-brand-hover' 
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
