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
      <div className="grid md:grid-cols-2  md:p-6 text-sm md:border-b[1px]	text-blue-800 ">
        <div className="grid md:grid-cols-3 grid-cols-1 ">
          <div className="">
            <Link to="/">
              <span className="duration-100 hover:text-blue-400">Home</span>
            </Link>
          </div>

          <div className="post">
            <Link to="/posts">
              <span className="duration-100 hover:text-blue-400">Posts</span>
            </Link>
          </div>
          <div className="developers">
            <Link to="/developers">
              <span className="duration-100 hover:text-blue-400">
                Developers
              </span>
            </Link>
          </div>
          </div>
        </div>
        <div className="topbarLeft">
          {/* <Link to="/login" style={{ textDecoration: "none" }}>
              <span className="topbarLink">Login</span>
            </Link> */}
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
          {context.isLoggedIn ? (
            <div className="md:col-end-4 grid-cols-1">
              <Link onClick={handleLogout} to="/logout">
                <span className="px-10 p-2 text-white transition duration-100 rounded-md bg-indigo-500 hover:bg-indigo-700 justify-self-center mt-6 shadow-lg">
                  Logout
                </span>
              </Link>
            </div>
          ) : (
            <>
              <div className="md:col-end-4 grid-cols-1">
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
                  Write a Blog Post
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
