import axios from "axios";

const baseUrl = "http://localhost:8800/api";

export const PostSignUp = async (body) => {
  try {
    const res = await axios.post(`${baseUrl}/users/signup`, body);
    console.log(res.status)
    return res.data
  } catch (error) {
    console.log(error);
  }
};

export const PostLogin = async (body) => {
  try {
    const res = await axios.post(`${baseUrl}/users/login`, body);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
