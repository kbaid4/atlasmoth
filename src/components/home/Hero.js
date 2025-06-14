import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Floating Elements */}
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-primary-light/10 blur-3xl"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "reverse", 
            duration: 8,
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-secondary-light/10 blur-3xl"
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "reverse", 
            duration: 10,
            delay: 1
          }}
          style={{ bottom: '5%', right: '15%' }}
        />
        <motion.div 
          className="absolute w-40 h-40 rounded-full bg-accent-light/20 blur-2xl"
          animate={{ 
            x: [0, 60, 0], 
            y: [0, 30, 0],
            scale: [1, 1.4, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "reverse", 
            duration: 7,
            delay: 2
          }}
          style={{ top: '30%', right: '25%' }}
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 z-10 flex flex-col-reverse lg:flex-row items-center">
        <motion.div 
          className="lg:w-1/2 flex flex-col items-start space-y-8 pt-10 lg:pt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block text-white">Elevating user experience with</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">the magic of Gamification</span>
          </h1>

          <h2 className="font-display text-xl md:text-2xl text-text-secondary">
            Duolingo for Design
          </h2>

          <p className="text-text-secondary text-lg max-w-lg">
            We transform ordinary digital experiences into engaging adventures that keep users coming back for more. Let's level up your digital presence together.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button 
              className="game-button flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📞 Book Your Quest
            </motion.button>

            <motion.button
              className="px-6 py-3 border-2 border-primary/50 text-primary rounded-lg font-display text-sm uppercase tracking-wider hover:bg-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🎮 View Our Work
            </motion.button>
          </div>

          {/* Gaming-style badges */}
          <div className="flex items-center gap-3 bg-surface/50 backdrop-blur-sm px-4 py-2 rounded-xl">
            <div className="h-10 w-10 rounded-full bg-primary-dark flex items-center justify-center">
              <span className="text-white font-bold">99%</span>
            </div>
            <div>
              <p className="text-text-primary text-xs">User Satisfaction</p>
              <div className="w-36 h-2 bg-gray-700 rounded-full mt-1">
                <div className="w-[99%] h-full bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Image/Animation */}
        <motion.div 
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-80 sm:h-96 lg:h-[500px]">
            {/* Replace this with your actual hero image or animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="pixel-border p-4 bg-surface/30 backdrop-blur-md rounded-lg relative overflow-hidden">
                <motion.div 
                  className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl"
                  animate={{
                    rotate: [0, 90, 180, 270, 360],
                    borderRadius: ["10%", "25%", "50%", "25%", "10%"],
                  }}
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  {/* This is a placeholder for a moth animation or logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">🦋</span>
                  </div>
                </motion.div>
                
                <div className="absolute bottom-2 right-2 bg-background/30 backdrop-blur px-2 py-1 rounded text-xs">
                  AtlasMoth Studios
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="text-text-secondary text-sm font-medium mb-2">Scroll to explore</div>
        <motion.div 
          className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center items-start p-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5,
          }}
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
