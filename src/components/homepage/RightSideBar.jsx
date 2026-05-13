"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBar = () => {
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log("google", data);
  };
  const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log("github", data);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Login With</h2>
      <div className="flex flex-col gap-2">
        <button
          className="btn border-blue-500 text-blue-500"
          onClick={handleGoogleSignIn}
        >
          {" "}
          <FaGoogle /> Login with Google
        </button>
        <button className="btn" onClick={handleGithubSignIn}>
          {" "}
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
