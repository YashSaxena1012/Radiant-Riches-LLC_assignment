import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex justify-center items-center py-3 w-full bg-black">
      <div className="hidden md:flex gap-5 justify-center w-full">
        <div className="flex ">
          <FiSearch className="text-xl bg-white w-10 h-10 p-3 rounded -mr-2" />
          <input
            type="search"
            name="search"
            className="rounded py-1 outline-none border-none px-2"
          />
        </div>
        <div className="flex gap-10 ml-20 justify-between my-auto text-sm leading-5 text-gray-300">
          <div className="cursor-pointer duration-200 hover:font-medium hover:scale-105">
            Categories
          </div>
          <div className="cursor-pointer duration-200 hover:font-medium hover:scale-105">
            Website Builders
          </div>
          <div className="cursor-pointer duration-200 hover:font-medium hover:scale-105">
            Today's deals
          </div>
        </div>
      </div>
      <div className="md:hidden flex gap-10 w-full px-8">
        <div className="flex">
          <FiSearch className="text-xl bg-white w-10 h-10 p-3 rounded -mr-2" />
          <input
            type="search"
            name="search"
            className="rounded py-1 outline-none border-none px-2"
          />
        </div>
        <button className="p-2 text-white text-2xl" onClick={() => setToggle(!toggle)}>
          {toggle ? <RxCross1 /> : <IoMdMenu />}
        </button>
        {toggle && (
          <div className="flex gap-8 absolute bg-black top-16 left-0 w-full p-4 flex-wrap text-white">
            <div className="cursor-pointer duration-200 hover:font-medium hover:scale-105">
              Categories
            </div>
            <div className="cursor-pointer duration-200 hover:font-medium hover:scale-105">
              Website Builders
            </div>
            <div className="cursor-pointer duration-200 hover:font-medium hover:scale-105">
              Today's deals
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
