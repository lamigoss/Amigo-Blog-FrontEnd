import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentTextBox from "./commentTextbox/CommentTextBox";
import CommentView from "./CommentView";

const Comments = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const user = window.localStorage.getItem("user");
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${postId}`);
        setComments(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchComments();
  }, [commentInput]);

  // comment state being changed
  const handleChange = (e) => {
    e.preventDefault();
    setCommentInput(e.target.value);
  };

  //comment post api
  const handleComment = (e) => {
    e.preventDefault();
    try {
      axios
        .post("/comments", {
          username: user,
          postId: postId,
          desc: commentInput,
        })
        .then(() => setCommentInput(""));
    } catch (err) {
      console.log(err);
    }
  };
  console.log(commentInput);
  return (
    <>
      <div className="commentContainer">
        <CommentTextBox
          handleComment={handleComment}
          handleChange={handleChange}
          comment={commentInput}
        />
        {comments &&
          comments.map((ele) => <CommentView key={ele._id} comment={ele} />)}
        {!comments && <p>no comments</p>}
      </div>
    </>
  );
};

// #endregion

export default Comments;
