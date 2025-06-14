import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Pixel floating squares */}
        <motion.div
          className="absolute w-12 h-12 bg-primary/60 border-4 border-white pixel-border shadow-xl"
          style={{ top: '12%', left: '8%' }}
          animate={{
            y: [0, -30, 0],
            x: [0, 12, 0],
            rotate: [0, 15, -10, 0]
          }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 9 }}
        />
        {/* Diamond shape */}
        <motion.div
          className="absolute w-16 h-16 bg-secondary/40 border-2 border-secondary-light rotate-45 shadow-2xl"
          style={{ top: '20%', right: '14%' }}
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 8, delay: 1 }}
        />
        {/* Glowing orb with pixel border */}
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-accent/30 border-4 border-accent-light pixel-border shadow-accent/40"
          style={{ bottom: '8%', left: '18%' }}
          animate={{
            y: [0, -20, 0],
            x: [0, 25, 0],
            scale: [1, 1.14, 1]
          }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 10, delay: 2 }}
        />
        {/* Sparkle/star */}
        <motion.div
          className="absolute text-2xl text-primary drop-shadow-lg"
          style={{ top: '32%', left: '35%' }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 30, 0]
          }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 4, delay: 2.2 }}
        >
          ✨
        </motion.div>
        {/* Pixel mini-square */}
        <motion.div
          className="absolute w-6 h-6 bg-secondary-light/70 border-2 border-white pixel-border"
          style={{ bottom: '18%', right: '11%' }}
          animate={{
            y: [0, -10, 0],
            x: [0, 10, 0],
            rotate: [0, 20, 0]
          }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 7, delay: 1.7 }}
        />
        {/* Another sparkle */}
        <motion.div
          className="absolute text-xl text-accent drop-shadow"
          style={{ bottom: '28%', right: '27%' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -20, 0]
          }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 5, delay: 3 }}
        >
          ✨
        </motion.div>
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
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[460px] xl:h-[520px] flex items-center justify-center">
            {/* Responsive pixel/gamified hero image */}
            <div className="flex items-center justify-center w-full h-full">
              <div className="pixel-border bg-surface/30 backdrop-blur-md rounded-lg relative overflow-hidden flex items-center justify-center
                w-32 h-32 p-1
                sm:w-48 sm:h-48 sm:p-2
                md:w-64 md:h-64 md:p-3
                lg:w-80 lg:h-80 lg:p-4
                xl:w-96 xl:h-96 xl:p-6">
                <motion.div
                  className="bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center
                    w-20 h-20
                    sm:w-32 sm:h-32
                    md:w-44 md:h-44
                    lg:w-56 lg:h-56
                    xl:w-72 xl:h-72"
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
                  {/* Moth logo or animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">🦋</span>
                  </div>
                </motion.div>
                {/* Studio label, responsive */}
                <div className="absolute bottom-1.5 right-1.5 bg-background/40 backdrop-blur px-1 py-0.5 rounded text-[9px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-display">
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
