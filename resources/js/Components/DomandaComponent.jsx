import { motion } from 'framer-motion';
// Logica gestione domande del quiz mini della welcome
const DomandaComponent = ({ question, onAnswer, onBack, showBackButton }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="question mb-8"
    >
      <div className="text-center text-white text-2xl font-bold mb-6">
        <p>{question.text}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mb-10">
  {questions[currentQuestionIndex].answers.map((answer, index) => (
    <motion.button
      key={index}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="bg-primary-orange text-white py-4 px-8 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-lg"
      onClick={() => handleAnswer(answer)}
    >
      {answer}
    </motion.button>
  ))}
</div>

      {showBackButton && (
        <div className="flex justify-center mt-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-transparent border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition"
            onClick={onBack}
          >
            Indietro
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};

export default DomandaComponent;