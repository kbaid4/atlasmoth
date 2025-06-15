import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-surface relative overflow-hidden">
      {/* Animated moth in the background */}
      <div className="absolute right-10 bottom-10 opacity-20 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="text-9xl"
        >
          🦋
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto bg-background rounded-2xl overflow-hidden shadow-xl border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:flex">
            {/* Left Side - Contact Info */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 w-full">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                  

                  {/* Contact Information */}
                  <div className="space-y-6 flex flex-col items-center">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="rounded-full p-2 bg-primary/20 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <h3 className="text-sm font-semibold">Email</h3>
                        <a href="mailto:kbaid@atlasmoth.com" className="text-text-secondary text-sm hover:underline">kbaid@atlasmoth.com</a>
                      </div>
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                      <div className="rounded-full p-2 bg-accent/20 text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <h3 className="text-sm font-semibold">Location</h3>
                        <p className="text-text-secondary text-sm">Amsterdam, Netherlands</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
