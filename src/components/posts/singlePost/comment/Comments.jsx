import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

// import "./comments.css";

const Comments = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${postId}`);
        setComments(res.data);
        // console.log("can i see the comments:  " + res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchComments();
  }, [postId]);

  return (
    <>
      <div className="commentContainer">
        {comments &&
          comments.map((ele) => <Comment key={ele.id} comment={ele} />)}
        {!comments && <p>no comments</p>}
      </div>
    </>
  );
};

// #endregion

export default Comments;
