import React, { useState } from "react";
import Added from "./Added";

const Navbar = ({ songs }) => {
  const [fav, setFav] = useState(false);

  const handleFav = () => {
    setFav(!fav);
  };
  return (
    <div className="">
      <div className="w-full flex justify-center overflow-hidden    p-4">
        <div className="w-full h-full flex  justify-around items-center ">
          <h1 className="text-xl font-bold">Songs</h1>
          <button
            onClick={handleFav}
            className="text-white font-semibold bg-orange-500 px-3 py-2 rounded-full "
          >
            Favourites ({songs.filter((item) => item.added).length})
          </button>
        </div>
      </div>
      {fav && <Added songs={songs} />}
    </div>
  );
};

export default Navbar;
