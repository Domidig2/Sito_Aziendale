import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '@/assets/placeholders/vittima1.jpg';
import img2 from '@/assets/placeholders/vittima2.jpg';
import img3 from '@/assets/placeholders/vittima3.jpg';

// 3 cards per la sicurezza stradale
const images = [
  {
    src: img1,
    text: "Sei consapevole dei rischi sulla strada? Confrontati con i professionisti della sicurezza per scoprire come contribuire a prevenire gli incidenti e aiutare le vittime.",
    buttonText: "Scopri di più sulla sicurezza stradale",
    link: '/sicurezza-stradale',
  },
  {
    src: img2,
    text: "Vuoi fare la differenza? Unisciti alla nostra causa per aiutare le vittime degli incidenti stradali con progetti di sostegno e prevenzione.",
    buttonText: "Scopri come aiutare le vittime",
    link: '/sostegno-vittime',
  },
  {
    src: img3,
    text: "Ogni giorno, troppe persone sono coinvolte in incidenti. Scopri come educare i più giovani alla sicurezza stradale per fermare questa strage.",
    buttonText: "Scopri di più sulla prevenzione",
    link: '/prevenzione-incidenti',
  },
];

const ImageSlider = () => {
  return (
    <section id="image-slider-section">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 4000 }}
        className="w-full h-[600px] lg:h-auto lg:max-w-[600px] shadow-lg rounded-lg overflow-hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            <img src={image.src} alt={`Slide ${index}`} className="w-full h-[600px] object-cover" />
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
