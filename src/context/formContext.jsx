import React, { useState,useEffect } from "react";
import { PostFormData, PostImage } from "../utils/httpRequests/HttpRequest";

const FormContext = React.createContext({
  post: null,
  handleDescForm: null,
  submitPostHandler: null,
  setUploadImages: null,
});

export const FormContextProvider = (props) => {
// POST BLOG LOGIC
const getUserName = window.localStorage.getItem("user");
const randomId = Math.floor(Math.random() * 10000000).toString()
const initialForm = {
    imageUrl: '',
    username: getUserName,
    postTitle: "",
    postDesc: "",
    postImage: randomId,
};

const [post, setPost] = useState(initialForm);
const [valid, setValid] = useState(false);
const [uploadImages, setUploadImages] = useState();
const [imageKey, setImageKey] = useState()

const imageFormData = new FormData();
  imageFormData.append("image", uploadImages);

const checkForm = post.postTitle.length !== 0;

useEffect(() => {
  setValid(checkForm)
})
  const handleDescForm = (event) => {
    event.preventDefault();
    setPost((prev) => {
      return { ...prev, [event.target.id]: event.target.value };
    });
  };
  const submitPostHandler = (event) => {
    event.preventDefault()
    if(valid){
        PostFormData(post)
          .then((res) => console.log(res.data))
          .catch((error) => console.log(error))
    }else {
        alert('please enter a title')
    }
  };

 console.log(imageKey)
  return (
    <FormContext.Provider
      value={{
        post: post,
        handleDescForm: handleDescForm,
        submitPostHandler: submitPostHandler,
        valid: valid,
        setValid: setValid,
        // UPLOAD IMAGES
        imageFormData: imageFormData,
        setUploadImages: setUploadImages,
        setImageKey: setImageKey,
        imageKey: imageKey
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
