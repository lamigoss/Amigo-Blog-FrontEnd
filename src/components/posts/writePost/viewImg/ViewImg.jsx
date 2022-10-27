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
    });
  }, []);

  return (
    <div className="mt-10 mb-10">
      {image ? (
        <img className="object-contain h-48 w-96" src={image} alt="" />
      ) : null}
    </div>
  );
};

export default ViewImg;
