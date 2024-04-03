"use client";

import React, { useState } from "react";
import GeneralCategory from "./components/generalCategory";
import EntertainmentCategory from "./components/entertainmentCategory";

export default function Home() {
  const [section, setSection] = useState(true);
  const [category, setCategory] = useState("");

  const firstSection = () => {
    setSection(true);
  };

  const secondSection = () => {
    setSection(false);
  };

  const updateCategory = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <main className="bg-gray-300 flex justify-center py-4 h-screen w-screen overflow-auto">
      <div className="w-10/12 h-11/12 bg-gray-700 drop-shadow-md rounded-lg p-4">
        <div>
          <h1 className="text-3xl sm:text-5xl text-center text-yellow-200 align-middle font-serif font-bold">
            Trivia Trove
          </h1>
          <p className="text-yellow-200 align-middle font-semibold text-md">
            Discover a treasure trove of captivating trivia on Trivia Trove,
            where you can explore quizzes covering diverse subjects. Put your
            knowledge to the test with challenging questions and uncover obscure
            facts! Start by selecting a category below!
          </p>
        </div>
        <div className="flex flex-col items-center">
          {/* TODO: this is a placeholder test for updating the category */}
          <p className="text-yellow-200 text-md">
            Current category: {category}
          </p>
          {/* ^^^ TO BE REMOVED ^^^ */}
          <p className="text-yellow-200 text-md">Go to:</p>
          <div>
            <button
              className="bg-green-400 text-green-700 w-52 h-8 rounded-lg m-2 hover:bg-green-500 transition-colors "
              onClick={firstSection}
            >
              General & Sciences
            </button>
            <button
              className="bg-purple-400 text-purple-700 w-52 h-8 rounded-lg m-2 hover:bg-purple-500 transition-colors"
              onClick={secondSection}
            >
              Entertainment
            </button>
          </div>
        </div>

        <>
          {section ? (
            <GeneralCategory onCategoryUpdate={updateCategory} />
          ) : (
            <EntertainmentCategory onCategoryUpdate={updateCategory} />
          )}
        </>
      </div>
    </main>
  );
}
