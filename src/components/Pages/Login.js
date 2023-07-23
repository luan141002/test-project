import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <div className="flex justify-center items-center h-full ">
        <form
          className="max-w-[30%] w-full mx-auto bg-white p-8 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-4xl font-bold text-center py-4 ">Login Form</h2>
          <div className="flex flex-col  gap-2">
            <label>Username</label>
            <input
              className="border relative bg-gray-100 py-3 pl-2"
              type="email"
              {...register("Username")}
              required
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label>Password</label>
            <input
              className="border relative bg-gray-100 py-3 pl-2 "
              type="password"
              min={8}
              {...register("Password")}
              required
            />
          </div>

          <button className="rounded-full w-full py-3 mt-8 font-normal bg-indigo-600 hover:bg-indigo-500 relative text-white">
            Sign In
          </button>
          <p className="flex items-center mt-2">
            <input className="mr-2" type="checkbox" />
            Remember Me
          </p>
          <p className="text-center mt-8">Not a member? Sign up now</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
