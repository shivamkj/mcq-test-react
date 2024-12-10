const getResultAnaysis = (userResponse, timeTaken, TIME_LIMIT) => {
  let totalCorrect = 0;
  let totalWrong = 0;
  let totalSkipped = 0;
  const totalQuestions = userResponse.length;

  for (const response of userResponse) {
    if (response.isCorrect == true) totalCorrect++;
    else if (response.isCorrect == false) totalWrong++;
    else totalSkipped++;
  }

  const percentMarks = ((totalCorrect / totalQuestions) * 100).toFixed(2);
  const totalAttempt = totalWrong + totalCorrect;
  const percentAccuracy = ((totalCorrect / totalAttempt) * 100 || 0).toFixed(2);

  const totalTimeSum = timeTaken.reduce(
    (previousTime, currentTime) =>
      (previousTime || TIME_LIMIT) + (currentTime || TIME_LIMIT)
  );
  const totalTime = (totalTimeSum / 60).toFixed(2);

  return {
    totalWrong,
    totalCorrect,
    totalSkipped,
    totalQuestions,
    percentMarks,
    percentAccuracy,
    userResponse,
    totalTime,
  };
};

export default getResultAnaysis;
