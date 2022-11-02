import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WebIcon from "@mui/icons-material/Web";

const MidRoy = () => {
  return (
    <div className="items-center justify-center">
      <div className="p-20 hover:scale-110 bg-indigo-700 opacity-80 text-white">
        <LinkedInIcon className="" />
        LinkedIn
      </div>
      <div className="p-20 hover:scale-110 bg-indigo-700 opacity-90 text-white">
        <GitHubIcon />
        GitHub
      </div>

      <div className="p-20 hover:scale-110 bg-indigo-600 text-white">
        <MailOutlineIcon />
        Email
      </div>

      <div className="p-20 hover:scale-110 bg-indigo-500 text-white">
        <WebIcon />
        Portfolio
      </div>
    </div>
  );
};

export default MidRoy;
