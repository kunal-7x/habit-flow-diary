import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const plans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    description: "Perfect for getting started with habit tracking",
    icon: Star,
    gradient: "gradient-accent",
    features: [
      "Up to 5 habits",
      "Basic progress tracking",
      "Simple reminders",
      "Mobile app access",
      "Community support"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "9",
    period: "month",
    description: "Advanced features for serious habit builders",
    icon: Zap,
    gradient: "gradient-primary",
    features: [
      "Unlimited habits",
      "Advanced analytics",
      "Smart reminders",
      "Goal templates",
      "Priority support",
      "Data export",
      "Custom themes",
      "Habit streaks"
    ],
    popular: true
  },
  {
    name: "Lifetime",
    price: "149",
    period: "one-time",
    description: "All Pro features, forever. Best value!",
    icon: Crown,
    gradient: "gradient-secondary",
    features: [
      "Everything in Pro",
      "Lifetime updates",
      "Premium support",
      "Early access to new features",
      "Exclusive community",
      "Personal coaching session",
      "No recurring fees",
      "Future-proof"
    ],
    popular: false
  }
];

export const PricingSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold font-dm-sans mb-6">
            Choose Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Perfect Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and upgrade as you grow. All plans include our core habit tracking features.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isPopular = plan.popular;
            
            return (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative ${isPopular ? 'z-10' : ''}`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-primary px-4 py-2 rounded-full text-white text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <Card className={`glass border-glass-border p-8 h-full relative overflow-hidden transition-all duration-500 ${
                  isPopular ? 'border-primary/30 glow-primary' : 'hover:border-primary/20'
                }`}>
                  {/* Background gradient overlay for popular plan */}
                  {isPopular && (
                    <div className="absolute inset-0 bg-gradient-primary opacity-5" />
                  )}

                  <div className="relative z-10">
                    {/* Plan icon */}
                    <div className={`w-16 h-16 bg-${plan.gradient} rounded-xl flex items-center justify-center mb-6 ${
                      isPopular ? 'animate-pulse-glow' : ''
                    }`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Plan name and price */}
                    <h3 className="text-2xl font-bold font-dm-sans mb-2">{plan.name}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground ml-2">/{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-8">{plan.description}</p>

                    {/* Features list */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      className={`w-full ${
                        isPopular
                          ? 'bg-gradient-primary hover-scale glow-primary'
                          : 'glass border-glass-border hover-scale'
                      }`}
                      size="lg"
                    >
                      {plan.name === 'Free' ? 'Get Started' : `Choose ${plan.name}`}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Money back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 border border-glass-border max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold font-dm-sans mb-2">30-Day Money Back Guarantee</h3>
            <p className="text-muted-foreground">
              Try Habito risk-free. If you're not completely satisfied, we'll refund your money within 30 days.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};