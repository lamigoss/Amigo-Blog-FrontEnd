import React from "react";

const Footer = () => {
  return (
    <div className=" w-full h-20 border-stone-300 border-t-2 items-center">
      <div className="flex justify-center items-center pl-30 pt-5">
        <span className="text-slate-400">Copyright © 2022 Lee&Hong Inc.</span>
        <span className="text-slate-400 px-5">|</span>

        <span className="text-slate-400">Trademark Policy</span>
        <span className="text-slate-400 px-5">|</span>
        <span className="text-slate-400">Edit this page on GitHub</span>
      </div>
    </div>
  );
};

export default Footer;
