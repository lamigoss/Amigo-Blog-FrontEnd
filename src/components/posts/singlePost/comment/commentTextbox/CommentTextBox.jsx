import React, { useState, useEffect } from "react";
import axios from "axios";
import "./commentTextBox.css";
import { useLocation } from "react-router-dom";
const CommentTextBox = () => {
  const [comment, setComment] = useState({
    username: "",
    postId: "",
    desc: "",
  });

  const user = window.localStorage.getItem("user");
  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    const text = e.target.value;
    setComment({ postId: postId, desc: text, username: user });
  };

  const handleComment = () => {
    const res = axios.post("/comments", comment);
    console.log("comment working?: " + comment);
    console.log("res.data: " + res.data);
    return res.data;
  };
  return (
    <>
      <form className="container" onSubmit={handleComment}>
        <input
          type="text"
          className="commentTextbox"
          placeholder="write your thoughts about this blog post and share with other readers!"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
