import React, { useState } from "react";

import "./comment.css";
const Comment = () => {
  const [writeMode, setWriteMode] = useState(false);

  return (
    <>
      <div className="commentContainer">
        <div className="user">User Name</div>
        <div className="comment">comments</div>
        <div className="timeStamp">timeStamp</div>
      </div>
    </>
  );
};

// #endregion

export default Comment;
