import React, { useState, useEffect } from "react";
import QuestionRenderer from "./QuestionRenderer";
import questions from "../../data/questions.json";
import { calculateCluster } from "../../utils/calculateCluster";
import ClusterResult from "./ClusterResult";

const TestMindset = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [clusterResult, setClusterResult] = useState(null);

  const csrfTokenMetaTag = document.querySelector('meta[name="csrf-token"]');
  const csrfToken = csrfTokenMetaTag ? csrfTokenMetaTag.getAttribute('content') : '';

  console.log('CSRF Token:', csrfToken);

  const handleAnswer = (answer) => {
    const updatedAnswers = [...userAnswers];
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.type === "scale" && currentQuestion.answers) {

      const currentAnswers = updatedAnswers[currentQuestionIndex] || {};
      const { answerIndex, label } = answer;
      currentAnswers[answerIndex] = label;
      updatedAnswers[currentQuestionIndex] = currentAnswers;
    } else {

      updatedAnswers[currentQuestionIndex] = answer;
    }

    setUserAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const cluster = calculateCluster(userAnswers, questions);
      setClusterResult(cluster);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  const isCurrentQuestionAnswered = () => {
    const userAnswer = userAnswers[currentQuestionIndex];
    if (!userAnswer) {
      return false;
    }

    if (currentQuestion.type === "scale" && currentQuestion.answers) {
      return Object.keys(userAnswer).length === currentQuestion.answers.length;
    } else if (currentQuestion.type === "multiple") {
      return Array.isArray(userAnswer) && userAnswer.length > 0;
    } else {
      return Boolean(userAnswer);
    }
  };

  useEffect(() => {
    if (clusterResult) {

      fetch('/api/mindset-results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken,
          'Accept': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify({ cluster: clusterResult })
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Server response was not OK');
      })
      .then(data => {
        console.log('Cluster saved successfully:', data);
      })
      .catch(error => {
        console.error('Error saving the cluster:', error);
      });
    }
  }, [clusterResult]);

  if (clusterResult) {
    return <ClusterResult cluster={clusterResult} />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-gray text-white p-6">
      {/* Barra di avanzamento */}
      <div className="w-full max-w-3xl mb-4">
        <div className="relative h-4 bg-gray-700 rounded-full">
          <div
            className="absolute h-4 bg-primary-orange rounded-full"
            style={{
              width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
        <p className="text-sm text-gray-400 mt-2 text-center">
          Domanda {currentQuestionIndex + 1} di {questions.length}
        </p>
      </div>

      {/* Test content */}
      <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-primary-orange">
          Driving Challenge
        </h1>
        <QuestionRenderer
          question={currentQuestion}
          onAnswer={handleAnswer}
          userAnswers={userAnswers[currentQuestionIndex]}
        />
      </div>

      {/* Navigazione */}
      <div className="flex justify-between w-full max-w-3xl mt-6">
        {currentQuestionIndex > 0 && (
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Indietro
          </button>
        )}
        <button
          onClick={handleNext}
          className={`px-4 py-2 rounded-lg transition ${
            isCurrentQuestionAnswered()
              ? "bg-primary-orange text-white hover:bg-orange-600"
              : "bg-gray-700 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!isCurrentQuestionAnswered()}
        >
          {currentQuestionIndex < questions.length - 1 ? "Avanti" : "Fine"}
        </button>
      </div>
    </div>
  );
};

export default TestMindset;
