import React, {useState} from "react";
import logout from "../assets/logout.svg";
import user from "../assets/user.svg"
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"
import logo from "../assets/fitfinder.png"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick =()=> setNav(!nav)
    const handleClose =()=> setNav(!nav)


  return (
    <div className="w-full h-[80px] fixed drop-shadow-lg bg-medium-blue">
      <div className="flex flex-row justify-between items-center py-5 px-5 lg:px-20 2xl:px-40 2xl:justify-center 2xl:gap-32">
        <div>
          <h1 className="font-bold text-lg cursor-pointer">FitPal.</h1>
        
        </div>

        <ul className="hidden lg:flex gap-16 2xl:gap-5 ">
          <li>Dashboard</li>
          <li>BMI Calculator</li>
          <li>BMI Tracking</li>
          <li>Advisor</li>
        </ul>

        <div className="ms:mr-5 sm:block lg:hidden" onClick={handleClick}>
        {!nav ? <img src={menu} alt="" className="w-6" /> : <img src={close} alt="" className="w-6" />}
        </div>

        <div id="sign-button" className="hidden md:hidden lg:flex justify-start items-center gap-3 bg-dark-pink py-2 px-4 rounded-3xl cursor-pointer">
          <p id="sign-text" className="text-white text-xs" >Sign In</p>
          <img src={user} alt="" className="w-6" />
        </div>
      </div>

      <ul className={!nav ? 'hidden' : "absolute w-full h-[100vh] px-8 py-8  flex flex-col gap-10 text-start items-start bg-medium-blue lg:hidden"}>
          <li className="border-b-2 w-full text-[30px] ">Dashboard</li>
          <li className="border-b-2 w-full  text-[30px] ">BMI Calculator</li>
          <li className="border-b-2 w-full text-[30px] ">BMI Tracking</li>
          <li className="border-b-2 w-full text-[30px] ">Advisor</li>

          <div className="flex justify-center items-center gap-3 bg-dark-pink my-2 py-2 rounded-3xl cursor-pointer w-full">
            <p className="text-white text-xl">Sign In</p>
            <img src={user} alt="" className="w-6" />
          </div>
        </ul>
    
    </div>
  );
};

export default Navbar;
