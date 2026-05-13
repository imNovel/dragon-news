"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isVisible, setIsVisible] = useState(false);
  const handleRegisterFunc = async (data) => {
    // console.log(data);
    const { email, name, photo, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });
    console.log(res, error, "register");
    if (error) {
      alert(error.message);
    }

    if (res) {
      alert("Registered Successful");
    }
  };
  console.log(watch("email"));
  console.log(watch("password"));
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-2xl text-center">
          Register Your Account
        </h2>

        <form className="space-y-2" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Name</legend>
            <input
              type="text"
              {...register("name", { required: "Name required" })}
              className="input"
              placeholder="Enter your Name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              {...register("photo", { required: "Photo URL is Required" })}
              className="input"
              placeholder="Enter Photo URL"
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>
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
         <button className="btn w-full bg-slate-800 text-white">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
