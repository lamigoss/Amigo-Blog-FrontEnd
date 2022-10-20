import React, { useState, useEffect } from "react";
import "./commentTextBox.css";

const CommentTextBox = () => {
  const [comment, setComment] = useState("");
  return (
    <>
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        type="text"
        className="commentTextbox"
        placeholder="write your thoughts about this blog post and share with other readers!"
      />
      <button>Submit</button>
    </>
  );
};

export default CommentTextBox;
