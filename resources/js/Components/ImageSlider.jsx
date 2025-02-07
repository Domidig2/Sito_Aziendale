import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '@/assets/placeholders/Placeholder4.jpg';
import img2 from '@/assets/placeholders/Placeholder5.jpg';
import img3 from '@/assets/placeholders/Placeholder6.jpg';
// 3 cards per le comunità
const images = [
  {
    src: img1,
    text: "Sei Socievole ma allo stesso tempo deciso? Confrontati con Mimmo per la tua carriera nel mondo dello Sport e del Benessere. Scienze Motorie o Calcio?",
    buttonText: "Scopri di più su Sport e Benessere",
    link: '/sport-benessere',
  },
  {
    src: img2,
    text: "Sei Educata ma anche molto curiosa? Confrontati con Porzia per la tua carriera nel mondo della Scuola e degli Asili. Educatore con Scienze della Formazione?",
    buttonText: "Scopri di più su Scuola e Formazione",
    link: '/scuola-formazione',
  },
  {
    src: img3,
    text: "Sei Oculato ma anche di parte? Confrontati con Isma per una carriera in Sole24ore: Psicologia del Lavoro o Nutrizionista? Ingegneria Gestionale o Commercialista?",
    buttonText: "Scopri di più su Carriere e Opportunità",
    link: '/carriere-opportunita',
  },
];

const ImageSlider = () => {
  return (
    <section id="image-slider-section">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 4000 }}
        className="w-full h-96 lg:h-auto lg:max-w-[600px] shadow-lg rounded-lg overflow-hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            <img src={image.src} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            {/* Overlay per testo e bottone */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-4 text-white flex flex-col items-center">
              <p className="mb-2 text-center text-sm lg:text-base">{image.text}</p>
              <a
                href={image.link}
                className="mt-2 inline-block bg-primary-orange text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-orange-500 transition-transform transform hover:scale-105"
              >
                {image.buttonText}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageSlider;
