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
      <div className="bg-white bg-opacity-75 text-black shadow-lg rounded-md p-10 w-1/3">
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
              className="w-1/2 px-10 p-2 text-white transition duration-300 rounded-md hover:from-teal-6000 hover:to-sky-700 ease bg-gradient-to-br from-sky-500 to-teal-500 justify-self-center mt-6 shadow-lg"
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
