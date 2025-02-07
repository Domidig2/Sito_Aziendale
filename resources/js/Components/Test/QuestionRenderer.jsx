import React from "react";
import SingleChoice from "./SingleChoice";
import MultipleChoice from "./MultipleChoice";
import ScaleQuestion from "./ScaleQuestion";

const QuestionRenderer = ({ question, onAnswer, userAnswers }) => {
  switch (question.type) {
    case "single":
      return (
        <SingleChoice
          question={question}
          onAnswer={onAnswer}
          userAnswers={userAnswers}
        />
      );
    case "multiple":
      return (
        <MultipleChoice
          question={question}
          onAnswer={onAnswer}
          userAnswers={userAnswers}
        />
      );
    case "scale":
      return (
        <ScaleQuestion
          question={question}
          onAnswer={onAnswer}
          userAnswers={userAnswers}
        />
      );
    default:
      return <div>Tipo di domanda non supportato</div>;
  }
};

export default QuestionRenderer;