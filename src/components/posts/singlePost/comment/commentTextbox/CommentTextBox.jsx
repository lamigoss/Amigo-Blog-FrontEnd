import React, { useState } from "react";
import axios from "axios";
import "./commentTextBox.css";
import { useParams } from "react-router-dom";
const CommentTextBox = ({handleComment, handleChange, comment}) => {
 
  console.log(comment);
  return (
    <>
      <form className="textboxContainer" onSubmit={handleComment}>
        <textarea
          className="border-b-[2px] border-blue-800"
          id="desc"
          value={comment}
          type="text"
          placeholder="write your thoughts about this blog post and share with other readers!"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CommentTextBox;
