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
        <div className="border-b-[1px] border-blue-500 p-1 text-sm	text-blue-800">
          <div className="">
            <Link to="/posts">
              <span className="hover:bg-white hover:text-black">Home</span>
            </Link>
          </div>
          <div className="developers">
            <Link to="/developers">
              <span className="hover:bg-white hover:text-black">
                Developers
              </span>
            </Link>
          </div>
          <div className="login developers">
            <Link onClick={handleLogout} to="/logout">
              <span className="hover:bg-white hover:text-black">Logout</span>
            </Link>
          </div>
        </div>
        <div className="topbarLeft"></div>
        {context.admin && (
          <div className="login developers">
            <Link to="/posts/create">
              <span className="hover:bg-white hover:text-black">Post Form</span>
            </Link>
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        <div className="grid justify-items-start border-b-[.5px] border-indigo-500 p-2">
          <div className="topbarCenter">
            <div className="post">
              <Link to="/posts">
                <span className="hover:bg-white hover:text-black">Home</span>
              </Link>
            </div>
            <div className="developers">
              <Link to="/developers">
                <span className="hover:bg-white hover:text-black">
                  Developers
                </span>
              </Link>
            </div>
            <div className="">
              <Link to="/login">
                <span className="hover:bg-white hover:text-black">Login</span>
              </Link>
            </div>
            <div className="login developers">
              <Link to="/signup">
                <span className="hover:bg-white hover:text-black">Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Topbar;
