import React from "react";

const MultipleChoice = ({ question, onAnswer, userAnswers }) => {
  const currentAnswers = Array.isArray(userAnswers) ? userAnswers : [];

  const toggleAnswer = (answer) => {
    const isSelected = currentAnswers.includes(answer);

    let updatedAnswers;
    if (isSelected) {
      updatedAnswers = currentAnswers.filter((a) => a !== answer);
    } else if (currentAnswers.length < question.maxAnswers) {
      updatedAnswers = [...currentAnswers, answer];
    } else {

      return;
    }

    onAnswer(updatedAnswers);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{question.text}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => toggleAnswer(answer.text)}
            className={`px-4 py-2 rounded ${
              currentAnswers.includes(answer.text)
                ? "bg-orange-500 text-white"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoice;