import React from "react";

const Footer = () => {
  return (
    <div className="border-stone-300 border-t-[.5px] ml-10 mr-10 tablet:ml-40 tablet:mr-40">
      <div className="flex justify-center items-center pl-30 my-5 mobile:ml-5 mobile:mr-5 md:text-md text-xs">
        <span className="text-slate-400 ">Copyright © 2022 Lee&Hong Inc.</span>
        <span className="text-slate-400 md:px-5 px-1 ">|</span>
        <span className="text-slate-400 ">Trademark Policy</span>
        <span className="text-slate-400 md:px-5 px-1 ">|</span>
        <span className="text-slate-400 ">Edit this page on GitHub</span>
        <span className="text-slate-400 md:px-5 px-1 ">|</span>
        <span className="text-slate-400 ">
          Programming icon by
          <a target="blank" href="https://icons8.com" className="mx-1">
            Icons8
          </a>
          &
          <a
            href="https://www.flaticon.com/free-icons/hamburger"
            title="hamburger icons"
          >
            Hamburger icons created by Lizel Arina - Flaticon
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
