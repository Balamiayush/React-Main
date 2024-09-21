import axios from "axios";
import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import User from "./components/User";

const App = () => {
  const Api = `https://api.github.com/users/{username}`;
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const handleSubmitData = (data) => {
      setUsername(data.username);
      console.log(username);
  
  };
  const handleSearch= async ()=>{
   try{
     const response= await axios.get(Api.replace("{username}",username));
     setUserData(response.data);
   }
   catch(error){
     console.error("Error fetching data",error);
     setUserData(null);
   }
  }
  return (
    <div className="w-full h-screen p-4 bg-zinc-500 flex flex-col">
      <h1 className="text-center text-5xl font-mono ">Github Users</h1>
      <Input handleSubmitData={handleSubmitData} handleSearch={handleSearch} />
      {userData && <User user={userData} />}
    </div>
  );
};

export default App;
