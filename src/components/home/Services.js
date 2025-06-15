import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      title: "Web Development",
      icon: "🌐",
      description: "Crafting beautiful websites and robust websites for seamless experiences",
      features: ["Responsive Design", "CMS Integration", "SEO", "Performance Optimisation", "Cross-Browser Support"],
      color: "from-secondary to-secondary-dark"
    },
    {
      id: 3,
      title: "Frontend Development",
      icon: "💻",
      description: "Building responsive, performant web applications with modern tech",
      features: ["React / Next.js", "Vue / Nuxt.js", "Animation Libraries", "PWAs", "Accessibility"],
      color: "from-accent to-accent-dark"
    },
    {
      id: 4,
      title: "Design Engineering",
      icon: "🛠️",
      description: "Bridging the gap between design & engineering for production-ready UI",
      features: ["Design Systems", "Component Libraries", "Storybook", "Unit Testing", "Performance Tuning"],
      color: "from-purple-600 to-blue-600"
    },
    {
      id: 5,
      title: "Game Design",
      icon: "🎲",
      description: "Creating immersive game mechanics that captivate users",
      features: ["Level Design", "Game Balancing", "Narrative", "Prototyping", "Play-testing"],
      color: "from-green-500 to-emerald-700"
    },
    {
      id: 6,
      title: "No-Code Development",
      icon: "⚡",
      description: "Rapid MVPs & internal tools built with leading no-code platforms",
      features: ["Webflow", "Bubble", "Airtable", "Zapier", "Lovable"],
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 7,
      title: "Gamification",
      icon: "🎮",
      description: "Transforming mundane interactions into engaging experiences",
      features: ["Points & Rewards", "Progression Systems", "Badges", "Leaderboards", "Narrative Elements"],
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 8,
      title: "Visual Design",
      icon: "🖌️",
      description: "Delivering striking visuals that communicate brand values",
      features: ["Brand Guidelines", "Illustrations", "Iconography", "Motion Graphics", "Marketing Assets"],
      color: "from-indigo-500 to-violet-600"
    },
    {
      id: 9,
      title: "Interaction Design",
      icon: "🤝",
      description: "Designing micro-interactions that delight and guide users",
      features: ["Animation", "Feedback Loops", "Gesture Design", "Prototyping", "Usability Testing"],
      color: "from-teal-400 to-cyan-600"
    },
    {
      id: 10,
      title: "UX Engineering",
      icon: "🧩",
      description: "Implementing user-centric features with production-quality code",
      features: ["Component APIs", "A11y", "Performance", "Testing", "Tooling"],
      color: "from-sky-400 to-blue-600"
    },
  ];

    // ---- responsive slider setup ----
  const getItemsPerSlide = () => {
    if (typeof window === 'undefined') return 4;
    const w = window.innerWidth;
    if (w < 768) return 1; // mobile
    if (w < 1024) return 2; // tablet
    return 4; // desktop
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

  useEffect(() => {
    const onResize = () => {
      const newCount = getItemsPerSlide();
      setItemsPerSlide((prev) => (prev !== newCount ? newCount : prev));
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const slides = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < services.length; i += itemsPerSlide) {
      chunks.push(services.slice(i, i + itemsPerSlide));
    }
    return chunks;
  }, [itemsPerSlide, services]);

  const [currentSlide, setCurrentSlide] = useState(0);

  // ensure index is valid when slides change (e.g., on resize)
  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, slides.length - 1));
  }, [slides.length]);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 })
  };

  const ServiceCard = ({ service }) => (
    <motion.div
      className="bg-surface rounded-xl overflow-hidden group md:min-h-[460px] flex flex-col"
      whileHover={{ y: -10, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
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

      </div>
    </motion.div>
  );

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
            Our specialized services designed to transform your digital product into an engaging experience.
          </p>
        </motion.div>

        {/* Service Cards – 4-at-a-time slider */}
        <div className="relative">
          {/* Prev arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous"
            className="flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 items-center justify-center rounded-full bg-surface/80 hover:bg-surface text-primary backdrop-blur"
          >
            ‹
          </button>

          <div className="overflow-hidden relative min-h-[560px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                className="absolute inset-0 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              >
                {slides[currentSlide].map((s) => (
                  <ServiceCard key={s.id} service={s} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next"
            className="flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 items-center justify-center rounded-full bg-surface/80 hover:bg-surface text-primary backdrop-blur"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
