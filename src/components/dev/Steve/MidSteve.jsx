import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WebIcon from "@mui/icons-material/Web";

const MidSteve = () => {
  return (
    <div className="flex items-center justify-center bg-indigo-600 mb-2">
      <div className="p-10 hover:scale-110 opacity-80 text-white">
        <LinkedInIcon className="" />
        LinkedIn
      </div>
      <div className="p-10 hover:scale-110opacity-90 text-white">
        <GitHubIcon />
        GitHub
      </div>

      <div className="p-10 hover:scale-110 text-white">
        <MailOutlineIcon />
        Email
      </div>

      <div className="p-10 hover:scale-110 text-white">
        <WebIcon />
        Portfolio
      </div>
    </div>
  );
};

export default MidSteve;
