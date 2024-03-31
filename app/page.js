"use client";

import React, { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState(true);

  const goToGeneral = () => {
    setCategory(true);
  };

  const goToEntertainment = () => {
    setCategory(false);
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
          <p className="text-yellow-200 text-md">Go to:</p>
          <div>
            <button
              className="bg-green-400 text-green-700 w-52 h-8 rounded-lg m-2 hover:bg-green-500 transition-colors "
              onClick={goToGeneral}
            >
              General & Sciences
            </button>
            <button
              className="bg-purple-400 text-purple-700 w-52 h-8 rounded-lg m-2 hover:bg-purple-500 transition-colors"
              onClick={goToEntertainment}
            >
              Entertainment
            </button>
          </div>
        </div>

        <>
          {category ? (
            <div className="my-4 h-2/5 md:h-4/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-auto">
              <div className="flex flex-col justify-between bg-green-400 rounded-md h-32 p-2 cursor-pointer hover:bg-green-500 transition-colors">
                <div>
                  <p className="text-xl text-green-700">Category title here!</p>
                  <p className="text-sm text-green-700">
                    Brief category description
                  </p>
                </div>
                <div className="text-right text-sm text-green-700">
                  <p>Press to select!</p>
                </div>
              </div>
              <div className="flex flex-col justify-between bg-green-400 rounded-md h-32 p-2 cursor-pointer hover:bg-green-500 transition-colors">
                <div>
                  <p className="text-xl text-green-700">Category title here!</p>
                  <p className="text-sm text-green-700">
                    Brief category description
                  </p>
                </div>
                <div className="text-right text-sm text-green-700">
                  <p>Press to select!</p>
                </div>
              </div>
              <div className="flex flex-col justify-between bg-green-400 rounded-md h-32 p-2 cursor-pointer hover:bg-green-500 transition-colors">
                <div>
                  <p className="text-xl text-green-700">Category title here!</p>
                  <p className="text-sm text-green-700">
                    Brief category description
                  </p>
                </div>
                <div className="text-right text-sm text-green-700">
                  <p>Press to select!</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="my-4 h-2/5 md:h-4/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-auto">
              <div className="flex flex-col justify-between bg-purple-400 rounded-md h-32 p-2 cursor-pointer hover:bg-purple-500 transition-colors">
                <div>
                  <p className="text-xl text-purple-700">
                    Category title here!
                  </p>
                  <p className="text-sm text-purple-700">
                    Brief category description
                  </p>
                </div>
                <div className="text-right text-sm text-purple-700">
                  <p>Press to select!</p>
                </div>
              </div>
              <div className="flex flex-col justify-between bg-purple-400 rounded-md h-32 p-2 cursor-pointer hover:bg-purple-500 transition-colors">
                <div>
                  <p className="text-xl text-purple-700">
                    Category title here!
                  </p>
                  <p className="text-sm text-purple-700">
                    Brief category description
                  </p>
                </div>
                <div className="text-right text-sm text-purple-700">
                  <p>Press to select!</p>
                </div>
              </div>
            </div>
          )}
        </>
      </div>
    </main>
  );
}
