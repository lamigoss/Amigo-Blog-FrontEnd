import React, { useContext } from "react";
import FormContext from "../../../../context/formContext";

const PostTitle = () => {
  const context = useContext(FormContext);
  return (
    <>
      <div className="titlePost">Post title</div>
      <input
        id="postTitle"
        type="text"
        placeholder="Post title"
        className="titleInput"
        onChange={context.handleDescForm}
        value={context.post.postTitle}
      />
    </>
  );
};

export default PostTitle;
