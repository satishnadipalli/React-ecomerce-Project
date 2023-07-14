import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-y-3">
      <h1 className="text-[#6666ff] text-7xl md:text-9xl font-semibold">404</h1>
      <h1 className="text-[#333300] text-xl md:text-3xl font-semibold">
        Not Found
      </h1>
      <Link
        className="py-1 px-2 bg-[#6666ff] rounded-md text-white text-base md:text-xl"
        to="/"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
