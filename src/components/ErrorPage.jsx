import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/error.jpeg"

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <img
          src={img}
          alt="404 Error"
          className="w-72 h-72 mx-auto mb-8 rounded-full"
        />
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4">
          Oops! Page not found.
        </p>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>
        <Link to="/">
          <button className="btn btn-primary mt-6 px-6 py-3 text-lg font-bold">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
