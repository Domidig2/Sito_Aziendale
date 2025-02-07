import React from 'react';
import { motion } from 'framer-motion';
import 'swiper/css';

import img1 from '@/assets/placeholders/Placeholder1.jpg';
import img2 from '@/assets/placeholders/Placeholder2.jpg';
import img3 from '@/assets/placeholders/Placeholder3.jpg';

const cards = [
  {
    name: 'Maria',
    description: 'DIGITALE',
    detail: "Cambia la tua vita in un click! Benvenuto nella Comunità Digitale, crea un sito web in sole 5 ore. Smart Working? Accedi al corso gratuito e vola ora a Dublino con Siri.",
    image: img1,
    label: 'Accedi al Mondo Digitale!',
    link: '/explore-digital',
  },
  {
    name: 'Domenico',
    description: 'CREATIVA',
    detail: "Condividi le tue energie nella Comunità Creativa: scopri i corsi gratuiti per Data Analyst anche nel settore Green Energy. Chiedi come gestire ogni rischio ad Alexa.",
    image: img2,
    label: 'Accedi al Mondo Creativo!',
    link: '/explore-creative',
  },
  {
    name: 'Alexa',
    description: 'INCLUSIVA',
    detail: "La tua storia nella Comunità Inclusiva: Professionista in Sole 24 Ore? Smart Box. Startup? Valuta il tuo Mindset e quello del tuo Team. Vivi esperienze Smart&Start.",
    image: img3,
    label: 'Accedi al Mondo Inclusivo!',
    link: '/explore-inclusiva',
  },
];

const CardSection = () => {
  return (
    <section id="card-section" className="flex flex-col gap-6 px-4 py-6">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          id={`card-${index + 1}`}
          className="card-container flex flex-col md:flex-row items-center gap-4 p-4 bg-gray-700 border border-gray-600 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {/* Immagine singola */}
          <motion.div
            className="w-36 h-36 rounded-lg overflow-hidden shadow-md"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            <img
              src={card.image}
              alt={`Immagine per ${card.name}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          {/* Testo della card */}
          <motion.div
            className="text-card text-center md:text-left flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-primary-orange mb-1">{card.name}</h3>
            <p className="text-sm text-gray-300 mb-1">{card.description}</p>
            <p className="text-xs text-gray-400 mb-3">{card.detail}</p>
            <motion.p
              className="text-xs text-gray-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {card.label}
            </motion.p>

            {/* Bottone -Scopri di più */}
            <motion.a
              href={card.link}
              className="mt-3 inline-block bg-primary-orange text-white font-bold py-1.5 px-4 rounded-lg shadow-lg hover:bg-orange-500 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Scopri di più
            </motion.a>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
};

export default CardSection;
