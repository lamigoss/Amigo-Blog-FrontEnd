import axios from "axios";
import React, { useState, useEffect } from "react";

const ImageUpload = () => {
  const [uploadImages, setUploadImages] = useState();


  const formData = new FormData();
  formData.append("image", uploadImages);

  const handleChange = (event) => {
    const files = event.target.files[0];
    setUploadImages(files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8800/api/images", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange}></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ImageUpload;
