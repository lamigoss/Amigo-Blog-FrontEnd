import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ logout, setAdmin }) => {
    
  const navigate = useNavigate();
  useEffect(() => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("isAdmin");
    window.localStorage.removeItem("isLoggedIn");
    setAdmin(false)
    navigate("/");
    console.log("LOCAL STORAGE CLEARED");
  }, []);

  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
