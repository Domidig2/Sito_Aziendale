import React, { useEffect, useState } from 'react';
import '../assets/css/WordsSlider.css';
// 3 parole che girano nella welcome
const words = ['digitale', 'creativa', 'inclusiva'];

const WordsSlider = ({ currentWordIndex, onWordChange }) => {
  const [currentText, setCurrentText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let typingInterval;
    const currentWord = words[currentWordIndex];

    if (typing) {
      typingInterval = setInterval(() => {
        setCurrentText((prevText) => {
          const nextText = currentWord.slice(0, prevText.length + 1).toUpperCase();
          if (nextText === currentWord.toUpperCase()) {
            setTyping(false);
          }
          return nextText;
        });
      }, 100);
    } else {
      setTimeout(() => {
        setTyping(true);
        setCurrentText('');
        const newIndex = (currentWordIndex + 1) % words.length;
        onWordChange(newIndex);
      }, 3000);
    }

    return () => clearInterval(typingInterval);
  }, [typing, currentWordIndex, onWordChange]);

  return (
    <div className="flex justify-center items-center text-6xl font-semibold text-white tracking-wide uppercase relative min-h-[60px] hover:text-primary-orange transition-colors duration-500">
      <h2 className="word gradient-text text-6xl font-bold tracking-wide uppercase transition-all duration-500">
        {currentText}
      </h2>
      <span className="blinking-cursor h-full ml-1"></span>
    </div>
  );
};

export default WordsSlider;
