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
      <div className="border-b-[1px] border-blue-500 p-1 text-sm	text-blue-800">
        <div className="topbarWrapper">
          <Link to="/">
            <span className="hover:bg-white ">Home</span>
          </Link>
        </div>
        <div className="topbarCenter">
          <div className="post">
            <Link to="/posts">
              <span className="topbarLink">Posts</span>
            </Link>
          </div>
          <div className="developers">
            <Link to="/developers">
              <span className="topbarLink">Developers</span>
            </Link>
          </div>
          {context.isLoggedIn ? (
            <div className="login developers">
              <Link onClick={handleLogout} to="/logout">
                <span className="topbarLink">Logout</span>
              </Link>
            </div>
          ) : (
            <>
              <div className="">
                <Link to="/login">
                  <span className="topbarLink">Login</span>
                </Link>
              </div>
              <div className="login developers">
                <Link to="/signup">
                  <span className="topbarLink">Sign Up</span>
                </Link>
              </div>
            </>
          )}
        </div>
        <div className="topbarLeft"></div>
        {context.admin ? (
          <div className="login developers">
            <Link to="/posts/create">
              <span className="topbarLink">Create a blog post</span>
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Topbar;
