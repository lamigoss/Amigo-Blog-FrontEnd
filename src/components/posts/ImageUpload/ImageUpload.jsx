import axios from "axios";
import React, { useState, useContext } from "react";
import { PostImage } from "../../../utils/httpRequests/HttpRequest";
import ImageDisplay from "./imageDisplau/imageDisplay";
import FormContext from "../../../context/formContext";

const ImageUpload = () => {
  const context = useContext(FormContext)
  // const [uploadImages, setUploadImages] = useState();

  // const imageFormData = new FormData();
  // imageFormData.append("image", uploadImages);

  const handleChange = (event) => {
    const files = event.target.files[0];
    context.setUploadImages(files);
  };

 // IMAGE SUBMIT HANDLER/ Change Handler
 const handleSubmit = (event) => {
  event.preventDefault();
  PostImage(context.imageFormData)
    .then((res) => {
      context.post.postImage = res.body.imageKey
      context.setImageKey(res.body.imageKey)
    })
    .catch((error) => console.log(error));
};
  
  return (
    <div>
      <div className="ImgPost">Post Image</div>
      <input type="file" onChange={handleChange}></input>
      <button onClick={handleSubmit}>Submit</button>
      {context.imageKey === undefined ? <p>loading</p> : <ImageDisplay />}
    </div>
  );
};

export default ImageUpload;
