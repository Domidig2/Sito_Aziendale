import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/FormSection.css';

const questions = [
    {
        "id": 1,
        "text": "Domanda 1: Il tuo stile di guida è...",
        "answers": [
          ["A. Veloce e ", { "bold": "sportivo" }],
          ["B. Sicuro e ", { "bold": "prudente" }],
          ["C. Confortevole e ", { "bold": "rilassato" }],
          ["D. Avventuroso e ", { "bold": "fuoristrada" }]
        ]
      },
      {
        "id": 2,
        "text": "Domanda 2: Cosa cerchi in un'auto?",
        "answers": [
          ["A. ", { "bold": "Prestazioni elevate" }, " e motore potente"],
          ["B. ", { "bold": "Sicurezza" }, " e tecnologie avanzate"],
          ["C. ", { "bold": "Comfort" }, " e spazio interno"],
          ["D. ", { "bold": "Versatilità" }, " per ogni tipo di strada"]
        ]
      },
      {
        "id": 3,
        "text": "Domanda 3: Quale tipo di strada preferisci?",
        "answers": [
          ["A. ", { "bold": "Strade tortuose" }, " per sfidare le curve"],
          ["B. ", { "bold": "Autostrade" }, " per viaggi lunghi e sicuri"],
          ["C. ", { "bold": "Città" }, " per muoverti agilmente nel traffico"],
          ["D. ", { "bold": "Fuoristrada" }, " per esplorare nuovi sentieri"]
        ]
      },
      {
        "id": 4,
        "text": "Domanda 4: Cosa ti piace di più in un'auto?",
        "answers": [
          ["A. Il ", { "bold": "design sportivo" }, " e aggressivo"],
          ["B. Le ", { "bold": "tecnologie avanzate" }, " di assistenza alla guida"],
          ["C. Il ", { "bold": "comfort interno" }, " e i materiali di qualità"],
          ["D. La ", { "bold": "robustezza" }, " e la capacità off-road"]
        ]
      },
];

const FormSection = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
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
      let message = '';
      switch (majorityAnswers[0]) {
        case 'A':
          message = 'Sei un amante della velocità e delle emozioni forti! Il tuo stile di guida è decisamente sportivo.';
          break;
        case 'B':
          message = 'Sicurezza prima di tutto! Ti piace sentirti protetto e scegliere le opzioni più sicure.';
          break;
        case 'C':
          message = 'Il comfort e la serenità sono le tue priorità. Ti piace viaggiare senza stress.';
          break;
        case 'D':
          message = 'Un vero avventuriero! Ogni terreno è il tuo campo di gioco.';
          break;
        default:
          message = 'Il tuo approccio è equilibrato e versatile! Perfetto per ogni situazione.';
      }
      setResultMessage(message);
      setShowWelcomeMessage(true);
    } else {
      setResultMessage('Il tuo approccio è equilibrato e versatile! Perfetto per ogni situazione.');
      setShowWelcomeMessage(true);
    }
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
            <h3 className="text-4xl font-bold text-primary-orange mb-4">Risultato del tuo test!</h3>
            <p className="text-2xl text-white">{resultMessage}</p>
          </div>
        </motion.div>
      )}

      {/* Titolo con Icona Informativa */}
      <div className="flex items-center mb-6 relative">
        <h2 className="text-5xl font-bold text-white text-center hover:text-primary-orange transition-all">
          Scopri il tuo stile di guida ideale!
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
              <p>Scopri il tuo stile di guida ideale in modo rapido e senza registrazione. Il risultato sarà unico per te!</p>
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
