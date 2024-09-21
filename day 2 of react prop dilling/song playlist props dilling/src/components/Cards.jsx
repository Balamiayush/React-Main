import React from "react";

const Cards = ({artist,image,title,added,handleAdded,index}) => {
  return (
   
      <div className="w-52 p-3 rounded-2xl  flex flex-col gap-5 overflow-hidden capitalize ">
        <div className="w-full h-40">
          <img
            src={image}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">Artist:{artist}</h2>

          <p className="text-sm text-gray-500">Title:{title}</p>
          <button onClick={()=>handleAdded(index)} className={`px-3 py-1  ${added? "bg-sky-500" : "bg-orange-600"} text-white rounded-md`}>
            {added? "Added" : "Add to Favourites"}
          </button>
        </div>
      </div>
    
  );
};

export default Cards;
