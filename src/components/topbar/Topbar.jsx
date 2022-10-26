import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../authContext/authContext";

const Topbar = () => {
  const context = useContext(AuthContext);

  const handleLogout = () => {
    context.setIsLoggedIn(false);
  };
  if (context.isLoggedIn) {
    return (
      <>
        <div className="border-b-[1px] border-blue-500 p-1">
          <div className="topbarLeft">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="logo">Home</span>
            </Link>
          </div>
          <div className="topbarCenter">
            <div className="post">
              <Link to="/posts" style={{ textDecoration: "none" }}>
                <span className="topbarLink">Posts</span>
              </Link>
            </div>
            <div className="developers">
              <Link to="/developers" style={{ textDecoration: "none" }}>
                <span className="topbarLink">Developers</span>
              </Link>
            </div>
            <div className="login developers">
              <Link
                onClick={handleLogout}
                to="/logout"
                style={{ textDecoration: "none" }}
              >
                <span className="topbarLink">Logout</span>
              </Link>
            </div>
          </div>
          <div className="topbarLeft"></div>
          {context.admin && (
            <div className="login developers">
              <Link to="/posts/create" style={{ textDecoration: "none" }}>
                <span className="topbarLink">Post Form</span>
              </Link>
            </div>
          )}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="grid justify-items-start border-b-[.5px] border-indigo-500 p-2">
          <div className="topbarLeft">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="logo">Home</span>
            </Link>
          </div>
          <div className="topbarCenter">
            <div className="post">
              <Link to="/posts" style={{ textDecoration: "none" }}>
                <span className="topbarLink">Posts</span>
              </Link>
            </div>
            <div className="developers">
              <Link to="/developers" style={{ textDecoration: "none" }}>
                <span className="topbarLink">Developers</span>
              </Link>
            </div>
            <div className="">
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span className="topbarLink">Login</span>
              </Link>
            </div>
            <div className="login developers">
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <span className="topbarLink">Sign Up</span>
              </Link>
            </div>
          </div>

          <div className="topbarLeft"></div>
        </div>
      </>
    );
  }
};

export default Topbar;
