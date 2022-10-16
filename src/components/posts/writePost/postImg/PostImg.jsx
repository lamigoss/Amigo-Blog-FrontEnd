import React, { useState } from "react";
import ViewImg from "../viewImg/ViewImg";
import { PostImage } from "../../../../utils/httpRequests/HttpRequest";

const PostImg = () => {
  const [uploadImages, setUploadImages] = useState();
  const [imageKey, setImageKey] = useState();
  const imageFormData = new FormData();
  imageFormData.append("image", uploadImages);

  const handleChange = (event) => {
    event.preventDefault();
    const files = event.target.files[0];
    setUploadImages(files);
  };

  const handleSumbit = async (event) => {
    event.preventDefault();
    try {
      if (!uploadImages) {
        alert("please select image");
      } else {
        const post = await PostImage(imageFormData);
        setImageKey(post.body.imageKey);
        window.localStorage.setItem("imageId", post.body._id);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      Post Image
      <input onChange={handleChange} type="file" />
      <button onClick={handleSumbit} type="submit">
        Choose Image
      </button>
      {imageKey === undefined ? (
        null
      ) : (
        <ViewImg imageKey={imageKey} />
      )}
    </>
  );
};

export default PostImg;
