import React from "react";

const ScaleQuestion = ({ question, onAnswer, userAnswers = {} }) => {
  const scaleLabels = ["Per niente", "Poco", "Abbastanza", "Molto"];

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">{question.text}</h2>
      {question.answers.map((answer, answerIndex) => (
        <div key={answerIndex} className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{answer.text}</h3>
          <div className="flex space-x-4">
            {scaleLabels.map((label, index) => (
              <button
                key={index}
                onClick={() => onAnswer({ answerIndex, label })}
                className={`px-4 py-2 rounded-lg transition ${
                  userAnswers[answerIndex] === label
                    ? "bg-primary-orange text-white"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScaleQuestion;