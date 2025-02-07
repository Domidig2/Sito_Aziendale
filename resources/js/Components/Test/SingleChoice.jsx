import React from "react";

const SingleChoice = ({ question, onAnswer, userAnswers }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{question.text}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(answer.text)}
            className={`px-4 py-2 rounded ${
              userAnswers === answer.text
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

export default SingleChoice;