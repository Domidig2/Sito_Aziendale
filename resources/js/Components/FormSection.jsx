import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/FormSection.css';
// Domande quiz mini della welcome
const questions = [
  {
    id: 1,
    text: 'Domanda 1: Il tuo stile di guida è..',
    answers: [
      ['A. Autonomo ed ', { bold: 'Indipendente' }],
      ['B. Affronto i dubbi e ', { bold: 'gestisco il Rischio' }],
      ['C. Esperto, viaggio ', { bold: 'insieme agli Altri' }],
      ['D. Imparo attraverso ', { bold: 'nuove Esperienze' }]
    ]
  },
  {
    id: 2,
    text: 'Domanda 2: Il tuo ambiente di lavoro è..',
    answers: [
      ['A. In ', { bold: 'Smart Working' }, ' voglio essere uno ', { bold: 'Smart Worker' }],
      ['B. Una ', { bold: 'Smart City' }, ', potrei diventare ', { bold: 'Smart Citizen' }],
      ['C. Uno ', { bold: 'Smart Office' }, ' devo attivare una mia ', { bold: 'Smart Card' }],
      ['D. ', { bold: 'Smart&Start' }, ' per creare la mia ', { bold: 'Startup' }]
    ]
  },
  {
    id: 3,
    text: 'Domanda 3: Da bambino preferivi giocare...',
    answers: [
      ['A. ai ', { bold: 'videogiochi' }, ' per sfidare gli altri'],
      ['B. con i miei ', { bold: 'giochi' }, ' solo reali'],
      ['C. a ', { bold: 'giochi da tavola' }, ' insieme agli altri'],
      ['D. a ', { bold: 'nuovi giochi' }, ' creati da me']
    ]
  }
];

const FormSection = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [community, setCommunity] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  const handleFinalStep = (answers) => {
    const answerCounts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});

    const maxCount = Math.max(
      answerCounts['A'] || 0,
      answerCounts['B'] || 0,
      answerCounts['C'] || 0,
      answerCounts['D'] || 0
    );
    const majorityAnswers = Object.keys(answerCounts).filter((key) => answerCounts[key] === maxCount);

    if (majorityAnswers.length === 1) {
      let communityName = '';
      switch (majorityAnswers[0]) {
        case 'A':
          communityName = 'digitale';
          highlightSection('card-1');
          break;
        case 'B':
          communityName = 'creativa';
          highlightSection('card-2');
          break;
        case 'C':
        case 'D':
          communityName = 'inclusiva';
          highlightSection('card-3');
          break;
        default:
          highlightSection('image-slider-section');
      }
      setCommunity(communityName);
      setShowWelcomeMessage(true);
    } else {
      setCommunity('inclusiva');
      highlightSection('image-slider-section');
      setShowWelcomeMessage(true);
    }
  };

  const highlightSection = (sectionId) => {
    setTimeout(() => {
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        targetSection.classList.add('highlight');
        setTimeout(() => {
          targetSection.classList.remove('highlight');
        }, 3000);
      }
    }, 2500);
  };

  const handleAnswer = (answer) => {
    const answerLetter = answer[0];
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = answerLetter;
    setUserAnswers(newUserAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleFinalStep(newUserAnswers);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const questionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  useEffect(() => {
    if (showWelcomeMessage) {
      const timer = setTimeout(() => setShowWelcomeMessage(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [showWelcomeMessage]);

  return (
    <div className="form-section p-16 bg-[#0a0a0a] text-white min-h-[90vh] flex flex-col justify-center items-center relative">
      {/* Messaggio di Benvenuto */}
      {showWelcomeMessage && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center bg-gray-800 p-8 rounded-lg shadow-lg border border-primary-orange">
            <h3 className="text-4xl font-bold text-primary-orange mb-4">Benvenuto nella tua comunità</h3>
            <p className="text-2xl text-white">
              Sei nella comunità <span className="capitalize text-primary-orange">{community}</span>!
            </p>
          </div>
        </motion.div>
      )}

      {/* Titolo con Icona Informativa */}
      <div className="flex items-center mb-6 relative">
        <h2 className="text-5xl font-bold text-white text-center hover:text-primary-orange transition-all">
          Scopri a che comunità appartieni!
        </h2>
        <div
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="ml-4 cursor-pointer relative"
          style={{ color: '#1E90FF', position: 'relative', top: '-8px' }}
        >
          <FontAwesomeIcon icon={faInfoCircle} size="lg" />
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-gray-800 text-white text-sm p-3 rounded-lg shadow-lg border border-blue-500 z-50 text-center">
              <p>Scopri la tua comunità senza impegno! È anonimo, gratis e senza registrazione. Promesso: nessuno spionaggio, solo divertimento!</p>
            </div>
          )}
        </div>
      </div>

      {/* Indicatore di progresso */}
      <p className="text-lg text-gray-400 mb-6">
        Domanda {currentQuestionIndex + 1} di {questions.length}
      </p>

      {/* Animazione per la domanda */}
      <motion.div
        key={currentQuestionIndex}
        variants={questionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
        className="question-card bg-gray-800 border-2 border-primary-orange rounded-lg p-8 max-w-2xl shadow-lg text-center mb-10"
      >
        <div className="question-icon text-7xl text-primary-orange">❓</div>
        <div className="text-3xl font-bold text-white mt-6">{questions[currentQuestionIndex].text}</div>
      </motion.div>

      {/* Risposte */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 w-full max-w-2xl">
        {questions[currentQuestionIndex].answers.map((answer, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-700 text-white py-4 px-8 rounded-xl shadow-lg hover:bg-gray-600 transition-all transform text-lg font-medium tracking-wide hover:text-primary-orange hover:shadow-md"
            onClick={() => handleAnswer(answer.map(segment => typeof segment === 'object' ? segment.bold : segment).join(''))}
          >
            {answer.map((segment, i) =>
              typeof segment === 'object' ? (
                <span key={i} className="font-bold">{segment.bold}</span>
              ) : (
                <span key={i}>{segment}</span>
              )
            )}
          </motion.button>
        ))}
      </div>

      {/* Indietro */}
      {currentQuestionIndex > 0 && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-transparent border-2 border-primary-orange text-white py-3 px-6 rounded-lg hover:bg-primary-orange hover:text-white transition transform text-xl"
          onClick={handleBack}
        >
          Indietro
        </motion.button>
      )}
    </div>
  );
};

export default FormSection;
