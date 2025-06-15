import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ClientsStrip = () => {
  // Sample client logos using placeholder images with links
  const clients = [
    { name: 'SyncVR', image: '/ClientStrip/syncvrmedical_logo.jpeg', url: 'https://www.syncvrmedical.com/' },
    { name: 'Coursera', image: '/ClientStrip/Coursera-Logo_600x600.svg.png', url: 'https://www.coursera.org/courseraplus?utm_medium=sem&utm_source=gg&utm_campaign=b2c_emea_x_coursera_ftcof_courseraplus_cx_dr_bau_gg_sem_bd-ex_s1_en_m_hyb_24-10_x&campaignid=21836581617&adgroupid=351685084750&device=c&keyword=coursera&matchtype=e&network=g&devicemodel=&creativeid=1449957450621&assetgroupid=&targetid=kwd-36262515261&extensionid=&placement=&gad_source=1&gad_campaignid=21836581617&gbraid=0AAAAADdKX6YvNFpqECjDHM7uW2XjbBQxh&gclid=Cj0KCQjwu7TCBhCYARIsAM_S3NjLdas2_usvuHDGue1b2fUSS_a4K0ZlQOGrbO-6cbyF-L7ZCBL77dsaAugrEALw_wcB' },
    { name: 'Heerema Marine Contractors', image: 'ClientStrip/heerema_logos-edited-spacing-for-website-HMC.png', url: 'https://www.heerema.com/' },
    { name: 'HanzeMag', image: '/ClientStrip/REGULAR-CHERRY.png', url: 'https://hanzemag.nl/' },
    { name: 'Hanze UAS', image: '/ClientStrip/images.png', url: 'https://www.hanze.nl/nl' },
    { name: 'Rotterdam UAS', image: '/ClientStrip/Rotterdam_University_Logo.gif', url: 'https://www.rotterdamuas.com/' },
    { name: 'ESN', image: '/ClientStrip/cropped-201902-esn-STAR-master-RGB.png', url: 'https://www.esn-groningen.nl/' },
    { name: 'Interactive Games Entertainment', image: '/ClientStrip/Screenshot 2025-06-14 at 23.52.04.png', url: 'https://interactivegamesentertainment.com/' },
    { name: 'Space4Good', image: '/ClientStrip/Screenshot 2025-06-14 at 23.44.01.png', url: 'https://www.space4good.com/' },
    { name: 'DataPebbles', image: '/ClientStrip/67654559.png', url: 'https://www.datapebbles.com/' },
    { name: 'Crystale', image: '/ClientStrip/crystale_logo.jpeg', url: 'https://crystale.io/' },
    { name: 'Pepemon', image: '/ClientStrip/pepemon.a35ffb52.png', url: 'https://pepemon.world/' },
    { name: 'Jotun Games', image: '/ClientStrip/designer-2-removebg-preview_1-removebg-preview.png', url: 'https://jotun-games.com/' },
    { name: 'RTDT', image: '/ClientStrip/Screenshot 2025-06-14 at 23.46.39.png', url: 'https://rtdt.ai/' },
    { name: 'Kogi AI', image: '/ClientStrip/Kogi-Logo-Transparent-Oct2023.jpg', url: 'https://kogi.ai/' },
    { name: 'Vanilla Checks', image: '/ClientStrip/1701878084420.jpeg', url: 'https://www.linkedin.com/company/vanilla-checks04' },
    { name: 'New Life Legion NFT', image: '/ClientStrip/download.png', url: 'https://www.newlifelegion.io/' },
    { name: 'Nexlabs', image: '/ClientStrip/logo.webp', url: 'https://www.nexlabs.io/' },
    { name: 'Troop Labs', image: '/ClientStrip/4d9290264ed52130095638c2a7200a2b.webp', url: 'https://www.cypherhunter.com/en/p/troop-labs/' },
    { name: 'Odyssey', image: '/ClientStrip/odysseycreator_logo.jpeg', url: 'https://www.linkedin.com/company/odysseycreator/' },
    { name: 'CropiFi', image: '/ClientStrip/Screenshot 2024-03-13 at 15.36 1.png', url: 'https://www.cropifi.com/' },
    { name: 'WeCicada', image: '/ClientStrip/logo (1).png', url: 'https://wecicada.com/' },
  ];

  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [marqueeDistance, setMarqueeDistance] = useState(null);

  useEffect(() => {
    function updateDistance() {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = contentRef.current.scrollWidth;
        // Only scroll if content is wider than container
        setMarqueeDistance(contentWidth > containerWidth ? contentWidth - containerWidth : 0);
      }
    }
    updateDistance();
    window.addEventListener('resize', updateDistance);
    return () => window.removeEventListener('resize', updateDistance);
  }, []);

  return (
    <section className="bg-surface py-8 overflow-hidden">

      {/* Auto-scrolling marquee effect */}
      <div className="relative overflow-x-hidden">
        <div ref={containerRef} className="w-full overflow-x-hidden">
          <motion.div
            ref={contentRef}
            className="flex space-x-16 whitespace-nowrap"
            animate={marqueeDistance !== null ? { x: [0, -marqueeDistance] } : false}
            transition={marqueeDistance !== null ? {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear"
              },
            } : {}}
          >
            {clients.map((client, index) => (
              <div 
                key={`${client.name}-${index}`} 
                className="flex flex-col items-center justify-center min-w-[120px]"
              >
                <a 
                  href={client.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center hover:scale-105 transition-all"
                  aria-label={`Visit ${client.name}'s website`}
                >
                  <img 
                    src={client.image} 
                    alt={`${client.name} logo`} 
                    className="h-12 object-contain mb-2 opacity-70 group-hover:opacity-100 transition-opacity" 
                  />
                  <p className="text-text-secondary text-xs font-medium group-hover:text-primary transition-colors">{client.name}</p>
                </a>
              </div>
            ))}
          </motion.div>
        </div>
        {/* Gradient overlays to fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-surface to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-surface to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default ClientsStrip;
