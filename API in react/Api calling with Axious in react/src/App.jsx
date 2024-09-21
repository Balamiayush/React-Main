import axios from "axios";
import React, { useEffect } from "react";

const App = () => {
  //API is the link (Application Programming Interface) whcih is called to take the anything by backend
  const API = `https://fakestoreapi.com/products/1`;
  //useEffect is a hook which will run after the component mounts
  useEffect(() => {
    axios.get(API).then((res) => {
      console.log(res); //print the data received from the API in
    });
  }, []);

  return <div>
    <h1>Hello, World!</h1>
    <p>Welcome to the React App!</p>
    <img src='' alt="Placeholder" />
    <p>This is a sample API call using Axios in React.</p>
    <p>API response: {JSON.stringify(API)}</p>
    <p>API data: {JSON.stringify(API)}</p>
    <p>API status: {JSON.stringify(API)}</p>
    <p>API headers: {JSON.stringify(API)}</p>
    <p>API config: {JSON.stringify(API)}</p>
    <p>API cancel token: {JSON.stringify(API)}</p>
    <p>API instance: {JSON.stringify(API)}</p>
    <p>API request: {JSON.stringify(API)}</p>
  </div>;
};

export default App;
