import React, { useState } from "react";
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

  // comment state being changed
  const handleChange = (e) => {
    const text = e.target.value;
    setComment({ postId: postId, desc: text, username: user });
  };

  //comment post api
  const handleComment = () => {
    const res = axios.post("/comments", comment);
    console.log("comment working?: " + comment);
    console.log("res.data: " + res.data);
    return res.data;
  };
  return (
    <>
      <form className="textboxContainer" onSubmit={handleComment}>
        <textarea className="border-b-[2px] border-blue-800"
          type="text"
          placeholder="write your thoughts about this blog post and share with other readers!"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CommentTextBox;
