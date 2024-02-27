import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  IoIosInformationCircleOutline,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import { IoChevronDownSharp } from "react-icons/io5";
import { LiaGreaterThanSolid } from "react-icons/lia";
import Card from "./Card";
import DealCard from "./DealCard";
import Newsletter from "./Newsletter";
import { cardsData } from "../CardDetails";

export default function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="w-full bg-gray-100">
      <div className="px-7 md:w-3/5 m-auto" data-aos="zoom-in">
        <div className="pt-12">
          <div className="text-5xl text-slate-700">
            Best Website builders in the US
          </div>
          <div className="mt-6 h-px bg-zinc-300 max-w-full" />
          <div className="flex gap-4 justify-between mt-2 text-sm leading-5 text-gray-300">
            <div className="flex gap-8 md:gap-4 mt-2 text-gray-600 flex-wrap px-1">
              <div className="flex gap-2">
                <IoIosCheckmarkCircleOutline className="text-xl" />
                <p>Last Updated - February 22, 2020</p>
              </div>
              <div className="flex gap-2">
                <IoIosInformationCircleOutline className="text-xl" />
                <p>Advertising Disclosure</p>
              </div>
            </div>
            <div className="flex gap-1 mt-2 text-center text-gray-500">
              <p>Top Relevant</p>
              <IoChevronDownSharp className="text-xl" />
            </div>
          </div>
        </div>
        <div className="mt-4 bg-zinc-200  max-w-full h-px " />
        <div className="flex gap-4 mt-2 text-sm leading-5 text-gray-600 flex-wrap">
          <div className=" p-2 px-5 bg-white rounded-xl">Tools</div>
          <div className="p-2 px-5 bg-white rounded-xl">AWS Builder</div>
          <div className="p-2 px-5 bg-white rounded-xl">Start Build</div>
          <div className="p-2 px-5 bg-white rounded-xl">Build Supplies</div>
          <div className="p-2 px-5 bg-white rounded-xl">Tooling</div>
          <div className="p-2 px-5 bg-white rounded-xl">BlueHosting</div>
        </div>
        <div className="flex gap-2 items-center mt-4 mb-10 text-sm leading-5 text-gray-500 flex-wrap">
          <div className="my-auto">Home</div>
          <LiaGreaterThanSolid className="mt-1" />
          <div>Hosting for all</div>
          <LiaGreaterThanSolid className="mt-1" />
          <div>Hosting</div>
          <LiaGreaterThanSolid className="mt-1" />
          <div>Hosting6</div>
          <LiaGreaterThanSolid className="mt-1" />
          <div className="flex-grow">Hosting5</div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        {cardsData.map((item, index) => {
          return (
            <div id={index} data-aos="fade-up">
              <Card
                trophyText={item.trophyText}
                builderName={item.builderName}
                productDescription={item.productDescription}
                productName={item.productName}
                rating={item.rating}
                ratingText={item.ratingText}
                highlights={item.highlights}
                special={item.special}
              />
            </div>
          );
        })}
      </div>
      <p className="text-3xl w-3/5 m-auto mt-10 mb-6" data-aos="fade-right">
        Related deals you might like
      </p>
      <div
        className="no-scrollbar flex gap-4 flex-col md:flex-row overflow-x-auto w-3/5 m-auto"
        data-aos="zoom-in"
      >
        <DealCard />
        <DealCard />
        <DealCard />
        <DealCard />
        <DealCard />
      </div>
      <div className="" data-aos="fade">
        <Newsletter />
      </div>
    </div>
  );
}
