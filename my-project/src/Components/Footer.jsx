import React from "react";
import { IoChevronDownSharp } from "react-icons/io5";
export default function Footer() {
  return (
    <div className="flex justify-center items-center px-5 py-12 bg-gray-800">
      <div className="flex justify-around mt-2 mb-10 w-full flex-wrap">
        <div>
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/4 max-md:w-full">
              <div className="flex flex-col text-sm text-stone-300 mt-10">
                <div className="text-white uppercase">
                  Categories
                </div>
                <div className="mt-6">Web Builder</div>
                <div className="mt-8">Hosting</div>
                <div className="mt-7 text-sm leading-5">Data Center</div>
                <div className="mt-8">Robotic-Automation</div>
              </div>
            </div>
            <div className="flex flex-col w-1/4 max-md:w-full">
              <div className="flex flex-col grow text-sm leading-5 whitespace-nowrap text-stone-300 mt-10">
                <div className="text-base leading-6 text-white uppercase">
                  Contact
                </div>
                <div className="mt-5">Contact</div>
                <div className="mt-7">Privacy Policy</div>
                <div className="mt-6">Terms Of Service</div>
                <div className="mt-7 text-sm leading-5">Categories</div>
                <div className="mt-6">About</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2.5 my-auto text-sm leading-5 text-gray-300 whitespace-nowrap">
          <div className="grow">United States</div>
          <IoChevronDownSharp className="seft-start mt-1 text-lg"/>
        </div>
      </div>
    </div>
  );
}
