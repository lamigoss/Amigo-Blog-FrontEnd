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
      <div className="bg-white bg-opacity-25 text-black shadow-lg rounded-md p-8 w-1/2">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-rows gap-2">
            <span className="text-white" >User Name:</span>
            <input
              className="bg-indigo-500 text-white border-2 border-indigo-500 rounded-md p-2"
              onChange={handleChange}
              id="username"
              value={userLogin.username}
              placeholder="Enter username"
            />
            <span className="text-white">Password:</span>
            <input
              className="bg-indigo-500 text-white border-2 border-indigo-500 rounded-md p-2"
              onChange={handleChange}
              id="password"
              value={userLogin.password}
              placeholder="password"
              type="password"
            />
            <button
              className=" bg-indigo-500 text-white rounded-md p-3 w-1/2 hover:scale-105 justify-self-center mt-10 shadow-lg"
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
