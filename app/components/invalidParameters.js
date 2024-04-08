import React from "react";
import Link from "next/link";

export default function InvalidParameters({ navigateQuiz }) {
  return (
    <div className="w-9/12 bg-rose-700 m-auto p-4 rounded-lg text-center">
      <h1 className="text-xl mb-3">Cannot load your quiz...</h1>
      <p className="mb-4">
        Something went wrong when fetching your request. Either the API doesnt
        have enough questions for your query, or because due to an invalid
        paramter
      </p>
      <button
        className="p-2 rounded-md bg-sky-500 hover:bg-sky-700 transition-colors"
        onClick={navigateQuiz}
      >
        Home
      </button>
    </div>
  );
}
