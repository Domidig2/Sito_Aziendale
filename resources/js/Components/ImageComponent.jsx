import React, { useState, useEffect } from 'react';
// Immagini che switchiano nella welcome insieme alle 3 parole
const ImageComponent = ({ currentImage }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(false);
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentImage]);

  return (
    <div className={`flex justify-center items-center w-64 h-64 m-auto transition-transform duration-1000 ease-in-out transform ${fadeIn ? 'opacity-100 rotate-y-180 scale-110' : 'opacity-0'}`}>
    <img src={currentImage} alt="Logo che cambia" className="w-full h-full rounded-lg shadow-xl" />
  </div>

  );
};

export default ImageComponent;
