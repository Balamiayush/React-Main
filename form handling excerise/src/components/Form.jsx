import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ handleSubmitData }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmitData = (data) => {
    handleSubmitData(data);
    reset();
  };

  return (
    <div className="mt-10 flex gap-10 justify-center">
      <form className="flex gap-10" onSubmit={handleSubmit(onSubmitData)}>
        <input
          {...register("name")}
          type="text"
          className=" rounded-md px-2 py-1 text-base font-semibold outline-none "
          placeholder="Name"
        />
        <input
          {...register("email")}
          type="email"
          className=" rounded-md px-2 py-1 text-base font-semibold outline-none "
          placeholder="Email"
        />
        <input
          {...register("image")}
          type="text"
          className=" rounded-md px-2 py-1 text-base font-semibold outline-none "
          placeholder="Image url"
        />
        <input
          type="submit"
          className="px-2 py-1 bg-blue-600 rounded-md cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Form;
