import React from "react";

export default function EntertainmentCategory({ onCategoryUpdate }) {
  // TODO: Add onClick function to each buttons

  return (
    <div className="my-4 h-2/5 md:h-4/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-auto">
      {/* Books = 10 */}
      <div
        className="flex flex-col justify-between bg-purple-400 rounded-md h-32 p-2 cursor-pointer hover:bg-purple-500 transition-colors"
        onClick={() => onCategoryUpdate("Books")}
      >
        <div>
          <p className="text-xl text-purple-800 underline">Books</p>
          <p className="text-sm text-purple-700">
            Immerse yourself in the world of literature with questions about
            classic novels, beloved authors, and literary genres.
          </p>
        </div>
        <div className="text-right text-sm text-purple-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Film = 11 */}
      <div
        className="flex flex-col justify-between bg-purple-400 rounded-md h-32 p-2 cursor-pointer hover:bg-purple-500 transition-colors"
        onClick={() => onCategoryUpdate("Film")}
      >
        <div>
          <p className="text-xl text-purple-800 underline">Film</p>
          <p className="text-sm text-purple-700">
            Lights, camera, action! Test your knowledge of the silver screen
            with questions about iconic movies, directors, and cinematic
            history.
          </p>
        </div>
        <div className="text-right text-sm text-purple-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Music = 12 */}
      <div
        className="flex flex-col justify-between bg-purple-400 rounded-md h-32 p-2 cursor-pointer hover:bg-purple-500 transition-colors"
        onClick={() => onCategoryUpdate("Music")}
      >
        <div>
          <p className="text-xl text-purple-800 underline">Music</p>
          <p className="text-sm text-purple-700">
            Tune into questions about your favorite tunes, artists, genres, and
            music history from around the globe.
          </p>
        </div>
        <div className="text-right text-sm text-purple-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Musicals and Theatres = 13 */}
      <div className="flex flex-col justify-between bg-purple-400 rounded-md h-32 p-2 cursor-pointer hover:bg-purple-500 transition-colors">
        <div>
          <p className="text-xl text-purple-800 underline">
            Musicals and Theatres
          </p>
          <p className="text-sm text-purple-700">
            Experience the magic of Broadway and beyond with questions about
            beloved musicals, theater productions, and stage performances.
          </p>
        </div>
        <div className="text-right text-sm text-purple-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Television = 14 */}
      <div className="flex flex-col justify-between bg-purple-400 rounded-md h-32 p-2 cursor-pointer hover:bg-purple-500 transition-colors">
        <div>
          <p className="text-xl text-purple-800 underline">Television</p>
          <p className="text-sm text-purple-700">
            From sitcoms to dramas, reality TV to documentaries, answer
            questions about the small screen's most memorable moments and
            characters.
          </p>
        </div>
        <div className="text-right text-sm text-purple-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Video Games = 15 */}
      <div className="flex flex-col justify-between bg-purple-400 rounded-md h-32 p-2 cursor-pointer hover:bg-purple-500 transition-colors">
        <div>
          <p className="text-xl text-purple-800 underline">Video Games</p>
          <p className="text-sm text-purple-700">
            Level up your gaming knowledge with questions about popular video
            game franchises, consoles, and gaming history.
          </p>
        </div>
        <div className="text-right text-sm text-purple-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Board Games = 16 */}
      <div className="flex flex-col justify-between bg-purple-400 rounded-md h-32 p-2 cursor-pointer hover:bg-purple-500 transition-colors">
        <div>
          <p className="text-xl text-purple-800 underline">Board Games</p>
          <p className="text-sm text-purple-700">
            Roll the dice and answer questions about classic board games,
            strategy games, and tabletop favorites.
          </p>
        </div>
        <div className="text-right text-sm text-purple-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Comics = 29 */}
      <div className="flex flex-col justify-between bg-purple-400 rounded-md h-32 p-2 cursor-pointer hover:bg-purple-500 transition-colors">
        <div>
          <p className="text-xl text-purple-800 underline">Comics</p>
          <p className="text-sm text-purple-700">
            Dive into the colorful world of comic books with questions about
            superheroes, graphic novels, and iconic comic book creators.
          </p>
        </div>
        <div className="text-right text-sm text-purple-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Japanese Anime & Manga = 31 */}
      <div className="flex flex-col justify-between bg-purple-400 rounded-md h-32 p-2 cursor-pointer hover:bg-purple-500 transition-colors">
        <div>
          <p className="text-xl text-purple-800 underline">
            Japanese Anime & Manga
          </p>
          <p className="text-sm text-purple-700">
            Explore the vibrant world of Japanese animation and manga with
            questions about popular series, characters, and creators.
          </p>
        </div>
        <div className="text-right text-sm text-purple-600">
          <p>Press to select!</p>
        </div>
      </div>
      {/* Cartoons & Animations = 32 */}
      <div className="flex flex-col justify-between bg-purple-400 rounded-md h-32 p-2 cursor-pointer hover:bg-purple-500 transition-colors">
        <div>
          <p className="text-xl text-purple-800 underline">
            Cartoons & Animations
          </p>
          <p className="text-sm text-purple-700">
            From Saturday morning classics to modern animated hits, answer
            questions about your favorite animated series and characters.
          </p>
        </div>
        <div className="text-right text-sm text-purple-600">
          <p>Press to select!</p>
        </div>
      </div>
    </div>
  );
}
