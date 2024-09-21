import React from "react";

const Cards = ({ name, salary, work, image, friends, handleFriendsFilter, index }) => {
  return (
    <div className="w-52 p-3 rounded-2xl flex flex-col gap-5 overflow-hidden">
      <div className="w-full h-40">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-md" />
      </div>
      <div>
        <h2 className="text-xl font-bold">Name: {name}</h2>
        <p className="text-sm">Work: {work}</p>
        <p className="text-sm text-gray-500">Salary: {salary}</p>
        <button
          className="px-3 py-1 bg-sky-500 text-white rounded-md"
          onClick={() => handleFriendsFilter(index)}
        >
          {friends ? "Friend" : "Add Friend"}
        </button>
      </div>
    </div>
  );
};

export default Cards;
