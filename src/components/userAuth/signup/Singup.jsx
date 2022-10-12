import React, { useState } from "react";

const Signup = () => {
  const initialFormState = {
    username: "",
    email: "",
    password: "",
    isAdmin: false,
  };
  const [userSignup, setUserSignup] = useState(initialFormState);

  const handleChange = (event) => {
    setUserSignup({...userSignup, [event.target.id]: event.target.value})
  };

  console.log(userSignup)
  return (
    <div>
      Signup
      <form>
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
          onChange={handleChange}
          value={userSignup.password}
        ></input>
        <input
          placeholder="isAdmin"
          id="isAdmin"
          onChange={handleChange}
          value={userSignup.isAdmin}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Signup;
