import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaArrowLeft, FaArrowRight, FaEnvelope, FaDonate } from 'react-icons/fa';
import BaseLayout from '@/Layouts/BaseLayout';
import ContactForm from '@/Components/ContactForm';

const GenericPageLayout = ({
  introTitle,
  introTexts,
  galleryImages,
  sectionTitle,
  sectionTexts,
  sectionImage,
  sectionImageHover,
  prevRoute,
  nextRoute,
  contactRoute,
  donateRoute,
  contactFormFields,
  hoverEffect = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

  return (
    <BaseLayout>
      {/* Sezione Introduzione */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 bg-black text-white">
        {/* Testo a sinistra */}
        <div className="md:w-1/2 md:pr-10">
          <motion.h1
            className="text-2xl md:text-3xl font-bold text-primary-orange mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {introTitle}
          </motion.h1>
          {introTexts.map((text, index) => (
            <motion.p
              key={index}
              className="text-base md:text-lg italic text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * index, duration: 0.5 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
        {/* Carosello a destra */}
        <div className="md:w-1/2">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            swipeable={true}
            emulateTouch={true}
            transitionTime={500}
            showArrows={false}
            showIndicators={false}
          >
            {galleryImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-auto h-auto max-w-[300px] max-h-[300px] rounded-lg shadow-md mx-auto"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Sezione contenuto e immagine */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-12 bg-black text-white">
        {/* Immagine a sinistra */}
        <div
          className="md:w-1/2 relative flex justify-center"
          onMouseEnter={() => hoverEffect && setIsHovered(true)}
          onMouseLeave={() => hoverEffect && setIsHovered(false)}
        >
          <motion.img
            src={hoverEffect && isHovered ? sectionImageHover : sectionImage}
            alt="Sezione Immagine"
            className="w-full h-auto max-w-[400px] max-h-[300px] object-cover rounded-lg shadow-lg transition-transform duration-500"
            initial={{ scale: 1 }}
            whileHover={{ scale: hoverEffect ? 1.05 : 1 }}
          />
        </div>

        {/* Testo a destra */}
        <div className="md:w-1/2 md:pl-10">
          <motion.h2
            className="text-xl md:text-2xl font-bold text-primary-orange mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {sectionTitle}
          </motion.h2>
          {sectionTexts.map((text, index) => (
            <motion.p
              key={index}
              className="text-sm md:text-base font-light leading-relaxed mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Pulsanti di navigazione */}
      <section className="bg-black py-8 flex justify-center space-x-4">
        {prevRoute && (
          <Link
            href={prevRoute}
            className="flex flex-col justify-center items-center p-[20px] bg-[#1a1a1a] rounded-[20px] transition-all duration-300 ease-in-out text-white shadow-lg hover:-translate-y-2 hover:shadow-xl hover:bg-[#333] no-underline"
          >
            <FaArrowLeft className="text-[#f7a200] text-[2rem] mb-[10px] transition-transform duration-300 ease-in-out hover:scale-110" />
            <span className="text-sm md:text-base text-white transition-colors duration-300 ease-in-out hover:text-[#f7a200]">
              Pagina Precedente
            </span>
          </Link>
        )}
        <button
          onClick={openContactForm}
          className="flex flex-col justify-center items-center p-[20px] bg-[#1a1a1a] rounded-[20px] transition-all duration-300 ease-in-out text-white shadow-lg hover:-translate-y-2 hover:shadow-xl hover:bg-[#333] no-underline focus:outline-none"
        >
          <FaEnvelope className="text-[#f7a200] text-[2rem] mb-[10px] transition-transform duration-300 ease-in-out hover:scale-110" />
          <span className="text-sm md:text-base text-white transition-colors duration-300 ease-in-out hover:text-[#f7a200]">
            Contattaci
          </span>
        </button>
        {donateRoute && (
          <Link
            href={route('work.page')}
            className="flex flex-col justify-center items-center p-[20px] bg-[#1a1a1a] rounded-[20px] transition-all duration-300 ease-in-out text-white shadow-lg hover:-translate-y-2 hover:shadow-xl hover:bg-[#333] no-underline"
          >
            <FaDonate className="text-[#f7a200] text-[2rem] mb-[10px] transition-transform duration-300 ease-in-out hover:scale-110" />
            <span className="text-sm md:text-base text-white transition-colors duration-300 ease-in-out hover:text-[#f7a200]">
              Dona il tuo Sostegno
            </span>
          </Link>
        )}
        {nextRoute && (
          <Link
            href={nextRoute}
            className="flex flex-col justify-center items-center p-[20px] bg-[#1a1a1a] rounded-[20px] transition-all duration-300 ease-in-out text-white shadow-lg hover:-translate-y-2 hover:shadow-xl hover:bg-[#333] no-underline"
          >
            <FaArrowRight className="text-[#f7a200] text-[2rem] mb-[10px] transition-transform duration-300 ease-in-out hover:scale-110" />
            <span className="text-sm md:text-base text-white transition-colors duration-300 ease-in-out hover:text-[#f7a200]">
              Pagina Successiva
            </span>
          </Link>
        )}
      </section>

      {/* Modulo di contatto */}
      {isContactFormOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-transparent rounded-lg p-6 w-full max-w-3xl relative">
            <ContactForm
              title="Contattaci"
              formFields={contactFormFields}
              onSubmit={() => console.log('Submit form')}
              isPopup={true}
              onClose={() => setIsContactFormOpen(false)}
            />
          </div>
        </div>
      )}
    </BaseLayout>
  );
};

export default GenericPageLayout;