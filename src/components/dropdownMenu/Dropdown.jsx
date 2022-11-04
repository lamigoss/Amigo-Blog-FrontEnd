import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Dropdown = () => {
  const [drop, setDrop] = useState(false);
  const navigate = useNavigate()

  const toggleDrop = () => {
    setDrop((prev) => !prev);
  };
  
  const handleNavigate = (event) => {
   if (event.target.id === 'stevelee'){
    navigate('/developers/stevelee')
    setDrop((prev) => !prev)
   }else if(event.target.id === 'roycehong') {
    navigate('/developers/roycehong')
    setDrop((prev) => !prev)
   }
  }

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
            <div onClick={handleNavigate} id='stevelee'className="hover:bg-indigo-300 p-5">Steve Lee</div>
          </Link>
          <Link to={"/developers/roycehong"}>
            <div onClick={handleNavigate} id='roycehong' className="hover:bg-indigo-300 p-5">Roy Hong</div>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default Dropdown;
