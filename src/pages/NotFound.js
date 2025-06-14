import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-background pt-24">
        <section className="flex-grow flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-7xl mb-6">🦋</div>
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-text-secondary mb-8">
              Oops! The page you are looking for does not exist.<br />
              Maybe you took a wrong quest path!
            </p>
            <Link to="/" className="game-button">Return Home</Link>
          </motion.div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default NotFound;
