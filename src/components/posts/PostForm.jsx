import React from "react";
import axios from "axios";
import "./postForm.css";
import { useState } from "react";

export default function PostForm() {
  const submitHandler = () => {
    console.log("clicked");
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
          <input type="text" placeholder="Post title" className="titleInput" />
          <div className="descPost">Post Description</div>
          <input
            type="text"
            placeholder="share your thoughts"
            className="descInput"
          />
          <div className="ImgPost">Post Image</div>
          <input type="text" className="imgInput" />
          <button type="submit" className="btn btn-primary">
            Click to Post!
          </button>
        </form>
      </div>
    </>
  );
}
