import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../authContext/authContext";

const Topbar = () => {
  const context = useContext(AuthContext);

  const handleLogout = () => {
    context.setIsLoggedIn(false);
  };

  return (
    <>
      <div className="grid grid-cols-2 p-6 text-sm border-b[1px]	text-blue-800">
        <div className="grid grid-cols-3">
          <div className="topbarWrapper">
            <Link to="/">
              <span className="duration-100 hover:text-blue-400">Home</span>
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
        <div className="grid grid-cols-4 p-5 justify-center">
          <div className="self-center">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="logo">Home</span>
            </Link>
          </div>
          <div className="self-center">
            <Link to="/posts" style={{ textDecoration: "none" }}>
              <span className="topbarLink">Posts</span>
            </Link>
          </div>
          <div className="self-center">
            <Link to="/developers" style={{ textDecoration: "none" }}>
              <span className="topbarLink">Developers</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 justify-items-center">
          <div className="col-start-1">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className="px-10 p-2 text-white transition duration-300 rounded-md hover:from-indigo-500 hover:to-blue-500 ease bg-gradient-to-br from-blue-400 to-indigo-400 shadow-lg">Login</button>
            </Link>
          </div>
          <div className="col-start-2 mr-6">
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <button className="px-10 p-2 text-white transition duration-300 rounded-md hover:from-indigo-500 hover:to-blue-500 ease bg-gradient-to-br from-blue-400 to-indigo-400 justify-self-center shadow-lg">Sign Up</button>
            </Link>
          </div>
          </div>
        </div>
        <div className="topbarLeft">
          {/* <Link to="/login" style={{ textDecoration: "none" }}>
              <span className="topbarLink">Login</span>
            </Link> */}
        </div>
        <div className="grid grid-cols-3">
          {context.isLoggedIn ? (
            <div className="col-end-4">
              <Link onClick={handleLogout} to="/logout">
                <span className="px-10 p-2 text-white transition duration-100 rounded-md bg-indigo-500 hover:bg-indigo-700 justify-self-center mt-6 shadow-lg">
                  Logout
                </span>
              </Link>
            </div>
          ) : (
            <>
              <div className="col-end-4">
                <Link to="/login">
                  <span className="px-10 p-2 text-white transition duration-100 rounded-md bg-indigo-500 hover:bg-indigo-700 justify-self-center mt-6 shadow-lg">
                    Login
                  </span>
                </Link>
              </div>
              <div className="col-end-5">
                <Link to="/signup">
                  <span className="px-10 p-2 text-white transition duration-100 rounded-md bg-indigo-500 hover:bg-indigo-700 justify-self-center mt-6 shadow-lg">
                    Sign Up
                  </span>
                </Link>
              </div>
            </>
          )}
          {context.admin ? (
            <div className="col-end-5">
              <Link to="/posts/create">
                <span className="px-10 p-2 text-white transition duration-100 rounded-md bg-indigo-500 hover:bg-indigo-700 justify-self-center mt-6 shadow-lg">
                  Blog
                </span>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Topbar;
