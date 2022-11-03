import React from "react";

const Footer = () => {
  return (
    <div className="border-stone-300 border-t-[.5px] mobile:ml-10 mobile:mr-10 tablet:ml-40 tablet:mr-40">
      <div className="flex justify-center items-center pl-30 pt-5 mobile:ml-5 mobile:mr-5">
        <span className="text-slate-400 mobile:text-xs laptop:text-sm">Copyright © 2022 Lee&Hong Inc.</span>
        <span className="text-slate-400 px-5 mobile:text-xs laptopt:text-sm">|</span>
        <span className="text-slate-400 mobile:text-xs laptop:text-sm">Trademark Policy</span>
        <span className="text-slate-400 px-5 mobile:text-xs laptop:text-sm">|</span>
        <span className="text-slate-400 mobile:text-xs laptop:text-sm">Edit this page on GitHub</span>
      </div>
    </div>
  );
};

export default Footer;
