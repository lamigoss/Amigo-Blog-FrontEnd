import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const initialFormState = {
    username: "",
    password: "",
  };
  const [userLogin, setUserLogin] = useState(initialFormState);

  const handleChange = (event) => {
    setUserLogin({ ...userLogin, [event.target.id]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8800/api/users/login", userLogin)
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data.user.isAdmin === true) {
          window.localStorage.setItem("token", data.token);
          window.localStorage.setItem("user", data.user.username);
          window.localStorage.setItem("isLoggedIn", true);
          setIsLoggedIn(true);
          console.log(data);
          navigate("/");
        } else {
          window.localStorage.setItem("user", data.user.username);
          window.localStorage.setItem("isLoggedIn", true);
          setIsLoggedIn(true);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          id="username"
          value={userLogin.username}
          placeholder="username"
        ></input>
        <input
          onChange={handleChange}
          id="password"
          value={userLogin.password}
          placeholder="password"
          type="password"
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
