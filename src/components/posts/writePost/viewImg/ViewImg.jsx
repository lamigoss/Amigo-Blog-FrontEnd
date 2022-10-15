import React, { useState, useEffect } from "react";
import './viewImg.css'
import { GetImage } from "../../../../utils/httpRequests/HttpRequest";

const ViewImg = ({ imageKey }) => {
  const [image, setImage] = useState();

  useEffect(() => {
    GetImage(imageKey).then((res) => setImage(res.data[0].imageUrl));
  }, []);

  return (
    <div>
      <img src={image} />
    </div>
  );
};

export default ViewImg;
