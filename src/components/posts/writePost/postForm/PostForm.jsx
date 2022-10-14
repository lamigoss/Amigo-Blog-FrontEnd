import React from "react";
import axios from "axios";
import "./postForm.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../../ImageUpload/ImageUpload";
import PostDescription from "../postDescription/PostDescription";
import PostTitle from "../postTitle/PostTitle";
import FormContext from "../../../../context/formContext";

export default function PostForm() {
  const context = useContext(FormContext);

  return (
    <>
      <div className="postDataContainer">
        <form className="postDataFormBox" onSubmit={context.submitPostHandler}>
          <PostTitle />
          <PostDescription />
          <ImageUpload />
          <button type="submit" className="btn btn-primary">
            Click to Post!
          </button>
        </form>
      </div>
    </>
  );
}
