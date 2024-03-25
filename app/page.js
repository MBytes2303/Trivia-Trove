"use client";

import React, { useState } from "react";

export default function Home() {
  const [triviaData, setTriviaData] = useState(null);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch questions");
      }
      const questionsResponse = await response.json();
      setTriviaData(questionsResponse);
      console.log("Questions fetched!");
    } catch (error) {
      console.error(error.message);
    }
  };

  const showQuestions = () => {
    console.log(triviaData);
  };

  return (
    <main>
      <h1>Hello World</h1>
      <button onClick={fetchQuestions}>Fetch Questions</button>
      <button onClick={showQuestions}>Show questions</button>
    </main>
  );
}
