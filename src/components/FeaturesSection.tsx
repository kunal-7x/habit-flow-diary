import { motion } from 'framer-motion';
import { Target, Calendar, TrendingUp, Bell, Award, Users, Zap, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Target,
    title: "Smart Goal Tracking",
    description: "Set personalized goals with AI-powered recommendations and track your progress with beautiful visualizations.",
    color: "primary"
  },
  {
    icon: Calendar,
    title: "Habit Scheduling",
    description: "Create flexible habit schedules that adapt to your lifestyle. Daily, weekly, or custom patterns.",
    color: "secondary"
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description: "Detailed insights and statistics to understand your patterns and optimize your habit formation.",
    color: "accent"
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Intelligent notifications that learn your behavior and remind you at the perfect moments.",
    color: "primary"
  },
  {
    icon: Award,
    title: "Achievement System",
    description: "Earn badges and celebrate milestones as you build momentum and maintain your streaks.",
    color: "secondary"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with like-minded individuals, share progress, and find accountability partners.",
    color: "accent"
  },
  {
    icon: Zap,
    title: "Quick Actions",
    description: "One-tap habit completion with widgets and shortcuts for seamless daily tracking.",
    color: "primary"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays private and secure. Local storage with optional cloud sync for your peace of mind.",
    color: "secondary"
  }
];

export const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
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
            Powerful Features for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Lasting Change</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build, track, and maintain habits that transform your life.
            Designed with psychology and behavioral science at its core.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const gradientClass = `bg-gradient-${feature.color}`;
            const glowClass = feature.color === 'primary' ? 'hover:shadow-glow' : 
                             feature.color === 'secondary' ? 'hover:shadow-[0_0_40px_hsl(var(--secondary-glow))]' :
                             'hover:shadow-[0_0_40px_hsl(var(--accent-glow))]';

            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className={`glass border-glass-border p-6 h-full transition-all duration-500 hover-scale ${glowClass}`}>
                  <div className={`w-12 h-12 ${gradientClass} rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-all duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold font-dm-sans mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <div className="glass rounded-2xl p-8 border border-glass-border glow-elegant">
              <h3 className="text-2xl font-bold font-dm-sans mb-4">
                Ready to transform your habits?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of users who have already built lasting habits with Habito.
              </p>
              <button className="bg-gradient-primary px-8 py-4 rounded-xl text-white font-semibold hover-scale glow-primary transition-all duration-300">
                Start Building Today
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};