import React, { useState, useEffect, useContext } from "react";
import "./viewImg.css";
import { GetImage } from "../../../../utils/httpRequests/HttpRequest";
import PostContext from "../../../../authContext/postContext";

const ViewImg = ({ imageKey }) => {
  const context = useContext(PostContext);
  const [image, setImage] = useState();

  useEffect(() => {
    GetImage(imageKey).then((res) => {
      if (!res.data[0].imageUrl) return null;
      setImage(res.data[0].imageUrl);
      context.setImageId(res.data[0]._id);
    });
  }, []);

  return (
    <div>
      {image && <img className="postsImg" src={image} alt="" />}
      {!image && null}
    </div>
  );
};

export default ViewImg;
