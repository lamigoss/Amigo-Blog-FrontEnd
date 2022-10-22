import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetComment } from "../../../../utils/httpRequests/HttpRequest";

import "./comment.css";
const Comment = () => {
  const [writeMode, setWriteMode] = useState(false);
  const [comments, setComments] = useState();

  const { postId } = useParams();

  useEffect(() => {
    GetComment(postId)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(comments);
  return (
    <>
      <div className="commentContainer">
        <div className="user">User Name</div>
        <div className="comment">comments</div>
        {comments && comments.map((ele) => <p key={ele.id}>{ele.desc}</p>)}
        {!comments && <p>no comments</p>}
        <div className="timeStamp">timeStamp</div>
      </div>
    </>
  );
};

// #endregion

export default Comment;
