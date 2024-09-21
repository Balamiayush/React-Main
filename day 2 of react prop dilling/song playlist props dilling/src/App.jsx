import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

const App = () => {
  const data = [
    {
      artist: "Aayush",
      image:
        "https://i.pinimg.com/564x/f0/19/0e/f0190e4bac7a39672da2439f48d1e0f2.jpg",

      friends: false,
      title: "hello world",
    },
    {
      artist: "Sophia",
      image:
        "https://i.pinimg.com/736x/cf/7a/68/cf7a6843219b9cd59397abb90df4edf6.jpg",

      added: false,
      title: "Kun Faya Kun",
    },
    {
      artist: "Liam",
      image:
        "https://i.pinimg.com/736x/3a/61/e8/3a61e814aaa534b27c4ed2abcde516aa.jpg",

      added: false,
      title: "Rockstar",
    },
    {
      artist: "Olivia",
      image:
        "https://i.pinimg.com/564x/35/3b/e8/353be88dac5a0385ad8ffb26b5b6727b.jpg",

      added: false,
      title: "millioners",
    },

    {
      artist: "Emma",
      image:
        "https://i.pinimg.com/564x/dd/57/35/dd5735f5a0a24d63924a8e0255252426.jpg",

      added: false,
      title: "tentaions",
    },
  ];

  const [Songdata, setSongdata] = useState(data);
  const handleAdded = (key) => {
    setSongdata((prev) => {
      return prev.map((_, index) => {
        if (index === key) {
          return { ...prev[index], added: !prev[index].added };
        }
        return prev[index];
      });
    });
  };
  
  return (
    <div className="w-full h-screen bg-zinc-300 overflow-hidden ">
      <Navbar songs={Songdata} />
      <div className="flex items-center justify-center w-full">
        {Songdata.map((song, index) => (
          <Cards
            key={index}
            index={index}
            artist={song.artist}
            image={song.image}
            added={song.added}
            title={song.title}
            handleAdded={handleAdded}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
