"use client";

import React, { useState } from "react";
import GeneralCategory from "./components/generalCategory";
import EntertainmentCategory from "./components/entertainmentCategory";
import CustomizeCategory from "./components/customizeCategory";
import QuizPage from "./components/quizPage";

export default function Home() {
  const [mainScreen, setMainScreen] = useState(true);

  const [section, setSection] = useState(true);
  const [categorySelected, setCategorySelected] = useState(false);

  // API values
  const [category, setCategory] = useState(0);
  const [amount, setAmount] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");

  const updateCategory = (newCategory) => {
    setCategory(newCategory);
    setCategorySelected(true);
  };

  const updateAmount = (newAmount) => {
    setAmount(parseInt(newAmount.target.value));
  };

  const updateDifficulty = (newDifficulty) => {
    setDifficulty(newDifficulty.target.value);
  };

  const updateType = (newType) => {
    setType(newType.target.value);
  };

  const navigateBack = () => {
    setCategorySelected(false);
    setCategory(0);
    setAmount(0);
    setDifficulty("");
    setType("");
    setMainScreen(true);
  };

  return (
    <>
      {mainScreen ? (
        <main className="bg-gray-300 flex justify-center py-4 h-screen w-screen overflow-auto">
          <div className="w-10/12 h-11/12 bg-gray-700 drop-shadow-md rounded-lg p-4">
            <div>
              <h1 className="text-3xl sm:text-5xl text-center text-yellow-200 align-middle font-serif font-bold">
                Trivia Trove
              </h1>
              <p className="text-yellow-200 align-middle font-semibold text-md">
                Discover a treasure trove of captivating trivia on Trivia Trove,
                where you can explore quizzes covering diverse subjects. Put
                your knowledge to the test with challenging questions and
                uncover obscure facts! Start by selecting a category below!
              </p>
            </div>
            <div className="flex flex-col items-center">
              {/* TODO: this is a placeholder test for updating the API values */}
              <p className="text-yellow-200 text-md">
                Current category: {category}
                <br />
                Current amount: {amount}
                <br />
                Current difficulty: {difficulty}
                <br />
                Current type: {type}
              </p>
              {/* ^^^ TO BE REMOVED ^^^ */}
            </div>

            <>
              {categorySelected ? (
                <>
                  <CustomizeCategory
                    navigateBack={navigateBack}
                    navigateQuiz={() => {
                      setMainScreen(false);
                    }}
                    updateAmount={updateAmount}
                    updateDifficulty={updateDifficulty}
                    updateType={updateType}
                  />
                </>
              ) : (
                <div>
                  <div className="flex flex-col items-center">
                    <p className="text-yellow-200 text-md">Go to:</p>
                    <div>
                      <button
                        className="bg-green-400 text-green-700 w-52 h-8 rounded-lg m-2 hover:bg-green-500 transition-colors "
                        onClick={() => setSection(true)}
                      >
                        General & Sciences
                      </button>
                      <button
                        className="bg-purple-400 text-purple-700 w-52 h-8 rounded-lg m-2 hover:bg-purple-500 transition-colors"
                        onClick={() => setSection(false)}
                      >
                        Entertainment
                      </button>
                    </div>
                  </div>

                  <>
                    {section ? (
                      <GeneralCategory onCategoryUpdate={updateCategory} />
                    ) : (
                      <EntertainmentCategory
                        onCategoryUpdate={updateCategory}
                      />
                    )}
                  </>
                </div>
              )}
            </>
          </div>
        </main>
      ) : (
        <QuizPage
          // navigateQuiz={() => setMainScreen(true)}
          navigateQuiz={navigateBack}
          amount={amount}
          catNum={category}
          difficulty={difficulty}
          type={type}
        />
      )}
    </>
  );
}
