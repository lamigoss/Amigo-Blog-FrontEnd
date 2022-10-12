import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:8800/api";

export const PostSignUp = async (body) => {
    const navigate = useNavigate
  try {
    const res = await axios.post(`${baseUrl}/users/signup`, body);
    const data = await res.data;
    return data
  } catch (error) {
    console.log(error);
  }
};
