import React from "react";

const LoadingPage = () => {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-base-200">
        <div className="flex flex-col items-center gap-4">
          {/* DaisyUI Spinner */}
          <span className="loading loading-spinner loading-lg text-primary"></span>

          {/* Text */}
          <h1 className="text-2xl font-bold text-base-content">Loading...</h1>

          {/* Progress Bar */}
          {/* <progress className="progress progress-primary w-56"></progress> */}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
