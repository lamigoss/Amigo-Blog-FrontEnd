import axios from "axios";
import React, { useState, useEffect } from "react";
import Comment from "./Comment";
// import { useParams } from "react-router-dom";
// import { GetComment } from "../../../../utils/httpRequests/HttpRequest";

import "./comments.css";
const Comments = ({ postId }) => {
  const [writeMode, setWriteMode] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // GetComment(postId)
    //   .then((res) => setComments(res.data))
    //   .catch((err) => console.log(err));
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${postId}`);
        setComments(res.data);
        console.log("can i see the comments:  " + res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchComments();
    // console.log("postId from Comment: " + comments);
  }, [postId]);

  return (
    <>
      <div className="commentContainer">
        {/* <div className="user">{postId}</div>
        <div className="comment">{postId}</div> */}
        {comments &&
          comments.map((ele) => <Comment key={ele.id} comment={ele} />)}
        {!comments && <p>no comments</p>}
        {/* <div className="timeStamp">{postId}</div> */}
      </div>
    </>
  );
};

// #endregion

export default Comments;
