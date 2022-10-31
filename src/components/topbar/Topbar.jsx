import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../authContext/authContext";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const context = useContext(AuthContext);

  const handleLogout = () => {
    context.setIsLoggedIn(false);
  };


  return (
    <>
      <div className="mwxs:hidden grid laptop:grid-cols-2 p-6 text-sm border-b[1px]	text-blue-800">
        <div className="grid grid-cols-5 md:grid-cols-6 laptop:ml-30 md:ml-20">
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
        <div className="grid laptop:grid-cols-2 xs:col-end-3 sm:col-end-3 md:col-end-3 tablet:col-end-3 laptop:mr-40">
          {context.isLoggedIn ? (
            <div className="col-end-4 laptop:mr-5 tablet:mr-3 sm:mr-2 xs:mr-1">
              <Link onClick={handleLogout} to="/logout">
                <span className="px-10 xs:px-4 sm:px-6 p-2 text-white transition duration-100 rounded-md bg-indigo-500 hover:bg-indigo-700 justify-self-center mt-6 shadow-lg">
                  Logout
                </span>
              </Link>
            </div>
          ) : (
            <>
              <div className="col-end-4 laptop:mr-5 tablet:mr-3 sm:mr-2">
                <Link to="/login">
                  <span className="px-10 p-2 text-white transition duration-100 rounded-md bg-indigo-500 hover:bg-indigo-700 justify-self-center mt-6 shadow-lg">
                    Login
                  </span>
                </Link>
              </div>
              <div className="col-end-5">
                <Link to="/signup">
                  <span className="px-9 p-2 text-white transition duration-100 rounded-md bg-indigo-500 hover:bg-indigo-700 justify-self-center mt-6 shadow-lg">
                    Sign Up
                  </span>
                </Link>
              </div>
            </>
          )}
          {context.admin ? (
            <div className="col-end-5">
              <Link to="/posts/create">
                <span className="px-10 xs:px-6 sm:px-8 p-2 text-white transition duration-100 rounded-md bg-indigo-500 hover:bg-indigo-700 justify-self-center mt-6 shadow-lg">
                  Blog
                </span>
              </Link>
            </div>
          ) : null}
        </div>
      </div>

      {/* HABURGER NAV */}
      {/* <button
        id="hamburger-button"
        className="text-3xl xs:hidden cursor-pointer"
      >
        HELLO
      </button> */}
        <button onClick={() => setOpen(true)} className="xs:hidden cursor-pointer p-4 absolute right-2 top-0 space-y-2 bg-white">
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
        </button>
      <div
        id="mobile-menu"
        className={`xs:hidden absolute top-1 space-y-2 bg-white pt-2 w-full text-5xl flex flex-col justify-content-center ${open ? 'flex' : 'hidden'}`}
      >
        <button
          onClick={() => setOpen(false)}
          className="text-5xl self-end px-6"
        >
          &times;
        </button>
        <div
          className="flex flex-col min-h-screen items-center py-8"
          aria-label="mobile"
        >
          <div className="w-full text-center py-6 hover:text-blue-400">
            <Link onClick={() => setOpen(false)}to="/">
              <span className="duration-100 hover:text-blue-400 text-xl">
                Home
              </span>
            </Link>
          </div>
          <div className="w-full text-center py-6 hover:text-blue-400">
            <Link onClick={() => setOpen(false)} to="/posts">
              <span className="duration-100 hover:text-blue-400 text-xl">
                Posts
              </span>
            </Link>
          </div>
          <div className="w-full text-center py-6 hover:text-blue-400">
            <Link onClick={() => setOpen(false)} to="/developers">
              <span className="duration-100 hover:text-blue-400 text-xl">
                Developers
              </span>
            </Link>
          </div>
          {context.isLoggedIn ? (
            <div className="w-full text-center py-6 hover:text-blue-400">
              <Link onClick={() => {
                setOpen(false);
                handleLogout()
              }} to="/logout">
                <span className="duration-100 hover:text-blue-400 text-xl">
                  Logout
                </span>
              </Link>
            </div>
          ) : (
            <>
              <div className="w-full text-center py-6 hover:text-blue-400">
                <Link onClick={() => setOpen(false)} to="/login">
                  <span className="duration-100 hover:text-blue-400 text-xl">
                    Login
                  </span>
                </Link>
              </div>
              <div className="w-full text-center py-6 hover:text-blue-400">
                <Link onClick={() => setOpen(false)} to="/signup">
                  <span className="duration-100 hover:text-blue-400 text-xl">
                    Sign Up
                  </span>
                </Link>
              </div>
            </>
          )}
          {context.admin ? (
            <div className="w-full text-center py-6 hover:text-blue-400">
              <Link onClick={() => setOpen(false)} to="/posts/create">
                <span className="duration-100 hover:text-blue-400 text-xl">
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
