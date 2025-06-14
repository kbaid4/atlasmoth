import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "AtlasMoth transformed our outdated website into an engaging platform that's increased user retention by 70%. Their gamification approach made all the difference!",
      author: "Sarah Johnson",
      role: "CMO, TechVision",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      id: 2,
      quote: "The team at AtlasMoth understood exactly what we needed. They delivered a playful yet professional design that perfectly represents our brand.",
      author: "Michael Chen",
      role: "Founder, Innovate Learning",
      avatar: "👨‍💻",
      rating: 5
    },
    {
      id: 3,
      quote: "Working with AtlasMoth was a game-changer for our app. User engagement is up 85% and our conversion rate has doubled since launch.",
      author: "Alex Rodriguez",
      role: "Product Manager, AppStarters",
      avatar: "🧑‍🚀",
      rating: 4.5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
        {hasHalfStar && <span className="text-yellow-400">½</span>}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <span key={i + fullStars + (hasHalfStar ? 1 : 0)} className="text-gray-400">★</span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/3 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>
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
            className="inline-block mb-3 bg-accent/20 text-accent px-4 py-1 rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="font-display text-xs">ACHIEVEMENT UNLOCKED</span>
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">Fellow Adventurers</h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Hear what our clients have to say about their journey with AtlasMoth.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="bg-surface/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl mb-6">
                    {testimonials[currentIndex].avatar}
                  </div>
                  
                  {/* Quote */}
                  <div className="mb-6">
                    <span className="text-4xl text-primary">"</span>
                    <p className="text-lg text-text-primary italic">
                      {testimonials[currentIndex].quote}
                    </p>
                    <span className="text-4xl text-primary float-right">"</span>
                  </div>
                  
                  {/* Author Info */}
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].author}</h4>
                  <p className="text-text-secondary text-sm mb-3">{testimonials[currentIndex].role}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 text-lg">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  
                  {/* Gamified Badge */}
                  <div className="mt-6 bg-background/50 px-4 py-1 rounded-full">
                    <span className="text-xs font-display text-primary">+{Math.floor(testimonials[currentIndex].rating * 200)} XP</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-surface border border-white/10 text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index 
                      ? 'bg-primary' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-surface border border-white/10 text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
