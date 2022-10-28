import React from "react";

const CommentTextBox = ({ handleComment, handleChange, comment }) => {
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
