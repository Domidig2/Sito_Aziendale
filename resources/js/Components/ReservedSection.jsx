import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBusinessTime, FaSchool, FaHome, FaHandsHelping } from 'react-icons/fa';
import { Link } from '@inertiajs/react';
// Sezione che riporta alla pagina 6 , chiede un contributo
const ReservedSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.2 },
    animateOther: { scale: 0.9 },
  };

  const titleVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: 'easeInOut'
      }
    },
  };

  return (
    <section className="py-20 px-10 bg-[#0d0d0d] text-white text-center" id="reserved-section">
      <div className="container mx-auto">
        <motion.h3
          className="text-[3rem] text-white mb-12 uppercase tracking-[3px] font-poppins"
          variants={titleVariants}
          initial="pulse"
          animate="pulse"
        >
          Famiglia, Scuola o Impresa? Sostieni la libertà con la tua generosità.
        </motion.h3>
        <p className="text-gray-400 mb-10">
        Qui nel quartiere Libertà, a due passi dalla fermata Brigata Bari, siamo una brigata affiatata: scegli la tua missione e unisciti a noi!
        </p>

        <div className="flex flex-col md:flex-row md:justify-evenly items-center space-y-8 md:space-y-0">
          {/* Card Impresa */}
          <Link href={route('work.page')}>
            <motion.div
              className="mb-5 md:mb-0 w-full max-w-sm"
              onHoverStart={() => setHoveredCard('impresa')}
              onHoverEnd={() => setHoveredCard(null)}
              animate={hoveredCard === 'impresa' ? 'hover' : hoveredCard ? 'animateOther' : 'rest'}
              variants={cardVariants}
              initial="rest"
              transition={{ duration: 0.4 }}
            >
              <div
                className="flex flex-col justify-center items-center p-[40px] bg-[#1a1a1a] rounded-[20px] transition-all duration-300 ease-in-out text-white w-full shadow-lg hover:-translate-y-2 hover:shadow-xl hover:bg-[#333] no-underline focus:outline-none"
              >
                <FaBusinessTime className="text-[#f7a200] text-[3rem] mb-[20px] transition-transform duration-300 ease-in-out hover:scale-110" />
                <p className="text-[1.2rem] text-white my-[5px] transition-colors duration-300 ease-in-out hover:text-[#f7a200]">
                  Impresa
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  La tua deduzione fino a 5.000€.
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Card Scuola */}
          <Link href={route('work.page')}>
            <motion.div
              className="mb-5 md:mb-0 w-full max-w-sm"
              onHoverStart={() => setHoveredCard('scuola')}
              onHoverEnd={() => setHoveredCard(null)}
              animate={hoveredCard === 'scuola' ? 'hover' : hoveredCard ? 'animateOther' : 'rest'}
              variants={cardVariants}
              initial="rest"
              transition={{ duration: 0.4 }}
            >
              <div
                className="flex flex-col justify-center items-center p-[40px] bg-[#1a1a1a] rounded-[20px] transition-all duration-300 ease-in-out text-primary-orange w-full shadow-lg hover:-translate-y-2 hover:shadow-xl hover:bg-[#333] no-underline focus:outline-none"
              >
                <FaSchool className="text-[#f7a200] text-[3rem] mb-[20px] transition-transform duration-300 ease-in-out hover:scale-110" />
                <p className="text-[1.2rem] text-white my-[5px] transition-colors duration-300 ease-in-out hover:text-[#f7a200]">
                  Scuola
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  La tua associazione a soli 500€.
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Card Famiglia */}
          <Link href={route('work.page')}>
            <motion.div
              className="mb-5 md:mb-0 w-full max-w-sm"
              onHoverStart={() => setHoveredCard('famiglia')}
              onHoverEnd={() => setHoveredCard(null)}
              animate={hoveredCard === 'famiglia' ? 'hover' : hoveredCard ? 'animateOther' : 'rest'}
              variants={cardVariants}
              initial="rest"
              transition={{ duration: 0.4 }}
            >
              <div
                className="flex flex-col justify-center items-center p-[40px] bg-[#1a1a1a] rounded-[20px] transition-all duration-300 ease-in-out text-primary-orange w-full shadow-lg hover:-translate-y-2 hover:shadow-xl hover:bg-[#333] no-underline"
              >
                <FaHome className="text-[#f7a200] text-[3rem] mb-[20px] transition-transform duration-300 ease-in-out hover:scale-110" />
                <p className="text-[1.2rem] text-white my-[5px] transition-colors duration-300 ease-in-out hover:text-[#f7a200]">
                  Famiglia
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  La tua innovazione a soli 50€.
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Card Tutti (5x1000) */}
          <Link href={route('work.page')}>
            <motion.div
              className="mb-5 md:mb-0 w-full max-w-sm"
              onHoverStart={() => setHoveredCard('tutti')}
              onHoverEnd={() => setHoveredCard(null)}
              animate={hoveredCard === 'tutti' ? 'hover' : hoveredCard ? 'animateOther' : 'rest'}
              variants={cardVariants}
              initial="rest"
              transition={{ duration: 0.4 }}
            >
              <div
                className="flex flex-col justify-center items-center p-[40px] bg-[#1a1a1a] rounded-[20px] transition-all duration-300 ease-in-out text-primary-orange w-full shadow-lg hover:-translate-y-2 hover:shadow-xl hover:bg-[#333] no-underline"
              >
                <FaHandsHelping className="text-[#f7a200] text-[3rem] mb-[20px] transition-transform duration-300 ease-in-out hover:scale-110" />
                <p className="text-[1.2rem] text-white my-[5px] transition-colors duration-300 ease-in-out hover:text-[#f7a200]">
                  Tutti
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  La tua buona azione con il 5x1000.
                </p>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReservedSection;
