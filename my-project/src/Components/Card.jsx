import React from "react";
import { GoTrophy } from "react-icons/go";
import img1 from "../assets/img1.png";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
export default function Card(props) {
  const {
    trophyText,
    builderName,
    productName,
    productDescription,
    highlights,
    rating,
    ratingText,
    special
  } = props;
  const fullStars = Math.floor(rating / 2);
  const hasHalfStar = rating % 1 !== 0;

  const starIcons = [];
  for (let i = 0; i < fullStars; i++) {
    starIcons.push(<IoStar key={i} className="text-yellow-400" />);
  }

  if (hasHalfStar) {
    starIcons.push(<IoStarHalf key="half" className="text-yellow-400" />);
  }

  const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < remainingStars; i++) {
    starIcons.push(
      <IoStarOutline key={`empty-${i}`} className="text-gray-300" />
    );
  }

  return (
    <div className="pr-7 pb-2 bg-white rounded-xl w-3/5 m-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-1/4">
          {trophyText && (
            <div className="flex items-center rounded-r-xl pl-3 -mt-6 w-3/4 gap-4 py-2 text-white bg-orange-500 ">
              <GoTrophy className="text-xl" />
              <div className="flex-auto my-auto">{trophyText}</div>
            </div>
          )}
          <div className="flex flex-col items-center mt-10 ml-7 text-gray-500 ">
            <img src={img1} className="w-full" alt="Builder 1" />
            <div className="mt-4">{builderName}</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 lg:w-1/2">
          <div className="flex flex-col mt-7 text-gray-600">
            <div>
              <span className="font-bold">{productName}-</span>
              {productDescription}
            </div>
            <div className="mt-3.5 font-bold  text-slate-700">
              Main highlights
            </div>
            {special == false ? (
              <div className="mt-5">{highlights}</div>
            ) : (
              <div>
                <div className="flex flex-col items-start py-2 pr-20 pl-3 mt-2 mb-1 bg-orange-50 rounded-xl ">
                  <div className="flex gap-2">
                    <div className="justify-center px-2.5 py-2 text-base leading-6 text-center text-blue-500  bg-white rounded ]">
                      9.9
                    </div>
                    <div className="flex-auto my-auto text-base leading-6 text-gray-600 capitalize">
                      building responsive
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2 text-base leading-6 whitespace-nowrap">
                    <div className="justify-center px-2.5 py-2 text-center text-blue-500 bg-white rounded aspect-[1.43]">
                      8.9
                    </div>
                    <div className="flex-auto my-auto text-gray-600 capitalize">
                      Cool
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2 text-base leading-6 whitespace-nowrap">
                    <div className="justify-center px-2.5 py-2 text-center text-blue-500 bg-white rounded aspect-[1.43]">
                      8.9
                    </div>
                    <div className="flex-auto my-auto text-gray-600 capitalize">
                      Docs
                    </div>
                  </div>
                </div>
                <div className="mt-5 text-base leading-6 text-slate-700 max-md:max-w-full">
                  Why we love it
                </div>
                <div className="flex gap-2 self-start mt-3 text-gray-600 capitalize whitespace-nowrap">
                  <FaRegCheckCircle className="text-blue-500 bg-sky-100 rounded-full mt-1 text-lg outline-none"/>
                  <div>Documentation</div>
                </div>
                <div className="flex gap-2 self-start mt-1  text-gray-600 capitalize">
                  <FaRegCheckCircle className="text-blue-500 bg-sky-100 rounded-full mt-1 text-lg outline-none"/>
                  <div>Easy Use</div>
                </div>
                <div className="flex gap-2 self-start mt-1  text-gray-600 capitalize">
                  <FaRegCheckCircle className="text-blue-500 bg-sky-100 rounded-full mt-1 text-lg outline-none"/>
                  <div>Out of box</div>
                </div>
              </div>
            )}
            <div className="flex gap-1 self-start mt-8 mb-2 m-auto lg:m-0 text-blue-500">
              <div className="">Show more</div>
              <IoChevronDownSharp className="mt-1 text-lg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5">
          <div className="flex flex-col">
            <div className="flex flex-col self-center px-8 pt-1 pb-5 rounded-b-xl text-sky-800 bg-sky-50">
              <IoIosInformationCircleOutline className="ml-12 mt-2" />
              <div className="self-center mt-1 text-3xl leading-10">
                {rating}
              </div>
              <div className="mt-2 text-sm text-center">{ratingText}</div>
              <div className="flex gap-1">
                {starIcons.map((item, index) => {
                  return <div id={index}>{item}</div>;
                })}
              </div>
            </div>
            <div className="justify-center items-center px-16 py-2 cursor-pointer mt-5 text-base leading-6 text-center text-white bg-blue-500 rounded-xl">
              View
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
