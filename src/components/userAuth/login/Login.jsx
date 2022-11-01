import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostLogin } from "../../../utils/httpRequests/HttpRequest";
import AuthContext from "../../../authContext/authContext";

const Login = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const initialFormState = {
    username: "",
    password: "",
  };
  const [userLogin, setUserLogin] = useState(initialFormState);

  const handleChange = (event) => {
    setUserLogin({ ...userLogin, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const post = PostLogin(
        userLogin,
        context.setIsLoggedIn,
        context.setAdmin
      );
      if (post) navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center mt-40">
    <div className="bg-white bg-opacity-75 text-black shadow-lg rounded-md p-10 mws:w-10/12 sm:w-8/12 msm:w-7/12 md:w-6/12 laptop:w-5/12 desktop:w-4/12 lg:w-3/12">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-rows">
          <span className="text-slate-600">Username:</span>
          <input
            className="bg-transparent outline-none text-slate-800 border-b-[1px] border-blue-500 p-1"
            onChange={handleChange}
            id="username"
            value={userLogin.username}
          />
          <span className="text-slate-600 mt-5">Password:</span>
          <input
            className="bg-transparent outline-none text-slate-800 border-b-[1px] border-blue-500 p-1"
            onChange={handleChange}
            id="password"
            value={userLogin.password}
            type="password"
          />
          <button
             className="w-1/2 px-10 sm:px-8 mws:px-6 p-2 text-white transition duration-300 rounded-md hover:from-indigo-500 hover:to-blue-500 ease bg-gradient-to-br from-blue-400 to-indigo-400 justify-self-center mt-6 shadow-lg"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Login;
