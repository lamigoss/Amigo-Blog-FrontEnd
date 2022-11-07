import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../authContext/authContext";

const Logout = ({ logout }) => {
  const context = useContext(AuthContext)
  const navigate = useNavigate();
  useEffect(() => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("isAdmin");
    window.localStorage.removeItem("isLoggedIn");
    context.setAdmin(false)
    navigate("/");
  }, []);

  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
