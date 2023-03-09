import React from "react";
import lightBG from "./assets/bg-light.png";
import starIcon from "./assets/star.png";
import arrowDownIcon from "../src/assets/arrowDown.svg";
const Dashboard = () => {
  return (
    <div className="relative grid grid-cols-11 ">
      <div className="col-span-4">
        <div className="p-16 pt-20  ">
          <p className="text-green-primary text-[50px]">4.9 </p>
          <p className="flex gap-3 mt-6">
            {[...Array(5)].map((val, index) => {
              return <img src={starIcon} key={index} className="w-4" />;
            })}
          </p>
          <h2 className="text-[40px] font-semibold mt-4">Prankur Gupta </h2>
          <p className="text-[24px]">SDE-2 @Amazon</p>
          <p className="text-[1rem]">
            I am Prankur Gupta, I am working as a Software Development Engineer
            at Amazon. I can guide you throughout your preparation phase. Trust
            me when I tell you this I know the exact recipe to crack the coding
            interview rounds of top companies for the SDE role.
          </p>
          <div className="">
            <button className="text-[white] bg-green-primary py-2 px-4 font-semibold box-shadow-green mt-4">
              Book a session
            </button>
          </div>
        </div>
      </div>
      <div className=" grow  col-span-7">
        <div className="relative">
          <div className="absolute bottom-[-4rem] grid place-items-center w-full">
            <img
              src="https://i.ibb.co/syVqWfT/Ellipse-25.png"
              className="w-32 h-32 rounded-full  bottom-[-3rem] left-[50%]"
              alt=""
            />
          </div>
          <div className="bg-green-light rounded-bl-[450px] rounded-br-[450px] w-[900px] h-[450px]  overflow-hidden  ">
            <div className="pt-12 overflow-hidden max-w-full max-h-full">
              <div className="rounded-tl-[450px] rounded-tr-[450px] w-[900px] border-green-primary border-dashed border-2 h-[900px]"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-6">
          <div className="w-10 h-10 rounded-full bg-green-primary grid place-items-center">
            <img src={arrowDownIcon} alt="" className="w-6 h-6" />
          </div>
          <div className="w-10 h-10 rounded-full bg-green-primary grid place-items-center">
            <img src={arrowDownIcon} alt="" className="w-6 h-6" />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="p-2 px-6 rounded-lg bg-green-light font-semibold">
            Prankur Gupta
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
