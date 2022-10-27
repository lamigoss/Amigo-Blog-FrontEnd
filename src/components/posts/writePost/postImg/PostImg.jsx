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
      <div className="grid grid-cols-[20%_80%] gap-x-2 pt-4 pl-6 pb-2 pr-10">
        <div className="text-blue-500">Post Image:</div>
        <div className="grid">
        <input onChange={handleChange} type="file" />
          {imageKey === undefined ? null : <ViewImg imageKey={imageKey} />}
          <button onClick={handleSumbit} type="submit" className="px-10 p-2 text-white transition duration-100 rounded-md bg-indigo-500 hover:bg-indigo-700 justify-self-center mt-6 shadow-lg">
            Choose Image
          </button>
        </div>
      </div>
    </>
  );
};

export default PostImg;
