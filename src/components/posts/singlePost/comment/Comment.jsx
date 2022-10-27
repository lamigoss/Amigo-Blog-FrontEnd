import axios from "axios";
import React from "react";
import deleting from "../../../../img/delete.png";

const Comment = ({ comment }) => {
  const handleDelete = async () => {
    console.log(comment.postId);
    try {
      await axios.delete(`/comments/${comment.postId}/${comment._id}`);
      window.location.replace(`/posts/${comment.postId}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="commentContainer">
      <div className="p-3 border-b-[.5px] border-blue-400">
        <div className="grid grid-cols-12">
          <span className="commentName">{comment.username}</span>
          <img
            src={deleting}
            onClick={handleDelete}
            className="h-4 w-4 opacity-70 cursor-pointer hover:scale-110"
            alt=""
          />
        </div>
        <span className="commentText"> {comment.desc}</span>
      </div>
    </div>
  );
};

export default Comment;
