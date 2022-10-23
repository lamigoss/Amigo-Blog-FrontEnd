import React from "react";

const Comment = ({ comment }) => {
  //   const username = window.localStorage.getItem("user");
  console.log("this is the ...:" + comment);

  return (
    <div className="container">
      <div className="details">
        <div className="name">{comment.username}</div>
        <div className="text"> {comment.desc}</div>
      </div>
    </div>
  );
};

export default Comment;
