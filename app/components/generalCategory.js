import React from "react";
import { useState } from "react";

export default function GeneralCategory({ onCategoryUpdate }) {
  const [selection, setSelection] = useState("");

  const handleSelection = (value) => {
    setSelection(value);
  };

  // TODO: Add onClick function to each buttons

  return (
    <div className="my-4 h-2/5 md:h-4/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-auto">
      {/* General Knowledge = 9 */}
      <div
        className="flex flex-col justify-between bg-green-400 rounded-md h-32 p-2 cursor-pointer hover:bg-green-500 transition-colors"
        onClick={() => onCategoryUpdate("General Knowledge")}
      >
        <div>
          <p className="text-xl text-green-800 underline">General Knowledge</p>
          <p className="text-sm text-green-700">
            Test your broad knowledge across a wide range of topics with
            questions that cover everything from history to pop culture.
          </p>
        </div>
        <div className="text-right text-sm text-green-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Science & Nature = 17 */}
      <div
        className="flex flex-col justify-between bg-green-400 rounded-md h-32 p-2 cursor-pointer hover:bg-green-500 transition-colors"
        onClick={() => onCategoryUpdate("Science & Nature")}
      >
        <div>
          <p className="text-xl text-green-800 underline">Science & Nature</p>
          <p className="text-sm text-green-700">
            Dive into the wonders of the natural world and explore scientific
            phenomena from biology to astronomy.
          </p>
        </div>
        <div className="text-right text-sm text-green-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Science: Computers = 18*/}
      <div
        className="flex flex-col justify-between bg-green-400 rounded-md h-32 p-2 cursor-pointer hover:bg-green-500 transition-colors"
        onClick={() => onCategoryUpdate("Science: Computers")}
      >
        <div>
          <p className="text-xl text-green-800 underline">Science: Computers</p>
          <p className="text-sm text-green-700">
            Explore the realm of technology with questions about computers,
            programming, and the digital world.
          </p>
        </div>
        <div className="text-right text-sm text-green-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Science: Mathematics = 19 */}
      <div className="flex flex-col justify-between bg-green-400 rounded-md h-32 p-2 cursor-pointer hover:bg-green-500 transition-colors">
        <div>
          <p className="text-xl text-green-800 underline">
            Science: Mathematics
          </p>
          <p className="text-sm text-green-700">
            Challenge your mathematical prowess with questions covering
            arithmetic, algebra, geometry, and beyond.
          </p>
        </div>
        <div className="text-right text-sm text-green-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Mythology = 20 */}
      <div className="flex flex-col justify-between bg-green-400 rounded-md h-32 p-2 cursor-pointer hover:bg-green-500 transition-colors">
        <div>
          <p className="text-xl text-green-800 underline">Mythology</p>
          <p className="text-sm text-green-700">
            Delve into ancient legends and myths from cultures around the world,
            from Greek gods to Norse mythology.
          </p>
        </div>
        <div className="text-right text-sm text-green-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Sports = 21 */}
      <div className="flex flex-col justify-between bg-green-400 rounded-md h-32 p-2 cursor-pointer hover:bg-green-500 transition-colors">
        <div>
          <p className="text-xl text-green-800 underline">Sports</p>
          <p className="text-sm text-green-700">
            Put your sports knowledge to the test with questions covering a wide
            range of athletic disciplines and historical moments.
          </p>
        </div>
        <div className="text-right text-sm text-green-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Geography = 22 */}
      <div className="flex flex-col justify-between bg-green-400 rounded-md h-32 p-2 cursor-pointer hover:bg-green-500 transition-colors">
        <div>
          <p className="text-xl text-green-800 underline">Geography</p>
          <p className="text-sm text-green-700">
            Explore the world's diverse landscapes, cultures, and landmarks with
            questions about countries, cities, and more.
          </p>
        </div>
        <div className="text-right text-sm text-green-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* History = 23 */}
      <div className="flex flex-col justify-between bg-green-400 rounded-md h-32 p-2 cursor-pointer hover:bg-green-500 transition-colors">
        <div>
          <p className="text-xl text-green-800 underline">History</p>
          <p className="text-sm text-green-700">
            Journey through the annals of time and test your knowledge of
            significant events, people, and eras from the past.
          </p>
        </div>
        <div className="text-right text-sm text-green-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Politics = 24 */}
      <div className="flex flex-col justify-between bg-green-400 rounded-md h-32 p-2 cursor-pointer hover:bg-green-500 transition-colors">
        <div>
          <p className="text-xl text-green-800 underline">Politics</p>
          <p className="text-sm text-green-700">
            Engage in questions about government systems, political figures, and
            current affairs shaping the world today.
          </p>
        </div>
        <div className="text-right text-sm text-green-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Art = 25 */}
      <div className="flex flex-col justify-between bg-green-400 rounded-md h-32 p-2 cursor-pointer hover:bg-green-500 transition-colors">
        <div>
          <p className="text-xl text-green-800 underline">Art</p>
          <p className="text-sm text-green-700">
            Appreciate the beauty and creativity of artistic expression with
            questions about famous artists, artworks, and art history.
          </p>
        </div>
        <div className="text-right text-sm text-green-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Celebrities = 26 */}
      <div className="flex flex-col justify-between bg-green-400 rounded-md h-32 p-2 cursor-pointer hover:bg-green-500 transition-colors">
        <div>
          <p className="text-xl text-green-800 underline">Celebrities</p>
          <p className="text-sm text-green-700">
            Test your knowledge of the entertainment world with questions about
            famous actors, musicians, and personalities.
          </p>
        </div>
        <div className="text-right text-sm text-green-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Animals = 27 */}
      <div className="flex flex-col justify-between bg-green-400 rounded-md h-32 p-2 cursor-pointer hover:bg-green-500 transition-colors">
        <div>
          <p className="text-xl text-green-800 underline">Animals</p>
          <p className="text-sm text-green-700">
            Explore the animal kingdom and learn fascinating facts about
            creatures big and small from around the globe.
          </p>
        </div>
        <div className="text-right text-sm text-green-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Vehicles = 28 */}
      <div className="flex flex-col justify-between bg-green-400 rounded-md h-32 p-2 cursor-pointer hover:bg-green-500 transition-colors">
        <div>
          <p className="text-xl text-green-800 underline">Vehicles</p>
          <p className="text-sm text-green-700">
            Rev up your engines and answer questions about cars, planes, trains,
            and other modes of transportation.
          </p>
        </div>
        <div className="text-right text-sm text-green-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Science: Gadgets = 30 */}
      <div className="flex flex-col justify-between bg-green-400 rounded-md h-32 p-2 cursor-pointer hover:bg-green-500 transition-colors">
        <div>
          <p className="text-lg text-green-800 underline">Science: Gadgets</p>
          <p className="text-sm text-green-700">
            Discover the latest in technological innovations and gadgets with
            questions about electronics, inventions, and advancements.
          </p>
        </div>
        <div className="text-right text-sm text-green-600">
          <p>Press to select!</p>
        </div>
      </div>
    </div>
  );
}
