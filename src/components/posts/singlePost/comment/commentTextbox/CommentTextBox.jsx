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
  const handleComment = (e) => {
    e.preventDefault();
    axios.post("/comments", comment);
  };
  return (
    <>
      <form className="text-sm  text-blue-800 " onSubmit={handleComment}>
        <input
          type="text"
          className="opacity-60 rounded-md w-9/12  h-8 relative m-10 shadow-lg"
          placeholder="write your thoughts about this blog post and share with other readers!"
          onChange={handleChange}
        />
        {/* <span className="bg-blue-400  rounded-md p-2 hover:bg-blue-300 relative shadow-lg cursor-pointer">
          Submit
        </span> */}
      </form>
    </>
  );
};

export default CommentTextBox;
