import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/">
            <span className="logo">Home</span>
          </Link>
        </div>
        <div className="topbarCenter">
          <Link to="/posts">
            <span className="topbarLink">Posts</span>
          </Link>
          <Link to="/developers">
            <span className="topbarLink">Developers</span>
          </Link>
        </div>

        <div className="topbarLeft">
          <Link to="/login">
            <span className="topbarLink">Login</span>
          </Link>
        </div>
      </div>
    </>
  );
}
