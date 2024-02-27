import React from "react";
import img1 from '../assets/img1.png'
export default function DealCard() {
  return (
    <div className="flex flex-col pt-6 pb-8 mt-4 bg-white rounded-xl hover:shadow hover:-translate-y-2 hover:scale-105 duration-300">
      <div className="flex flex-col items-center px-5">
        <img
          src={img1}
        />
        <div className="flex gap-2 justify-between self-stretch mt-14 text-sky-800 max-md:mt-10">
          <div className="grow justify-center px-2 py-2 text-sm leading-5 bg-gray-100 rounded-lg">
            20% Off
          </div>
          <div className="grow justify-center py-2 pr-4 pl-2 text-sm leading-5 bg-gray-100 rounded-lg">
            Limited time{" "}
          </div>
        </div>
        <div className="mt-3 text-base font-bold leading-6 text-gray-500 whitespace-nowrap">
          Webbuilder 1
        </div>
      </div>
      <div className="flex flex-col px-5 mt-5">
        <div className="text-base leading-6 text-gray-500">
          Computer Modern clasic with wix support
        </div>
        <div className="flex gap-2.5 justify-between mt-3.5">
          <div className="text-xl leading-5 text-gray-500">$39.96</div>
          <div className="text-sm leading-5 text-gray-400">$49.96</div>
          <div className="flex-auto text-sm leading-5 text-rose-500">
            (20% Off)
          </div>
        </div>
        <div className="justify-center items-center w-full px-16 py-1 mt-4 text-base leading-6 text-center text-white whitespace-nowrap bg-blue-500 rounded-xl max-md:px-5">
          View Deal
        </div>
      </div>
    </div>
  );
}


