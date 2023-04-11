import React from "react";
import arrowleft from "../assets/arrowleft.svg";
import arrowdown from "../assets/arrowdown.svg";
import hero from "../assets/heroimage.svg";

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between px-4 pt-16 xl:pt-0">
      <div className="flex flex-col-reverse m-auto justify-between items-center md:flex-row lg:gap-36 xl:gap-[100px] ">
        <div className="flex flex-col justify-center items-start gap-2">
          <p className="text-2xl mr-auto">
            Check your <strong>BMI</strong>
          </p>
          <p className="text-xl">Get your <strong>Personalized Advice</strong></p>

          <div className="flex flex-row gap-4 mt-8">
            <div className="flex flex-row items-center text-center bg-light-yellow px-2 rounded-md cursor-pointer">
              <p className="text-xs">
                Go to <strong>BMI Calculator</strong>
              </p>
              <img src={arrowleft} alt="" className="w-12" />
            </div>

            <div className="flex flex-row items-center text-center bg-light-yellow px-2 rounded-md cursor-pointer">
              <img src={arrowleft} alt="" className="w-12" />
              <p className="text-xs">
                Your <strong>BMI Chart</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <img src={hero} alt=""/>
        </div>
      </div>

      <div className="flex flex-row justify-center text-center items-center mb-[60px]">
        <img src={arrowdown} alt=""  className="w-12  md:mr-16 cursor-pointer" />
        <p className="md:text-xl">
          Scroll down for <strong>MORE</strong>
        </p>
        <img src={arrowdown} alt=""  className="w-12 md:ml-16 cursor-pointer" />
      </div>
    </div>
  );
};

export default Hero;
