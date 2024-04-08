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
  return (
    <main className="bg-gray-300 flex justify-center py-4 h-screen w-screen overflow-auto">
      <div className="w-10/12 h-11/12 bg-gray-700 drop-shadow-md rounded-lg p-4">
        {/* <button onClick={fetchQuestions}>Fetch Questions</button> */}
        <button onClick={showQuestions}>Show Questions</button>
        {validRequest ? (
          <>
            <h1>Valid quiz Request</h1>
            <div>{amount}</div>
            <div>{difficulty}</div>
            <div>{catNum}</div>
            <div>{type}</div>
          </>
        ) : (
          <>
            <InvalidParameters navigateQuiz={navigateQuiz} />
          </>
        )}

        {/* <div>
          {triviaData &&
            Object.values(triviaData).map((item, index) => (
              <>
                <div key={index}>
                  <p>Question: {item.question}</p>
                  <p>Type: {item.type}</p>
                </div>
              </>
            ))}
        </div> */}
        <button
          className="p-2 rounded-md bg-sky-500 hover:bg-sky-700 transition-colors"
          onClick={navigateQuiz}
        >
          Home
        </button>
      </div>
    </main>
  );
}
