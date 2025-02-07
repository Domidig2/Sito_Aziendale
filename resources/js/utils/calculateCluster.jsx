

export const calculateCluster = (userAnswers, questions) => {
  const clusterScores = {};

  userAnswers.forEach((userAnswer, index) => {
    const question = questions[index];
    if (!question) return;

    if (question.type === "scale") {

      const scaleValues = {
        "Per niente": 0,
        "Poco": 1,
        "Abbastanza": 2,
        "Molto": 3,
      };

      const score = scaleValues[userAnswer] || 0;
      const cluster = question.cluster;

      if (cluster) {
        clusterScores[cluster] = (clusterScores[cluster] || 0) + score;
      }
    } else if (question.type === "single" || question.type === "multiple") {
      const userAnswersArray = Array.isArray(userAnswer) ? userAnswer : [userAnswer];

      userAnswersArray.forEach((ua) => {
        const selectedOption = question.answers.find((option) => option.text === ua);

        if (selectedOption && selectedOption.cluster) {
          clusterScores[selectedOption.cluster] = (clusterScores[selectedOption.cluster] || 0) + 1;
        }
      });
    }
  });

  const maxScore = Math.max(...Object.values(clusterScores));
  return Object.keys(clusterScores).find((cluster) => clusterScores[cluster] === maxScore);
};