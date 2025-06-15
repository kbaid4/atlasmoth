import React from 'react';
import { motion } from 'framer-motion';

const HowWeWork = () => {
  const steps = [
    {
      id: 1,
      title: "Project Initiation",
      icon: "🚀",
      description: "We'll meet to understand your goals, target audience, and project requirements.",
      level: "Level 1",
      xp: "500 XP"
    },
    {
      id: 2,
      title: "Scope, Plan, Achieve",
      icon: "📝",
      description: "We'll define the project scope, timeline, and deliverables to ensure clear expectations.",
      level: "Level 2",
      xp: "1000 XP"
    },
    {
      id: 3,
      title: "Ideation & Concept Design",
      icon: "💡",
      description: "Our team creates wireframes and interactive prototypes based on your needs.",
      level: "Level 3",
      xp: "1500 XP"
    },
    {
      id: 4,
      title: "Development",
      icon: "⚙️",
      description: "We bring designs to life with clean code and cutting-edge technology.",
      level: "Level 4",
      xp: "2000 XP"
    },
    {
      id: 5,
      title: "Iteration & Delivery",
      icon: "✅",
      description: "After testing and refining, we'll launch your project and provide ongoing support.",
      level: "Level 5",
      xp: "3000 XP"
    }
  ];

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Floating Elements */}
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -50, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "reverse", 
            duration: 10,
          }}
          style={{ top: '30%', left: '5%' }}
        />
        <motion.div 
          className="absolute w-80 h-80 rounded-full bg-secondary/5 blur-3xl"
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 30, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "reverse", 
            duration: 15,
            delay: 2
          }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block mb-3 bg-secondary/20 text-secondary px-4 py-1 rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="font-display text-xs">QUEST LINE</span>
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Embark on a journey with AtlasMoth as we transform your ideas into engaging digital experiences. Follow our quest line to success!
          </p>
        </motion.div>

        {/* RPG-style Step Process */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2 hidden md:block"></div>

          {/* Steps */}
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                {/* Step Number with Icon */}
                <motion.div 
                  className="relative z-10 w-20 h-20 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white text-2xl font-bold border-4 border-background shadow-xl"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(0, 123, 255, 0.8)" 
                  }}
                >
                  {step.icon}
                </motion.div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-2.5rem)] bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-white/10`}>
                  <div className="mb-3"><h3 className="text-xl font-bold">{step.title}</h3></div>
                  <p className="text-text-secondary">{step.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(index + 1) * 20}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-text-secondary">
                      <span>Phase {index + 1}/5</span>
                      <span>{(index + 1) * 20}% Complete</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
