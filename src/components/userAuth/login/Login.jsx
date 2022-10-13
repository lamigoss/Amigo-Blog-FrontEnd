import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostLogin } from "../../../utils/httpRequests/HttpRequest";

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
    PostLogin(userLogin)
      .then((res) => {
        console.log(res);
        if (res.user.isAdmin === true) {
          window.localStorage.setItem("token", res.token);
          window.localStorage.setItem("user", res.user.username);
          window.localStorage.setItem("isLoggedIn", true);
          setIsLoggedIn(true);
          navigate("/");
        } else {
          window.localStorage.setItem("user", res.user.username);
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
