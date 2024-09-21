import React from "react";

const Added = ({ songs, handleAdded }) => {
  return (
    <div className="w-[25%] h-[90%] absolute right-0 bg-orange-400 rounded-3xl">
      {songs
        .filter((item) => item.added)
        .map((song, index) => (
          <div
            key={index} // Provide a unique key for each mapped element
            className="w-40 p-3 rounded-2xl  gap-5 overflow-hidden capitalize"
          >
            <div className="w-full h-40">
              <img
                src={song.image} // Use song.image
                alt={song.title} // Add an alt tag for the image
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">Artist: {song.artist}</h2>
              <p className="text-sm text-gray-500">Title: {song.title}</p>
              <button
                onClick={() => handleAdded(index)} // Call the handleAdded function
                className={`px-3 py-1 ${
                  song.added ? "bg-sky-500" : "bg-orange-600"
                } text-white rounded-md`}
              >
                {song.added ? "Added" : "Add to Favourites"}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Added;
