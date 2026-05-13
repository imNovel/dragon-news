"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LogInPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isVisible, setIsVisible] = useState(false);

  const handleLoginFunc = async (data) => {
    console.log(data);

    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(res, error);
  };
  console.log(watch("email"));
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-2xl text-center">Login Your Account</h2>

        <form className="space-y-2" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email address</legend>
            <input
              type="email"
              {...register("email", { required: "Email required" })}
              className="input"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isVisible ? "text" : "password"}
              {...register("password", { required: "Please enter a password" })}
              className="input"
              placeholder="Enter your password"
            />
            <span
              className="absolute right-2 top-4"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>
        <p className="mt-3">
          Don't Have an Account?{" "}
          <Link href={"/register"} className="text-blue-500">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LogInPage;
