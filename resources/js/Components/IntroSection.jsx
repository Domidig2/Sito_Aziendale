import React from 'react';

const IntroSection = ({ title, subtitle, logo }) => {
  return (
    <section className="bg-white text-black py-16 min-h-[60vh] flex flex-wrap">
      <div className="w-full md:w-1/3 px-5">
        {logo && <img className="w-full object-contain" src={logo} alt="Logo" />}
      </div>
      <div className="w-full md:w-2/3 px-5">
        <div className="pt-16">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl mb-8">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
