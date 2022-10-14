import React, { useContext, useState } from "react";
import FormContext from "../../../../context/formContext";

const PostDescription = () => {
const context = useContext(FormContext)
console.log(context.post)
  return (
    <>
      <div className="titlePost">Post title</div>
      <input type="text" placeholder="Post title" className="titleInput" />
      <div className="descPost">Post Description</div>
      <input
        id="postDesc"
        type="text"
        onChange={context.handleDescForm}
        value={context.post.postDesc}
        placeholder="share your thoughts"
        className="descInput"
      />
    </>
  );
};

export default PostDescription;
