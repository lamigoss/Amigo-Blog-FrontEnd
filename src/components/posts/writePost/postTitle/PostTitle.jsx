import React, { useEffect, useContext } from "react";
import FormContext from "../../../../context/formContext";

const PostTitle = () => {
  const context = useContext(FormContext);
  const checkForm = context.post.postTitle.length !== 0;

  useEffect(() => {
    context.setValid(checkForm)
  })
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
