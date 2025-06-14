import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

// Home page components
import Hero from '../components/home/Hero';
import ClientsStrip from '../components/home/ClientsStrip';
import Services from '../components/home/Services';
import HowWeWork from '../components/home/HowWeWork';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    // Scroll to hash if present in URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to top when component mounts
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full">
        <Hero />
        <ClientsStrip />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="services"
        >
          <Services />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="how-we-work"
        >
          <HowWeWork />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Testimonials />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="contact"
        >
          <Contact />
        </motion.div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
