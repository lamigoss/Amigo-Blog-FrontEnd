import React from "react";
import axios from "axios";
import "./postForm.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ImageUpload from "../../ImageUpload/ImageUpload";
import PostDescription from "../postDescription/PostDescription";
import PostTitle from "../postTitle/PostTitle";
import { FormContextProvider } from "../../../../context/formContext";

export default function PostForm() {

  // const [post, setPost] = useState('')
  // const initialForm = {
  //   username: getUserName,
  //   postTitle: '',
  //   postDesc: post,

  // }

  const [imageKey, setImageKey] = useState();
  const navigate = useNavigate();
  
  const submitHandler = () => {
    console.log("clicked");
  };
  
  
  // const getPostDescription = (post) => {
  //  setPost(post)
  // }
  
  const getImageKey = (key) => {
    setImageKey(key);
  };
 
  return (
    <>
    <FormContextProvider>
      <div className="postDataContainer">
        <form className="postDataFormBox" onSubmit={submitHandler}>
          <PostTitle />
          <PostDescription/>
          <ImageUpload  />
          <button type="submit" className="btn btn-primary">
            Click to Post!
          </button>
        </form>
      </div>
    </FormContextProvider>
    </>
  );
}
