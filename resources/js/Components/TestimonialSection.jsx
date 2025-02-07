import React, { useState } from 'react';
import { motion } from 'framer-motion';
import lampIcon from '@/assets/lampadina.png';
import beakerIcon from '@/assets/provetta.png';
// Versione non definitiva per immagine hoverata
const TestimonialSection = ({ imageSrcDefault, imageSrcHover, testimonialText, name, role, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const clipPathTransition = {
    hidden: { clipPath: 'circle(0% at 50% 50%)' },
    visible: { clipPath: 'circle(150% at 50% 50%)' },
  };

  return (
    <section className="flex flex-col md:flex-row items-center py-16 bg-white text-black px-4 md:px-20">
      {/* Immagine a sinistra */}
      <div
        className="w-full md:w-2/5 relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out mb-8 md:mb-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Prima immagine con l'icona della provetta in sovrapposizione */}
        <motion.img
          src={imageSrcDefault}
          alt={name}
          className="object-cover w-full h-auto max-h-[400px] rounded-lg transform transition duration-700 ease-in-out"
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 1 }}
        />
        {/* Icona della provetta in sovrapposizione alla prima immagine */}
        <div className="absolute top-4 left-4">
          <img src={beakerIcon} alt="Provetta" className="w-8 h-8 opacity-80" />
        </div>

        {/* Seconda immagine con icona della lampadina */}
        {isHovered && (
          <>
            <motion.img
              src={imageSrcHover}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              initial="hidden"
              animate="visible"
              variants={clipPathTransition}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
            {/* Icona della lampadina in sovrapposizione alla seconda immagine */}
            <div className="absolute bottom-4 right-4">
              <motion.img
                src={lampIcon}
                alt="Lampadina"
                className="w-8 h-8 opacity-80"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </>
        )}
      </div>

      {/* Testimonianza a destra */}
      <div className="w-full md:w-3/5 px-8 md:px-12">
        <blockquote className="text-2xl italic leading-relaxed mb-4 font-light text-center md:text-left">
          {testimonialText}
        </blockquote>
        <p className="text-2xl font-bold text-primary-orange text-center md:text-left mb-2">
          {name}
        </p>
        <p className="text-lg text-black text-center md:text-left mb-4">
          {role}
        </p>
        {isHovered && (
          <motion.p
            className="text-base text-black mt-4 text-center md:text-left"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
