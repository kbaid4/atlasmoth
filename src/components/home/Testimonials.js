import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "AtlasMoth is a pleasure to work with. They take feedback well and deliver results promptly. I highly recommend them.",
      author: "Espen Sogn",
      role: "Studio Head at Jotun Games",
      image: "/Testimony/1696928938478.jpeg",
    },
    {
      id: 2,
      quote: "AtlasMoth improved Space4Good’s UI/UX by refining design guidelines and enhancing user experience through workshops, fieldwork, and research.",
      author: "Mathieu Aillerie",
      role: "Product Manager at Space4Good",
      image: "/Testimony/1712907533175.jpeg",
    },
    {
      id: 3,
      quote: "Great working with AtlasMoth. They quickly understand the user needs even if the topic content is new.",
      author: "Waas Thissen",
      role: "Researcher at Louis Bolk Institute",
      image: "/Testimony/1739807290363.jpeg",
    },
    {
      id: 4,
      quote: "AtlasMoth's strong mindset and design skills accelerated development and made them a pleasure to work with.",
      author: "Joeri van Nieuwkoop",
      role: "Frontend Developer at Heerema(Betabit)",
      image: "/Testimony/1580850126626.jpeg",
    },
    {
      id: 5,
      quote: "AtlasMoth is a highly recommended, communicative, and versatile UI/UX agency great for all-around product design.",
      author: "Ramadhan",
      role: "GeoAI Engineer at Space4Good",
      image: "/Testimony/1732226687680.jpeg",
    },
    {
      id: 6,
      quote: "AtlasMoth brought invaluable design expertise and proactively enhanced our MVP with a strong focus on user experience.",
      author: "Neville Starke",
      role: "Co-founder at Crystale",
      image: "/Testimony/1712331163041.jpeg",
    },
    {
      id: 7,
      quote: "AtlasMoth consistently delivered creative, engaging content on time, demonstrating strong talent and a reliable work ethic.",
      author: "Chris Wind",
      role: "Head Editor at HanzeMag",
      image: "/Testimony/1516587918076.jpeg",
    },
    {
      id: 8,
      quote: "AtlasMoth was a pleasure to work with—open to feedback, receptive to constructive criticism, and easy to connect with personally.",
      author: "Max Bramlage",
      role: "Senior Recruiter at Worldwiders Global Recruitment",
      image: "/Testimony/1706042787895.jpeg",
    },
    {
      id: 9,
      quote: "AtlasMoth delivers exceptional, user-centered design with remarkable creativity, precision, and impact.",
      author: "Abhishek Giri",
      role: "Senior Software Engineer at DataPebbles",
      image: "/Testimony/1642168249394.jpeg",
    },
    {
      id: 10,
      quote: "AtlasMoth is a talented, collaborative design team that thrives on feedback and consistently pushes creative boundaries.",
      author: "Vitalii Lukyanov",
      role: "Software Engineer at XPAR Vision B.V.",
      image: "/Testimony/1563028697560.jpeg",
    },
    {
      id: 11,
      quote: "We collaborated on various projects, and AtlasMoth team's creativity and adaptability in design always shone through.",
      author: "Joël Zweerink",
      role: "Project Manager for Crypto Projects",
      image: "/Testimony/1745607025538.jpeg",
    },
    {
      id: 12,
      quote: "Working with AtlasMoth for over 3 years has been truly inspiring—their balanced approach to life and diverse, purpose-driven team continually motivates me to grow.",
      author: "Jordan Walsh",
      role: "Game Marketing Lead at LuckyKat",
      image: "/Testimony/Screenshot 2025-06-15 at 01.59.07.png",
    },
    {
      id: 13,
      quote: "The AtlasMoth team is a disciplined, thoughtful, and proactive group with a genuine drive to support others and a strong “can-do” spirit.",
      author: "Robin Bos",
      role: "Co-founder at K.B. Consultancy",
      image: "/Testimony/1749629216344.jpeg",
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
          <div className="overflow-hidden relative min-h-96 md:min-h-[460px]">
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
                className="absolute inset-0 bg-surface/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Image if present */}
                  {testimonials[currentIndex].image && (
                    <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} className="w-20 h-20 rounded-full object-cover mb-6" />
                  )}
                  {/* Avatar if no image */}
                  {!testimonials[currentIndex].image && (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl mb-6">
                      {testimonials[currentIndex].avatar}
                    </div>
                  )}
                  
                  {/* Quote */}
                  <div className="mb-6">
                    <span className="text-4xl text-primary">"</span>
                    <p className="text-xs md:text-lg text-text-primary italic max-h-48 overflow-y-auto pr-2">
                      {testimonials[currentIndex].quote}
                    </p>
                    <span className="text-4xl text-primary float-right">"</span>
                  </div>
                  
                  {/* Author Info */}
                  <h4 className="font-bold text-lg mt-2">{testimonials[currentIndex].author}</h4>
                  <p className="text-text-secondary text-sm mb-3 mt-1">{testimonials[currentIndex].role}</p>
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
