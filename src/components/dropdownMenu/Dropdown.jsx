import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Dropdown = () => {
  const [drop, setDrop] = useState(false);

  const toggleDrop = () => {
    setDrop((prev) => !prev);
    // console.log()
  };

  return (
    <>
      <div className="flex">
        <Link to="/developers">Developers</Link>
        {!drop ? (
          <div className="h-2 w-2" onClick={toggleDrop}>
            <ArrowDropDownIcon />
          </div>
        ) : (
          <div className="h-2 w-2" onClick={toggleDrop}>
            <ArrowDropUpIcon />
          </div>
        )}
      </div>

      {drop ? (
        <div className="h-40 w-40 bg-white text-purple rounded-md shadow-md absolute">
          <Link to={"/developers/stevelee"}>
            <div className="hover:bg-indigo-300 p-5">Steve Lee</div>
          </Link>
          <Link to={"/developers/roycehong"}>
            <div className="hover:bg-indigo-300 p-5">Roy Hong</div>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default Dropdown;
