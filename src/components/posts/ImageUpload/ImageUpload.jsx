// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { PostImage } from "../../../utils/httpRequests/HttpRequest";

// const ImageUpload = ({ getImageKey }) => {
//   const [uploadImages, setUploadImages] = useState();

//   const formData = new FormData();
//   formData.append("image", uploadImages);

//   const handleChange = (event) => {
//     const files = event.target.files[0];
//     setUploadImages(files);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     PostImage(formData)
//       .then((res) => getImageKey(res.body.imageKey))
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div>
//       <div className="ImgPost">Post Image</div>
//       <input type="file" onChange={handleChange}></input>
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default ImageUpload;
