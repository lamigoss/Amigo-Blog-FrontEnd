import axios from "axios";

const baseUrl = "http://localhost:8800/api";

// USER SIGNUP POST REQUEST
export const PostSignUp = async (body) => {
  try {
    const res = await axios.post(`${baseUrl}/users/signup`, body);
    return res.data

  } catch (error) {
    console.log(error);
  }
};

// USER LOGIN POST REQUEST
export const PostLogin = async (body, setIsLoggedIn, setAdmin) => {
  try {
    const res = await axios.post(`${baseUrl}/users/login`, body);
    console.log(res.data)
    const user = res.data.user
    if(user.isAdmin) {
      window.localStorage.setItem("token", user.token);
      window.localStorage.setItem("user", user.username);
      window.localStorage.setItem("isAdmin", true);
      window.localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true)
      setAdmin(true)
      return(true)
    }else {
      window.localStorage.setItem("user", user.username);
      window.localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true)
      return(false)
    }
  } catch (error) {
    console.log(error);
  }
};
