import React, { useContext } from "react";
import FormContext from "../../../../context/formContext";

const PostDescription = () => {
const context = useContext(FormContext)

  return (
    <>
      <div className="descPost">Post Description</div>
      <input
        id="postDesc"
        type="text"
        placeholder="share your thoughts"
        className="descInput"
        onChange={context.handleDescForm}
        value={context.post.postDesc}
      />
    </>
  );
};

export default PostDescription;
