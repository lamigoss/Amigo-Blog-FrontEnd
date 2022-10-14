import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostLogin } from "../../../utils/httpRequests/HttpRequest";
import AuthContext from "../../../context/authContext";

const Login = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const initialFormState = {
    username: "",
    password: "",
  };
  const [userLogin, setUserLogin] = useState(initialFormState);

  const handleChange = (event) => {
    setUserLogin(prevInput => {
      return {...prevInput, [event.target.id]: event.target.value}
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    PostLogin(userLogin, context.setIsLoggedIn, context.setAdmin)
      .then((res) => {
        res ? navigate("/") : navigate("/")
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
