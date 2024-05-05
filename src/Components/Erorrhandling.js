import React from "react";
import { Link } from "react-router-dom";

function Erorrhandling() {
  return (
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 class="text-5xl text-gray-800 font-bold mb-8">Page Not Found</h1>
      <div class="bg-white shadow-md rounded-lg p-6 max-w-md">
        <p class="text-lg text-gray-700">
          Oops! It seems like you've stumbled upon a page that doesn't exist.
        </p>
        <p class="text-lg text-gray-700">
          But don't worry, let's get you back on track.
        </p>
        <Link
          to="/"
          class="mt-6 inline-block px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 book"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default Erorrhandling;
