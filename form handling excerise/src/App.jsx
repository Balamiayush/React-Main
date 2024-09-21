import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

const App = () => {
 const [users,setUsers] = useState([])
 const handleSubmitData=(data)=>{
   setUsers([...users, data])
   console.log(users)  // for testing purpose only, in real scenario you should handle the data accordingly  (like saving it to a database or sending it to a server)  //  data: {name: "John Doe", email: "john.doe@example.com"}  // replace with your actual data structure  //  const { name, email } = data;  //  setName(name);  //  setEmail(email);  //  resetForm
  }
  const deletingData=(id)=>{
    setUsers(()=>users.filter((_,index)=>index!=id  ))
  }
  return (
    <div className="w-full h-screen flex items-center justify-center bg-zinc-500">
      <div className="container mx-auto">
        <Cards users={users} deletingData={deletingData} />
        <Form handleSubmitData={handleSubmitData}  />
      </div>
    </div>
  );
};

export default App;
