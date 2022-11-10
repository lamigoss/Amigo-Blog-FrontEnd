import React, { useState, useEffect, useContext } from "react";
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
      console.log(res.data[0].imageUrl)
    });
  }, []);

  return (
    <div className="relative h-0 pt-1/3 pb-2/3">
      {image && <img className="absolute inset-0 w-full h-full object-cover rounded-2xl" src={image} alt="" />}
      {!image && null}
    </div>
  );
};

export default ViewImg;
