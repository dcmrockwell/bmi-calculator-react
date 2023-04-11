import React from "react";
import salad from "../assets/salad.png";

const Information = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-10 p-4">
        <p className="p-4 bg-dark-yellow rounded-full">
          Because your last <strong>BMI</strong> was <strong>Normal</strong>
        </p>

        <div className=" lg:flex flex-row items-center lg:gap-32 ">
          <div className="">
            <p className="font-bold text-[25px] mt-5 mb-5 lg:w-[300px]">
              Keep your BMI Score on Optimal Level
            </p>

            <p className="text-slate-400 text-[15px] mb-5 w-[370px]">
              Try to consume more protein as well as routine workout to make
              sure your body is in the right shape
            </p>

            <img src={salad} alt="" className="rounded-lg lg:w-[300px]" />
          </div>

          <div className="">
            <div className=" flex flex-row gap-5 items-center mt-5">
              <div className="w-[50px] h-[50px] rounded-full bg-medium-blue"></div>

              <div className="text-start">
                <p className="text-[15px] font-bold">Suggestions 1</p>
                <p className="text-slate-400 text-[12px] w-[300px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, numquam placeat.
                </p>
              </div>
            </div>

            <div className=" flex flex-row gap-5 items-center mt-5">
              <div className="w-[50px] h-[50px] rounded-full bg-dark-yellow"></div>

              <div className="text-start">
                <p className="text-[15px] font-bold">Suggestions 2</p>
                <p className="text-slate-400 text-[12px] w-[300px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, numquam placeat.
                </p>
              </div>
            </div>

            <div className=" flex flex-row gap-5 items-center mt-5">
              <div className="w-[50px] h-[50px] rounded-full bg-medium-blue"></div>

              <div className="text-start">
                <p className="text-[15px] font-bold">Suggestions 1</p>
                <p className="text-slate-400 text-[12px] w-[300px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, numquam placeat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
