import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WebIcon from "@mui/icons-material/Web";

const LinkTab = ({ developer }) => {
  // console.log(developer);

  return (
    <div className="w-auto flex items-center justify-center bg-indigo-600">
      {developer === "stevelee" ? (
        <Link to="">
          <div className="md:p-10 p-2 hover:scale-110 text-white md:scale-100 scale-75">
            <LinkedInIcon className="" />
            LinkedIn
          </div>
        </Link>
      ) : (
        <Link to="">
          <div className="md:p-10 p-2 hover:scale-110 text-white md:scale-100 scale-75">
            <LinkedInIcon className="" />
            LinkedIn
          </div>
        </Link>
      )}

      {developer === "stevelee" ? (
        <Link to="">
          <div className="md:p-10 p-2 hover:scale-110 text-white md:scale-100 scale-75">
            <GitHubIcon />
            GitHub
          </div>
        </Link>
      ) : (
        <Link to="">
          <div className="md:p-10 p-2 hover:scale-110 text-white md:scale-100 scale-75">
            <GitHubIcon />
            GitHub
          </div>
        </Link>
      )}
      {developer === "stevelee" ? (
        <Link to="">
          <div className="md:p-10 p-2 hover:scale-110 text-white md:scale-100 scale-75">
            <MailOutlineIcon />
            Email
          </div>
        </Link>
      ) : (
        <Link to="">
          <div className="md:p-10 p-2 hover:scale-110 text-white md:scale-100 scale-75">
            <MailOutlineIcon />
            Email
          </div>
        </Link>
      )}
      {developer === "stevelee" ? (
        <Link to="">
          <div className="md:p-10 p-2 hover:scale-110 text-white md:scale-100 scale-75">
            <WebIcon />
            Portfolio
          </div>
        </Link>
      ) : (
        <Link to="">
          <div className="md:p-10 p-2 hover:scale-110 text-white md:scale-100 scale-75">
            <WebIcon />
            Portfolio
          </div>
        </Link>
      )}
    </div>
  );
};

export default LinkTab;
