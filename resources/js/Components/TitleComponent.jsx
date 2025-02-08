import React from 'react';
// Titolo sopra le 3 parole che girano nella welcome
const TitleComponent = () => {
  return (
    <div className="text-center">
      <h1 className="static-title text-2xl font-extrabold text-white tracking-widest transform transition-transform duration-300 ease-in-out hover:translate-y-1 hover:text-primary-orange hover:scale-105 drop-shadow-lg">
      Qual'è il tuo stile di guida?
      </h1>
    </div>
  );
};

export default TitleComponent;
