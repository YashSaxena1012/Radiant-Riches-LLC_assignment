import React, { useEffect } from "react";
export default function Newsletter(props) {
  return (
    <div className="py-12 pr-5 pl-2 mt-9 w-3/5 m-auto">
      <div className="flex justify-between lg:flex-row flex-col gap-4">
        <div className="text-xl sm:text-3xl text-gray-500 text-center md:text-start">
            Sign up and get exclusive special deals
          </div>
        <div className="flex gap-0 w-10/12 lg:w-3/5 text-center">
          <input
            type="text"
            className="md:w-11/12 text-black h-12 px-2 rounded"
          />
          <button className="rounded-r-lg px-4 h-12 text-white bg-blue-500 hover:scale-105 hover:bg-blue-600 duration-200">
            Sign Up
          </button>
        </div>
      </div>
    </div>
    
  );
}
