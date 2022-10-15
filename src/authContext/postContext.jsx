import React, { useState, useEffect } from "react";

const PostContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: null,
});

export const PostContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false)
  const [userAdmin, setUserAdmin] = useState("isAdmin")

  useEffect(() => {
    const userInfo = localStorage.getItem("isLoggedIn");
    const userAdmin = localStorage.getItem("isAdmin")
    if (userInfo === "true") {
      setIsLoggedIn(true);
    } if(userAdmin === "true") {
      setAdmin(true)
    }else if (userInfo === null) {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <PostContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        admin: admin,
        setAdmin: setAdmin
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostContext;
