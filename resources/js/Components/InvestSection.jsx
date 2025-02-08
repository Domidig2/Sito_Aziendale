import React, { useState } from 'react';
import TitleComponent from '@/Components/TitleComponent';
import WordsSlider from '@/Components/WordsSlider';
import ImageComponent from '@/Components/ImageComponent';
import '../assets/css/InvestSection.css';

import img1 from '@/assets/images/logos/composizione1-removebg-preview.png';
import img2 from '@/assets/composizione4-removebg-preview.png';
import img3 from '@/assets/composizione5-removebg-preview.png';

const images = [img1, img2, img3];

const InvestSection = ({ formRef }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const handleWordChange = (newIndex) => {
    setCurrentWordIndex(newIndex);
  };

  // Scroll
  const scrollToForm = () => {
    if (formRef && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="invest-section w-full flex flex-col lg:flex-row justify-between items-center p-12 text-white min-h-[400px] shadow-lg overflow-hidden bg-[#0a0a0a]">
      <div className="left-container flex flex-col justify-center flex-1 px-4 lg:px-8">
        {/* TitleComponent */}
        <TitleComponent />

        {/* Wrapper */}
        <div className="words-slider-container min-h-[60px] flex justify-center items-center">
          <WordsSlider currentWordIndex={currentWordIndex} onWordChange={handleWordChange} />
        </div>

        {/* Bottone  */}
        <div className="flex justify-center mt-6">
    <button
        onClick={scrollToForm}
        className="border-2 border-primary-orange text-white py-3 px-8 rounded-lg text-lg font-bold transition-all duration-300 shadow-md hover:bg-primary-orange hover:text-white hover:shadow-lg"
    >
        Compila il test
    </button>
</div>

      </div>

      <div className="right-container flex justify-center items-center flex-1 transition-transform duration-300 ease-in-out">
        <ImageComponent currentImage={images[currentWordIndex]} />
      </div>
    </div>
  );
};

export default InvestSection;
