import React from "react";
import axios from "axios";
import "./writePost.css";
import { useState } from "react";
import PostTitle from "../postTitle/PostTitle";
import PostDesc from "../postDesc/PostDesc";
import PostImg from "../postImg/PostImg";
import { PostBlog } from "../../../../utils/httpRequests/HttpRequest";

export default function WritePost() {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  const username = window.localStorage.getItem("user");
  const newPost = {
    username: username,
    postTitle: title,
    postDesc: desc,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const blog = await PostBlog(newPost)
      console.log(blog)
      window.location.replace("/posts/" + blog._id);
    } catch(error){
      console.log(error)
    }
  };

  return (
    <>
      <div className="pageTitleContainer">
        <span>
   
        </span>
      </div>
      <div className="postDataContainer">
        <form className="postDataFormBox" onSubmit={submitHandler}>
          <PostTitle setTitle={setTitle} />
          <PostDesc setDesc={setDesc}/>
          <PostImg />
          <button type="submit" className="btn btn-primary">
            Click to Post!
          </button>
        </form>
      </div>
    </>
  );
}
