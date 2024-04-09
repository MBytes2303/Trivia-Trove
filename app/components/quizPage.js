"use client";

import React, { useState, useEffect } from "react";
import InvalidParameters from "./invalidParameters";

export default function QuizPage({
  navigateQuiz,
  amount,
  catNum,
  difficulty,
  type,
}) {
  const [triviaData, setTriviaData] = useState(null);
  const [responseCode, setResponseCode] = useState(0);
  const [validRequest, setValidRequest] = useState(false);

  const [timer, setTimer] = useState(null);
  const [seconds, setSeconds] = useState(5);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // need amount of questions
  const quizAmount = amount;
  // need category number
  const quizCategory = catNum;
  // need difficulty
  const quizDifficulty = difficulty;
  // need type
  const quizType = type;

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        // API formats:
        // only category and number questions chosen:             https://opentdb.com/api.php?amount=10&category=9
        // category, number of questions and difficulty chosen:   https://opentdb.com/api.php?amount=10&category=9&difficulty=easy
        // all options chosen:                                    https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple
        const response = await fetch(
          `https://opentdb.com/api.php?amount=${quizAmount}&category=${quizCategory}${quizDifficulty}${quizType}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        const questionsResponse = await response.json();
        setTriviaData(questionsResponse.results);
        setResponseCode(questionsResponse.response_code);

        if (responseCode === 0 && quizAmount > 0) {
          setValidRequest(true);
          console.log("Questions fetched successfully!");
        } else {
          setValidRequest(false);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchQuizData();
  }, []);

  const showQuestions = () => {
    console.log(triviaData);
    console.log(responseCode);
  };

  const startTimer = () => {
    setSeconds(5);
    const timerId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timerId);
          setTimeUp(true);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000); // 1000 milliseconds = 1 second
    setTimer(timerId);
  };

  const stopTimer = () => {
    clearInterval(timer);
    setTimer(null);
  };

  // Function to reset the timer
  const resetTimer = () => {
    clearInterval(timer);
    setTimer(null);
    setSeconds(10);
    setTimeReached(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
    startTimer();
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < triviaData.length - 1) {
      startTimer();
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTimeUp(false);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <main className="bg-gray-300 flex justify-center py-4 h-screen w-screen overflow-auto">
      <div className="w-10/12 h-11/12 bg-gray-700 drop-shadow-md rounded-lg p-4">
        {/* <button onClick={fetchQuestions}>Fetch Questions</button> */}
        <button onClick={showQuestions}>Show Questions</button>
        {validRequest ? (
          <>
            {quizStarted ? (
              <div>
                <p>{seconds}</p>
                <p>{currentQuestionIndex}</p>
                {/* <button onClick={nextQuestion}>Next</button> */}
                {quizFinished ? (
                  <ResultCard />
                ) : (
                  <>
                    <QuizCard
                      currQuestion={triviaData[currentQuestionIndex]}
                      timerState={timeUp}
                    />
                    {timeUp && <button onClick={nextQuestion}>Next</button>}
                  </>
                )}
              </div>
            ) : (
              <div>
                <button
                  className="p-2 rounded-md bg-sky-500 hover:bg-sky-700 transition-colors"
                  onClick={startQuiz}
                >
                  Ready!
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <InvalidParameters navigateQuiz={navigateQuiz} />
          </>
        )}

        <button
          className="p-2 rounded-md bg-red-500 hover:bg-red-700 transition-colors"
          onClick={navigateQuiz}
        >
          Go Back
        </button>
      </div>
    </main>
  );
}

function QuizCard({ currQuestion, timerState }) {
  return <div>{currQuestion.question}</div>;
}

function ResultCard() {
  return <div>Your results would show here</div>;
}
