import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    company: '',
    service: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend/email service
    console.log('Form submitted:', formState);
    
    // Simulate form submission
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        message: '',
        company: '',
        service: ''
      });
    }, 1500);
  };

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
            <div className="p-8 md:p-12 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 md:w-2/5">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                  <p className="text-text-secondary mb-8">
                    Embark on your next digital adventure with AtlasMoth. Fill out the form to start your journey.
                  </p>

                  {/* Contact Information */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="rounded-full p-2 bg-primary/20 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">Email</h3>
                        <p className="text-text-secondary text-sm">hello@atlasmoth.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="rounded-full p-2 bg-secondary/20 text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">Phone</h3>
                        <p className="text-text-secondary text-sm">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="rounded-full p-2 bg-accent/20 text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">Location</h3>
                        <p className="text-text-secondary text-sm">San Francisco, CA</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-12">
                  <p className="text-sm font-semibold mb-3">Connect with us</p>
                  <div className="flex space-x-4">
                    {['Twitter', 'LinkedIn', 'Instagram'].map((social, index) => (
                      <motion.a
                        key={social}
                        href="#"
                        whileHover={{ y: -3, color: '#007bff' }}
                        className="text-text-secondary hover:text-primary transition-colors"
                      >
                        {social}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="p-8 md:p-12 md:w-3/5">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="mr-2">🔮</span> 
                Start Your Digital Quest
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-1">Company (Optional)</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder="ACME Inc."
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-text-secondary mb-1">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value="UX/UI Design">UX/UI Design</option>
                      <option value="Gamification">Gamification</option>
                      <option value="Frontend Development">Frontend Development</option>
                      <option value="Digital Strategy">Digital Strategy</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-white/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input id="newsletter" type="checkbox" className="h-4 w-4 accent-primary" />
                  <label htmlFor="newsletter" className="ml-2 block text-sm text-text-secondary">
                    Subscribe to our newsletter for exclusive cheat codes
                  </label>
                </div>

                <div className="pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full game-button transition duration-300 ${
                      formStatus === 'submitting' 
                        ? 'opacity-70 cursor-not-allowed' 
                        : ''
                    }`}
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        📨 Submit Quest Request
                      </span>
                    )}
                  </motion.button>

                  {/* Success Message */}
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 rounded-lg bg-green-900/20 border border-green-500/30"
                    >
                      <p className="text-green-500 text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Quest submission successful! We'll contact you soon.
                      </p>
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
