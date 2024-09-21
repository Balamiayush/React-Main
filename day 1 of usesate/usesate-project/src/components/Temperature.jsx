import React, { useState } from "react";

const Temperature = () => {
  const [cm, setCm] = useState(0);
  const [inch, setInch] = useState(null);
  const [swap,setSwap] = useState(true)

  const submitHandler = (e) => {
    e.preventDefault();
   
    if(swap){
      setInch(cm / 2.54).toFixed(4);
    }
    else{
      setCm(inch * 2.54).toFixed(4);
    }


  };
const swapHandler=()=>{
  setSwap(!swap)
}
  return (
    <div className="h-screen w-full bg-sky-500 p-5 flex flex-col items-center">
      <h2 className="text-5xl font-bold">Measurment Converter</h2>
      <form
        onClick={submitHandler}
        className="flex flex-col gap-5 items-center justify-center h-[500px]"
      >
        <label className="w-full text-xl font-semibold flex items-center flex-col">
          Enter temperature in {swap?'centimeter':'inch'}
          <input
            onChange={(e) => {
              setCm(e.target.value);
            }}
            type="number"
            id="centimeter"
            name="centimeter"
            className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          />
        </label>

        <label className="w-full text-xl font-semibold flex items-center flex-col">
        Enter temperature in {swap?'Inch':'Centimeter'}
          <input
            onChange={(e) => {
              setInch(e.target.value);
            }}
            type="number"
            id="Inch"
            name="Inch"
            className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          />
        </label>

        <button
          onClick={submitHandler}
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Convert
        </button>

        <button
        onClick={swapHandler}
          type="button"
          className="text-white bg-gradient-to-r from-green-400 via-blue-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Swap
        </button>
        <div className="text-2xl text-center">{swap?inch:cm}</div>
      </form>
    </div>
  );
};

export default Temperature;
