import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-1 mt-[100px] w-full bg-slate-200">
      <p className="text-xs text-slate-600">
        Created using React &amp; TailwindCSS
      </p>
      <p className="text-xs text-slate-600">
        &copy; 2023 <a href="https://dcmrockwell.com" target="_blank">dcmrockwell.com</a> All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
