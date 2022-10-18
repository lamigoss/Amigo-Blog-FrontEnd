import React, { useState, useEffect, useContext } from "react";
import "./writePost.css";
import PostTitle from "../postTitle/PostTitle";
import PostDesc from "../postDesc/PostDesc";
import PostImg from "../postImg/PostImg";
import { PostBlog } from "../../../../utils/httpRequests/HttpRequest";
import PostContext from "../../../../authContext/postContext";

export default function WritePost() {
  const context = useContext(PostContext);
  const username = window.localStorage.getItem("user");
  const initialFormState = {
    username: username,
    postTitle: "",
    postDesc: "",
  };
  const [form, setForm] = useState(initialFormState);
  console.log("IN WRITE POST COMPONENT " + context.imageId);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value });
  };

  const postSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const blog = await PostBlog(form, context.imageId);
      console.log(blog);
      window.localStorage.removeItem("imageId");
      window.location.replace("/posts/" + blog._id);
      console.log("blog ID:  " + blog._id);
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
          <PostTitle
            handleChange={handleChange}
            postTitle={form.postTitle}
            value={form.postTitle}
          />
          <PostDesc
            handleChange={handleChange}
            postDesc={form.postDesc}
            value={form.postDesc}
          />
          <PostImg />
          <button type="submit" className="btn btn-primary">
            Click to Post!
          </button>
        </form>
      </div>
    </>
  );
}
