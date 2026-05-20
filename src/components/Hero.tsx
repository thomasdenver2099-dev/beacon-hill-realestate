'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-beacon-blue to-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Discover amazing properties in Beacon Hill and surrounding areas
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-beacon-blue font-bold rounded-lg hover:bg-gray-100 transition"
          >
            Explore Properties
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
