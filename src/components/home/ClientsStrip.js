import React from 'react';
import { motion } from 'framer-motion';

const ClientsStrip = () => {
  // Sample client logos - in production these would be imported from your assets
  const clients = [
    { name: 'Client 1', logo: '🏢' },
    { name: 'Client 2', logo: '🏦' },
    { name: 'Client 3', logo: '🏨' },
    { name: 'Client 4', logo: '🏪' },
    { name: 'Client 5', logo: '🏫' },
    { name: 'Client 6', logo: '🏥' },
    { name: 'Client 7', logo: '🏤' },
    { name: 'Client 8', logo: '🏭' },
    // Duplicate clients for seamless looping
    { name: 'Client 1', logo: '🏢' },
    { name: 'Client 2', logo: '🏦' },
    { name: 'Client 3', logo: '🏨' },
    { name: 'Client 4', logo: '🏪' },
  ];

  return (
    <section className="bg-surface py-8 overflow-hidden">
      <div className="container mx-auto px-6 mb-4">
        <motion.h3 
          className="text-center text-text-secondary text-sm uppercase tracking-wider mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by forward-thinking companies
        </motion.h3>
      </div>

      {/* Auto-scrolling marquee effect */}
      <div className="relative">
        <motion.div
          className="flex space-x-16 whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            },
          }}
        >
          {clients.map((client, index) => (
            <div 
              key={`${client.name}-${index}`} 
              className="flex flex-col items-center justify-center min-w-[120px]"
            >
              <div className="text-4xl mb-2">{client.logo}</div>
              <p className="text-text-secondary text-xs font-medium">{client.name}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient overlays to fade edges */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-surface to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-surface to-transparent z-10"></div>
    </section>
  );
};

export default ClientsStrip;
