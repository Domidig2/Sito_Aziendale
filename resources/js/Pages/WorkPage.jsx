import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBusinessTime, FaSchool, FaHome, FaHandsHelping } from 'react-icons/fa';
import BaseLayout from '@/Layouts/BaseLayout';
import ContactForm from '@/Components/ContactForm';
import axios from 'axios';

// Import delle immagini e logo
import LogoMondoLavoro from '@/assets/images/logos/Logo argent-n bookmarks.jpg';

const pageData = {
  title: "Esplora il Mondo del Lavoro",
  subtitle: "Scopri tutte le opportunità per il tuo futuro professionale!",
  formTitle: "Modulo di Contatto",
  formFields: [
    { name: 'FirstName', label: 'Nome', type: 'text', placeholder: 'Inserisci il tuo nome' },
    { name: 'SurName', label: 'Cognome', type: 'text', placeholder: 'Inserisci il tuo cognome' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Inserisci la tua email' },
    { name: 'phoneNumber', label: 'Telefono', type: 'tel', placeholder: 'Inserisci il tuo numero di telefono' },
    { name: 'message', label: 'Messaggio', type: 'textarea', placeholder: 'Scrivi il tuo messaggio', rows: 5 }
  ]
};

const WorkPage = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Media/example.pdf';
    link.download = 'example.pdf';
    link.click();
  };

  const handleCheckout = async (routeName) => {
    try {
      const response = await axios.post(route(routeName));
      if (response.data?.url) {
        window.location.href = response.data.url;
      } else {
        console.error('Errore: URL non ricevuta.');
      }
    } catch (error) {
      console.error('Errore durante il checkout:', error);
      alert('Errore durante il checkout. Per favore riprova.');
    }
  };

  const cardVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.2 },
    animateOther: { scale: 0.9 },
  };

  return (
    <BaseLayout>
      {/* Sezione di apertura */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-black text-white text-center">
        <motion.h1
          className="text-3xl font-bold mb-4 text-primary-orange"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {pageData.title}
        </motion.h1>
        <motion.p
          className="italic mb-6 text-gray-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {pageData.subtitle}
        </motion.p>
        <div className="mt-6">
          <img src={LogoMondoLavoro} alt="Logo Mondo Lavoro" className="w-48 mx-auto rounded-lg shadow-md" />
        </div>
      </section>

      {/* Cards animate */}
      <section className="bg-black py-12 text-white text-center">
  <div className="flex flex-col md:flex-row md:justify-evenly items-center space-y-6 md:space-y-0 md:space-x-6">
    {[
      {
        icon: <FaHome className="text-[#f7a200] text-[2.5rem] mb-[15px]" />, // Ridotta la dimensione delle icone
        label: 'Famiglia',
        desc: 'Dona 50€',
        route: 'family.Checkout',
      },
      {
        icon: <FaSchool className="text-[#f7a200] text-[2.5rem] mb-[15px]" />,
        label: 'Scuola',
        desc: 'Dona 500€',
        route: 'school.Checkout',
      },
      {
        icon: <FaBusinessTime className="text-[#f7a200] text-[2.5rem] mb-[15px]" />,
        label: 'Impresa',
        desc: 'Dona 5000€',
        route: 'agency.Checkout',
      },
      {
        icon: <FaHandsHelping className="text-[#f7a200] text-[2.5rem] mb-[15px]" />,
        label: '5x1000',
        desc: 'Scarica il modulo',
        isDownload: true,
      },
    ].map((card, index) => (
      <motion.div
        key={index}
        className="mb-5 md:mb-0 w-full max-w-[250px]" // Ridotta la larghezza massima
        onHoverStart={() => setHoveredCard(index)}
        onHoverEnd={() => setHoveredCard(null)}
        animate={hoveredCard === index ? 'hover' : hoveredCard !== null ? 'animateOther' : 'rest'}
        variants={cardVariants}
        initial="rest"
        transition={{ duration: 0.5 }}
      >
        <div
          onClick={
            card.isDownload
              ? handleDownload
              : () => handleCheckout(card.route)
          }
          className="flex flex-col justify-center items-center p-[25px] bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-[20px] text-white w-full shadow-md hover:shadow-xl transition-all duration-500 hover:bg-gradient-to-r hover:from-[#333] hover:to-[#444] cursor-pointer"
        >
          {card.icon}
          <p className="text-[1.1rem] text-white my-[5px] font-semibold transition-colors duration-500">
            {card.label}
          </p>
          <p className="text-sm text-gray-300 mt-2 leading-relaxed">
            {card.desc}
          </p>
          <div
            className="mt-4 w-[80%] h-[2px] bg-[#f7a200] opacity-80 hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          ></div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* Popup contatto */}
      {isContactFormOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-transparent rounded-lg p-6 w-full max-w-3xl relative">
            <ContactForm
              title="Contattaci"
              formFields={pageData.formFields}
              onSubmit={route('contact.submit')}
              isPopup={true}
              onClose={closeContactForm}
            />
          </div>
        </div>
      )}
    </BaseLayout>
  );
};

export default WorkPage;