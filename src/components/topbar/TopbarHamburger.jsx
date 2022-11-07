import React, { useContext, useState } from "react";
import hamburger from "../../img/hamburger.png";
import AuthContext from "../../authContext/authContext";
import { Link } from "react-router-dom";

const TopbarHamburger = () => {
  const [open, setOpen] = useState(false);
  const context = useContext(AuthContext);

  const handleLogout = () => {
    context.setIsLoggedIn(false);
  };
  return (
    <>
      <img
        src={hamburger}
        onClick={() => setOpen(true)}
        className="lg:hidden md:hidden sm:hidden  cursor-pointer p-4 absolute right-1 top-0 space-y-2 w-2/12 bg-slate-100 rounded-xl scale-50"
        alt=""
      />

      <div
        id="mobile-menu"
        className={`xs:hidden xs:text-xs relative top-1 space-y-2 bg-white pt-2 w-full text-5xl flex flex-col justify-content-center ${
          open ? "flex" : "hidden"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="text-5xl mobile:text-3xl self-end px-6"
        >
          &times;
        </button>
        <div
          className="flex flex-col min-h-screen items-center py-8"
          aria-label="mobile"
        >
          <div className="w-full text-center py-6 hover:text-blue-400">
            <Link onClick={() => setOpen(false)} to="/">
              <span className="duration-100 hover:text-blue-400 text-lg">
                Home
              </span>
            </Link>
          </div>
          <div className="w-full text-center py-6 hover:text-blue-400">
            <Link onClick={() => setOpen(false)} to="/posts">
              <span className="duration-100 hover:text-blue-400 text-lg">
                Posts
              </span>
            </Link>
          </div>
          <div className="w-full text-center py-6 hover:text-blue-400">
            <Link onClick={() => setOpen(false)} to="/developers">
              <span className="duration-100 hover:text-blue-400 text-lg">
                Developers
              </span>
            </Link>
          </div>
          {context.isLoggedIn ? (
            <div className="w-full text-center py-6 hover:text-blue-400 text-lg">
              <Link
                onClick={() => {
                  setOpen(false);
                  handleLogout();
                }}
                to="/logout"
              >
                <span className="duration-100 hover:text-blue-400 text-lg">
                  Logout
                </span>
              </Link>
            </div>
          ) : (
            <>
              <div className="w-full text-center py-6 hover:text-blue-400">
                <Link onClick={() => setOpen(false)} to="/login">
                  <span className="duration-100 hover:text-blue-400 text-lg">
                    Login
                  </span>
                </Link>
              </div>
              <div className="w-full text-center py-6 hover:text-blue-400">
                <Link onClick={() => setOpen(false)} to="/signup">
                  <span className="duration-100 hover:text-blue-400 text-lg">
                    Sign Up
                  </span>
                </Link>
              </div>
            </>
          )}
          {context.admin ? (
            <div className="w-full text-center py-6 hover:text-blue-400">
              <Link onClick={() => setOpen(false)} to="/posts/create">
                <span className="duration-100 hover:text-blue-400 text-lg">
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

export default TopbarHamburger;
