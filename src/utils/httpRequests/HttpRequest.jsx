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
export const PostLogin = async (body) => {
  try {
    const res = await axios.post(`${baseUrl}/users/login`, body);
    return res.data
  } catch (error) {
    console.log(error);
  }
};
