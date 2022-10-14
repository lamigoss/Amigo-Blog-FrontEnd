import React, { useState, useEffect, useContext } from "react";
import FormContext from "../../../../context/formContext";
import { GetImage } from "../../../../utils/httpRequests/HttpRequest";
import "./imageDisplay.css"
const ImageDisplay = () => {
    const[image, setImage] = useState()
  const context = useContext(FormContext);

  useEffect(() => {
    GetImage(context.imageKey).then((res) => setImage(res.data[0].imageUrl));
  }, []);
  return (
    <div className="image-display">
        <img src={image} />
    </div>
  );
};

export default ImageDisplay;
