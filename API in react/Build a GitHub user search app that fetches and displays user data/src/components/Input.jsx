import React from "react";
import { useForm } from "react-hook-form";

const Input = ({handleSubmitData,handleSearch}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) =>{
    handleSubmitData(data);


  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex gap-5 items-center justify-center mt-10">
      <div className="w-full max-w-sm min-w-[200px]">
        <div className="relative">
          <input
          {...register("username", { required: true })}
            type="text"
            className="w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-black text-xl font-semibold border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Enter User Name..."
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute w-5 h-5 top-2.5 right-2.5 text-slate-600"
          >
            <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
          </svg>
        </div>
      </div>
    <button onClick={handleSearch} type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
        Search
      </button> 
    
    
    </form>
  );
};

export default Input;
