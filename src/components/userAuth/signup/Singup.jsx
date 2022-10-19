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

  // Checks for 6 chars or more, checks for one or more capitalized, 
  // Checks for at least 1 number, and one symbol
  const reg = new RegExp(
    "^(?=.*[a-z]{6,})(?=.*[A-Z]{1,})(?=.*[0-9])(?=.*[!@#$&*])"
  );

  const checkForm =
    userSignup.email.includes("@") &&
    reg.test(userSignup.password) &&
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
