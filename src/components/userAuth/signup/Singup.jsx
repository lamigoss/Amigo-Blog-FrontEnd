import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostSignUp } from "../../../utils/httpRequests/HttpRequest";

const Signup = () => {
  const navigate = useNavigate();
  const initialFormState = {
    email: "",
    username: "",
    password: "",
    isAdmin: false,
  };
  const [userSignup, setUserSignup] = useState(initialFormState);
  const [formIsValid, setIsFormValid] = useState(false);

  const handleChange = (event) => {
    setUserSignup({ ...userSignup, [event.target.id]: event.target.value });
  };

  const checkForm =
    userSignup.email.includes("@") &&
    userSignup.password.trim().length >= 6 &&
    userSignup.username.trim().length >= 3;

  useEffect(() => {
    setIsFormValid(checkForm);
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    PostSignUp(userSignup)
      .then((res) => {
        if (res.status === true) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center mt-40">
      <div className="bg-white bg-opacity-75 text-black shadow-lg rounded-md p-10 w-1/3">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-rows">
            <span className="text-slate-600">Email:</span>
            <input
              className="bg-transparent outline-none text-slate-800 border-b-[1px] border-blue-500 p-1"
              id="email"
              onChange={handleChange}
              value={userSignup.email}
            ></input>
            <span className="text-slate-600 mt-5">Username:</span>
            <input
              className="bg-transparent outline-none text-slate-800 border-b-[1px] border-blue-500 p-1"
              id="username"
              onChange={handleChange}
              value={userSignup.username}
            ></input>
            <span className="text-slate-600 mt-5">Password:</span>
            <input
              className="bg-transparent outline-none text-slate-800 border-b-[1px] border-blue-500 p-1"
              id="password"
              type="password"
              onChange={handleChange}
              value={userSignup.password}
            ></input>
            <span className="text-slate-600 mt-5">isAdmin:</span>
            <input
              className="bg-transparent outline-none text-slate-800 border-b-[1px] border-blue-500 p-1"
              id="isAdmin"
              onChange={handleChange}
              value={userSignup.isAdmin}
            ></input>
            {formIsValid &&  <button
              className="w-1/2 px-10 p-2 text-white transition duration-300 rounded-md hover:from-indigo-500 hover:to-blue-500 ease bg-gradient-to-br from-blue-400 to-indigo-400 justify-self-center mt-6 shadow-lg"
              type="submit"
            >
              Submit
            </button>}
           {!formIsValid &&  <button disabled
              className="w-1/2 px-10 p-2 text-white transition duration-300 rounded-md bg-gradient-to-br from-blue-200 to-indigo-200 justify-self-center mt-6 shadow-lg"
              type="submit"
            >
              Submit
            </button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
