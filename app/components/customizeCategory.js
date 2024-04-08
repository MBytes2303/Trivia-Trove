import React, { useState } from "react";
import Link from "next/link";

export default function CustomizeCategory({
  navigateBack,
  navigateQuiz,
  updateAmount,
  updateDifficulty,
  updateType,
}) {
  // const [amount, setAmount] = useState(0);
  // const [difficulty, setDifficulty] = useState("");
  // const [type, setType] = useState("");

  // const handleAmount = (event) => {
  //   setAmount(parseInt(event.target.value));
  // };

  // const handleDifficulty = (event) => {
  //   setDifficulty(event.target.value);
  // };

  // const handleType = (event) => {
  //   setType(event.target.value);
  // };

  return (
    <div className="flex justify-center items-center h-3/5">
      <form>
        <div className="text-gray-900 font-bold text-lg mb-6">
          <label className="block text-gray-100">Number of questions</label>
          <input
            name="numberOfQuestions"
            type="number"
            min={1}
            max={50}
            className="p-2 w-96 rounded-lg"
            placeholder="Choose a number"
            onChange={updateAmount}
          />
        </div>
        <div className=" text-gray-900 font-bold text-lg mb-6">
          <label className="block text-gray-100">Select difficulty</label>
          <select
            name="questionDifficulty"
            className="p-2 w-96 rounded-lg"
            onChange={updateDifficulty}
          >
            <option value={""}>Any Difficulty</option>
            <option value={"&difficulty=easy"}>Easy</option>
            <option value={"&difficulty=medium"}>Medium</option>
            <option value={"&difficulty=hard"}>Hard</option>
          </select>
        </div>
        <div className=" text-gray-900 font-bold text-lg mb-6">
          <label className="block text-gray-100">Select type</label>
          <select
            name="questionType"
            className="p-2 w-96 rounded-lg"
            onChange={updateType}
          >
            <option value={""}>Any Type</option>
            <option value={"&type=multiple"}>Multiple Choice</option>
            <option value={"&type=boolean"}>True/False</option>
          </select>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-gray-600 p-2 rounded-md"
            onClick={() => {
              navigateBack();
            }}
          >
            Go Back
          </button>
          <button className="bg-blue-600 p-2 rounded-md" onClick={navigateQuiz}>
            Start Quiz!
          </button>
        </div>
      </form>
    </div>
  );
}
