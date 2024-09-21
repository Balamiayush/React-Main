import React, { useState } from "react";
import Cards from "./components/Cards";
const App = () => {
  const data = [
    {
      name: "Aayush",
      image:
        "https://i.pinimg.com/564x/f0/19/0e/f0190e4bac7a39672da2439f48d1e0f2.jpg",
      work: "Developer",
      salary: "$2000",
      friends: false,
    },
    {
      name: "Sophia",
      image:
        "https://i.pinimg.com/736x/cf/7a/68/cf7a6843219b9cd59397abb90df4edf6.jpg",
      work: "Designer",
      salary: "$2200",
      friends: false,
    },
    {
      name: "Liam",
      image:
        "https://i.pinimg.com/736x/3a/61/e8/3a61e814aaa534b27c4ed2abcde516aa.jpg",
      work: "Project Manager",
      salary: "$2500",
      friends: false,
    },
    {
      name: "Olivia",
      image:
        "https://i.pinimg.com/564x/35/3b/e8/353be88dac5a0385ad8ffb26b5b6727b.jpg",
      work: "Content Writer",
      salary: "$1800",
      friends: false,
    },

    {
      name: "Emma",
      image:
        "https://i.pinimg.com/564x/dd/57/35/dd5735f5a0a24d63924a8e0255252426.jpg",
      work: "Data Analyst",
      salary: "$2300",
      friends: false,
    },
  ];
  const [realdata, setRealData] = useState(data);

  const handleFriendsFilter = (cardindex) => {
    setRealData((prev)=>
      {
      const newdata = [...prev];
      newdata[cardindex].friends =!newdata[cardindex].friends;
      return newdata;
    })
  };
  return (
    <div className="w-full h-screen flex items-center justify-center gap-5">
      {data.map((person, index) => (
        <Cards
          index={index}
          key={index}
          friends={person.friends}
          name={person.name}
          image={person.image}
          work={person.work}
          salary={person.salary}
          handleFriendsFilter={handleFriendsFilter}
        />
      ))}
    </div>
  );
};

export default App;
