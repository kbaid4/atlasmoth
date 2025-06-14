import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Service cards data
  const services = [
    {
      id: 1,
      title: "UX/UI Design",
      icon: "🎨",
      description: "Creating intuitive and visually stunning interfaces that delight users",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"],
      color: "from-primary to-primary-dark"
    },
    {
      id: 2,
      title: "Gamification",
      icon: "🎮",
      description: "Transforming mundane interactions into engaging experiences",
      features: ["Points & Rewards", "Progression Systems", "Badges & Achievements", "Leaderboards", "Narrative Elements"],
      color: "from-secondary to-secondary-dark"
    },
    {
      id: 3,
      title: "Frontend Development",
      icon: "💻",
      description: "Building responsive, performant web applications with modern tech",
      features: ["React / Next.js", "Vue / Nuxt.js", "Animation Libraries", "Progressive Web Apps", "Accessibility"],
      color: "from-accent to-accent-dark"
    },
    {
      id: 4,
      title: "Digital Strategy",
      icon: "🧠",
      description: "Aligning your digital presence with business objectives",
      features: ["Competitive Analysis", "User Journey Mapping", "Content Strategy", "SEO Optimization", "Analytics Setup"],
      color: "from-purple-600 to-blue-600"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array(12).fill(0).map((_, i) => (
            <div key={i} className="border-r border-white/10 h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-12 w-full absolute top-0 left-0">
          {Array(12).fill(0).map((_, i) => (
            <div key={i} className="border-b border-white/10 w-full"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block mb-3 bg-primary/20 text-primary px-4 py-1 rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="font-display text-xs">LEVEL UP YOUR BUSINESS</span>
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">Our Digital Power-Ups</h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Choose your adventure with our specialized services designed to transform your digital product into an engaging experience.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={item}
              className="bg-surface rounded-xl overflow-hidden group"
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-background to-surface flex items-center justify-center text-2xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-text-secondary text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-xs text-text-secondary">
                      <span className="mr-2 text-green-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full py-2 rounded-lg text-center text-sm font-medium border border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Select Quest
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* "View All Services" button */}
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="game-button flex items-center gap-2"
          >
            <span>View Full Skill Tree</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services;
