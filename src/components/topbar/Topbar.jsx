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
