import React from "react";
import Card from "./Card";
const Cards = ({ users ,deletingData,id}) => {
  return (
    <div className="w-full flex  justify-center gap-4 flex-wrap max-h-72 overflow-auto h-[32vh] ">
      {users.map((items, index) => {
        return <Card key={index} id={index}  user={items} deletingData={deletingData} />;
      })}
    </div>
  );
};

export default Cards;
