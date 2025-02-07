import React from 'react';
import CardSection from '@/Components/CardSection';
import ImageSlider from '@/Components/ImageSlider';

const MainSection = () => {
  return (
    <div className="main-section flex justify-between py-12 px-8 lg:px-16 bg-dark-gray text-white gap-6">
      {/* Sezione a sinistra con le carte */}
      <div className="left-section flex-1 max-w-[50%]">
        <CardSection />
      </div>

      {/* Sezione a destra con lo slider */}
      <div className="right-section flex-1 flex justify-center items-center">
        <ImageSlider />
      </div>
    </div>
  );
};

export default MainSection;
