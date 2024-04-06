import React from "react";

export default function CustomizeCategory({ navigateBack }) {
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
          />
        </div>
        <div className=" text-gray-900 font-bold text-lg mb-6">
          <label className="block text-gray-100">Select difficulty</label>
          <select name="questionDifficulty" className="p-2 w-96 rounded-lg">
            <option>Any Difficulty</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
        <div className=" text-gray-900 font-bold text-lg mb-6">
          <label className="block text-gray-100">Select type</label>
          <select name="questionType" className="p-2 w-96 rounded-lg">
            <option>Any Type</option>
            <option>Multiple Choice</option>
            <option>True/False</option>
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
          <button type="submit" className="bg-indigo-600 p-2 rounded-md">
            Start Quiz!
          </button>
        </div>
      </form>
    </div>
  );
}
