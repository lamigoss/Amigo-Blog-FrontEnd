import axios from "axios";
import React from "react";

import deleting from "../../../../img/delete.png";

const CommentView = ({ comment }) => {
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
      <div className="commentDetails">
        <div className="commentNamediv">
          <span className="break-all w-full">{comment.username}</span>

          <img
            src={deleting}
            onClick={handleDelete}
            className="button"
            alt=""
          />
        </div>
        {!comment.desc && <span className="commentText"> {comment.desc}</span>}
        {comment.desc && <span className="commentText"> {comment.desc}</span>}
      </div>
    </div>
  );
};

export default CommentView;
