import React, { useEffect, useState } from "react";
import lightBG from "./assets/bg-light.png";
import starIcon from "./assets/star.png";
import arrowDownIcon from "../src/assets/arrowDown.svg";
import { data } from "./data";
const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [obj, setObj] = useState(data[2]);
  const [arr, setArr] = useState(data);

  useEffect(() => {
    setObj(arr[2]);
  }, [arr]);

  const shiftLeft = () => {
    let a = [...arr];
    const val = a[4];
    a.pop();
    const updateArr = [];
    updateArr.push(val);
    updateArr.push(...a);
    setArr([...updateArr]);
  };
  const shiftRight = () => {
    const a = [...arr];
    const val = a[0];
    a.shift();
    setArr([...a, val]);
  };
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
          <h2 className="text-[40px] font-semibold mt-4">{obj.name}</h2>
          <p className="text-[24px]">{obj.designation}</p>
          <p className="text-[1rem]">{obj.comment}</p>
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
              src={obj.url}
              className="w-32 h-32 rounded-full  bottom-[-3rem] left-[50%]"
              alt=""
            />
          </div>
          <div className="bg-green-light rounded-bl-[450px] rounded-br-[450px] w-[900px] h-[450px]  overflow-hidden grid place-items-center  ">
            <div className="pt-4  max-w-full max-h-full">
              <div className="rounded-full w-[580px] border-green-primary border-dashed border-2 h-[580px] relative ">
                {arr.map((val, index) => {
                  return (
                    <img
                      src={val.url}
                      alt=""
                      className="w-24 h-24 rounded-full absolute top-[50%] left-[50%] margin-[50%] "
                      style={{
                        transform: `rotate(${
                          315 * index
                        }deg) translate(300px) rotate(-${315 * index}deg)`,
                      }}
                      loading="lazy"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-6 mt-16">
          <div
            className="w-10 h-10 rounded-full bg-green-primary grid place-items-center cursor-pointer"
            onClick={shiftLeft}
          >
            <img src={arrowDownIcon} alt="" className="w-6 h-6" />
          </div>
          <div
            className="w-10 h-10 rounded-full bg-green-primary grid place-items-center cursor-pointer"
            onClick={shiftRight}
          >
            <img src={arrowDownIcon} alt="" className="w-6 h-6" />
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="p-2 px-6 rounded-lg bg-green-light font-semibold">
            {obj.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
