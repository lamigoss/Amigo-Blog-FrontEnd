import React, { useState, useEffect } from "react";
import "./viewImage.css";
import { GetImage } from "../../../../utils/httpRequests/HttpRequest";

const ViewImage = ({ imageKey }) => {
  const [image, setImage] = useState();
  useEffect(() => {
    GetImage(imageKey).then((res) => setImage(res.data[0].imageUrl));
    console.log("this is from view " + image);
  }, []);

  return (
    <div>
      <img className="postsImg" src={image} alt="" />
    </div>
  );
};

export default ViewImage;
