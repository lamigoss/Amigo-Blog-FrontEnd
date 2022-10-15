import React, { useState } from "react";
import "./writePost.css";
import PostTitle from "../postTitle/PostTitle";
import PostDesc from "../postDesc/PostDesc";
import PostImg from "../postImg/PostImg";
import { PostBlog } from "../../../../utils/httpRequests/HttpRequest";

export default function WritePost() {
  const username = window.localStorage.getItem("user");
  const imageId = window.localStorage.getItem("imageId")

  const [form, setForm] = useState({
    username: username,
    postTitle: "",
    postDesc: "",
    imageId: imageId
  });


  const handleChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value });
  };

  const postSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const blog = await PostBlog(form);
      window.location.replace("/posts/" + blog._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="pageTitleContainer">
        <span></span>
      </div>
      <div className="postDataContainer">
        <form className="postDataFormBox" onSubmit={postSubmitHandler}>
          <PostTitle handleChange={handleChange} postTitle={form.postTitle} />
          <PostDesc handleChange={handleChange} postDesc={form.postDesc} />
          <PostImg />
          <button type="submit" className="btn btn-primary">
            Click to Post!
          </button>
        </form>
      </div>
    </>
  );
}
