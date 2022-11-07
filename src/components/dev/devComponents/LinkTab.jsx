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
        <a href="https://www.linkedin.com/in/seung-ki-lee/">
          <div className="md:p-10 p-2 hover:scale-110 text-white md:scale-100 scale-75">
            <LinkedInIcon className="" />
            LinkedIn
          </div>
        </a>
      ) : (
        <a href="">
          <div className="md:p-10 p-2 hover:scale-110 text-white md:scale-100 scale-75">
            <LinkedInIcon className="" />
            LinkedIn
          </div>
        </a>
      )}

      {developer === "stevelee" ? (
        <a href="https://github.com/stvnlee890">
          <div className="md:p-10 p-2 hover:scale-110 text-white md:scale-100 scale-75">
            <GitHubIcon />
            GitHub
          </div>
        </a>
      ) : (
        <a href="">
          <div className="md:p-10 p-2 hover:scale-110 text-white md:scale-100 scale-75">
            <GitHubIcon />
            GitHub
          </div>
        </a>
      )}
      {developer === "stevelee" ? (
        <a href="mailto: seungkilee700@gmail.com">
          <div className="md:p-10 p-2 hover:scale-110 text-white md:scale-100 scale-75">
            <MailOutlineIcon />
            Email
          </div>
        </a>
      ) : (
        <a href="mailto: ">
          <div className="md:p-10 p-2 hover:scale-110 text-white md:scale-100 scale-75">
            <MailOutlineIcon />
            Email
          </div>
        </a>
      )}
      {developer === "stevelee" ? (
        <a href="https://seungkilee.netlify.app/">
          <div className="md:p-10 p-2 hover:scale-110 text-white md:scale-100 scale-75">
            <WebIcon />
            Portfolio
          </div>
        </a>
      ) : (
        <a href="">
          <div className="md:p-10 p-2 hover:scale-110 text-white md:scale-100 scale-75">
            <WebIcon />
            Portfolio
          </div>
        </a>
      )}
    </div>
  );
};

export default LinkTab;
