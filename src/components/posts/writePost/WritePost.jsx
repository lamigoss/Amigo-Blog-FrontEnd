import React from "react";
import axios from "axios";
import "./writePost.css";
import { useState } from "react";

export default function WritePost() {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  const username = window.localStorage.getItem("user");

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      username: username,
      postTitle: title,
      postDesc: desc,
    };
    const res = await axios.post("/posts/create", newPost);
    window.location.replace("/posts/" + res.data._id);
  };

  return (
    <>
      <div className="pageTitleContainer">
        <span>
          {/* { 
        ?"Update the current post"
        :"Create a Post that you want to share with other users"
        } */}
        </span>
      </div>

      <div className="postDataContainer">
        <form className="postDataFormBox" onSubmit={submitHandler}>
          <div className="titlePost">Post title</div>
          <input
            type="text"
            placeholder="Post title"
            className="titleInput"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="descPost">Post Description</div>
          <input
            type="text"
            placeholder="share your thoughts"
            className="descInput"
            onChange={(e) => setDesc(e.target.value)}
          />
          {/* <div className="ImgPost">Post Image</div> */}
          <input type="text" className="imgInput" />
          <button type="submit" className="btn btn-primary">
            Click to Post!
          </button>
        </form>
      </div>
    </>
  );
}
