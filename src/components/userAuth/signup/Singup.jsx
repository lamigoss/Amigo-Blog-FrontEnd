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
    PostSignUp(userSignup);
  };

  return (
    <div>
      Signup
      <form onSubmit={handleSubmit}>
        {/* <input placeholder="first name"></input>
        <input placeholder="last name"></input> */}
        <input
          placeholder="email"
          id="email"
          onChange={handleChange}
          value={userSignup.email}
        ></input>
        <input
          placeholder="username"
          id="username"
          onChange={handleChange}
          value={userSignup.username}
        ></input>
        <input
          placeholder="password"
          id="password"
          type="password"
          onChange={handleChange}
          value={userSignup.password}
        ></input>
        <input
          placeholder="isAdmin"
          id="isAdmin"
          onChange={handleChange}
          value={userSignup.isAdmin}
        ></input>
        {formIsValid && <button type="submit">Submit</button>}
      </form>
    </div>
  );
};

export default Signup;
