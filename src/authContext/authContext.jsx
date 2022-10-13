import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: null,
  admin: false,
  setAdmin: null,
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);
 

  useEffect(() => {
    const userInfo = localStorage.getItem("isLoggedIn");
    const userAdmin = localStorage.getItem("isAdmin");
    if (userInfo === "true") {
      setIsLoggedIn(true);
    }
    if (userAdmin === "true") {
      setAdmin(true);
    } else if (userInfo === null) {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        admin: admin,
        setAdmin: setAdmin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
