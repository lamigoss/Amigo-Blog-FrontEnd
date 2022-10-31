import axios from "axios";
import React from "react";

import deleting from "../../../../img/delete.png";

const CommentView = ({ comment }) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    console.log(comment.postId);
    try {
      await axios.delete(`/comments/${comment.postId}/${comment._id}`);
      window.location.replace(`/posts/${comment.postId}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      <div className="commentDetails">
        <div className="">
          {/* <img
            src={deleting}
            onClick={handleDelete}
            className="button"
            alt=""
          /> */}
        </div>
        <div className="grid">
          <span className="break-all w-full pb-3 pt-3 text-indigo-300">{comment.username}</span>
          {!comment.desc && <span className="pb-3 pt-3"> {comment.desc}</span>}
          {comment.desc && <span className="pb-3"> {comment.desc}</span>}
        </div>
      </div>
    </div>
  );
};

export default CommentView;
