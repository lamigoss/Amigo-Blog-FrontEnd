import React from "react";
import axios from "axios";
import "./postForm.css";
import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ImageUpload from "../../ImageUpload/ImageUpload";
import PostDescription from "../postDescription/PostDescription";
import PostTitle from "../postTitle/PostTitle";
import FormContext from "../../../../context/formContext";
import { PostFormData } from "../../../../utils/httpRequests/HttpRequest";

export default function PostForm() {
  const context = useContext(FormContext)
  const [imageKey, setImageKey] = useState();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault()
    PostFormData(context.post)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error))
  };

  return (
    <>
   
      <div className="postDataContainer">
        <form className="postDataFormBox" onSubmit={submitHandler}>
          <PostTitle />
          <PostDescription/>
          {/* <ImageUpload  /> */}
          <button type="submit" className="btn btn-primary">
            Click to Post!
          </button>
        </form>
      </div>

    </>
  );
}
