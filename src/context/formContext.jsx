import React, { useState, useEffect } from "react";

const FormContext = React.createContext({
  post: null,
  handleDescForm: null,
});

export const FormContextProvider = (props) => {
  const getUserName = window.localStorage.getItem("user");
  const initialForm = {
    username: getUserName,
    postTitle: "",
    postDesc: "",
  };
  const [post, setPost] = useState(initialForm);

  const handleDescForm = (event) => {
    event.preventDefault();
    setPost((prev) => {
      return { ...prev, [event.target.id]: event.target.value };
    });
  };

  return (
    <FormContext.Provider
      value={{
        post: post,
        handleDescForm: handleDescForm,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
