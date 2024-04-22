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
  const [seconds, setSeconds] = useState(15);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [points, setPoints] = useState(0);
  const [maxPoints, setMaxPoints] = useState(0);

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
        setMaxPoints(questionsResponse.results.length);

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
    setSeconds(15);
    const timerId = setInterval(() => {
      setSeconds((prevSeconds) => {
        setTimeUp(false);
        if (prevSeconds === 0) {
          setTimeUp(true);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000); // 1000 milliseconds = 1 second
    setTimer(timerId);
  };

  const startQuiz = () => {
    setQuizStarted(true);
    startTimer();
  };

  const nextQuestion = () => {
    setTimeUp(false);
    if (currentQuestionIndex < triviaData.length - 1) {
      setSeconds(15);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const timerBar = () => {
    return (seconds / 15) * 100;
  };

  const handlePoints = () => {
    setPoints(points + 1);
  };

  return (
    <main className="bg-gray-300 flex justify-center py-4 h-screen w-screen overflow-auto">
      <div className="w-10/12 h-11/12 bg-gray-700 drop-shadow-md rounded-lg p-4 flex justify-between items-center flex-col">
        {validRequest ? (
          <>
            {quizStarted ? (
              <div className="w-9/12 my-28">
                <p className="text-slate-100 text-center text-lg">
                  {currentQuestionIndex + 1} out of {maxPoints} questions
                </p>
                {quizFinished ? (
                  <ResultCard points={points} maxPoints={maxPoints} />
                ) : (
                  <>
                    <QuizCard
                      currQuestion={triviaData[currentQuestionIndex]}
                      handlePoints={handlePoints}
                      nextQuestion={nextQuestion}
                      timeState={timeUp}
                    />
                    <div
                      className="bg-gray-500 h-5"
                      style={{ width: `${timerBar()}%` }}
                    ></div>
                  </>
                )}
              </div>
            ) : (
              <div className="mt-64">
                <button
                  className="p-4 rounded-md bg-sky-500 hover:bg-sky-700 transition-colors text-xl"
                  onClick={startQuiz}
                >
                  Ready?
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <InvalidParameters navigateQuiz={navigateQuiz} />
          </>
        )}
        <div className="flex justify-between w-9/12">
          <button
            className="p-2 rounded-md bg-red-500 hover:bg-red-700 transition-colors w-40"
            onClick={navigateQuiz}
          >
            Exit
          </button>
          {timeUp && (
            <button
              className="p-2 rounded-md bg-blue-500 hover:bg-blue-700 transition-colors w-40"
              onClick={nextQuestion}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

function QuizCard({ currQuestion, handlePoints, nextQuestion, timeState }) {
  const [possibleAnswers, setPossibleAnswers] = useState([]);

  function shuffle(array) {
    let shuffledArray = [];
    let usedIndexes = [];

    let i = 0;
    while (i < array.length) {
      let randomNumber = Math.floor(Math.random() * array.length);
      if (!usedIndexes.includes(randomNumber)) {
        shuffledArray.push(array[randomNumber]);
        usedIndexes.push(randomNumber);
        i++;
      }
    }
    return shuffledArray;
  }

  useEffect(() => {
    let answers = [
      ...currQuestion.incorrect_answers,
      currQuestion.correct_answer,
    ];

    const shuffledAnswers = shuffle(answers);
    setPossibleAnswers(shuffledAnswers);
  }, [currQuestion]);

  const handleAnswer = (answer) => {
    console.log(answer);
    if (answer === currQuestion.correct_answer) {
      handlePoints();
      console.log(currQuestion.correct_answer);
    }
    nextQuestion();
  };

  return (
    <div className="bg-green-500 h-72 rounded-t-lg">
      <p className="text-slate-950 text-center py-2 text-2xl my-2">
        {currQuestion.question}
      </p>
      <div className="grid grid-cols-2">
        {possibleAnswers.map((element, index) => (
          <button
            key={index}
            onClick={(event) => handleAnswer(event.target.value)}
            value={element}
            className="text-slate-950 bg-cyan-600 p-4 m-4 rounded-lg"
            disabled={timeState}
          >
            {element}
          </button>
        ))}
      </div>
    </div>
  );
}

function ResultCard({ points, maxPoints }) {
  return (
    <div className="bg-green-500 h-72 rounded-lg flex flex-col justify-center items-center">
      <p className="text-slate-950 text-3xl my-10">Quiz Over!</p>
      <p className="text-slate-950 text-lg">
        You Scored:
        <br />
        {points} / {maxPoints}
      </p>
    </div>
  );
}
