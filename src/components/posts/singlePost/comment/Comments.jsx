import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CommentView from "./CommentView";
import CommentTextBox from "./commentTextbox/CommentTextBox";
import AuthContext from "../../../../authContext/authContext";

const Comments = () => {
  const context = useContext(AuthContext)
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

  return (
    <>
      <div className="commentContainer">
        {context.isLoggedIn && <CommentTextBox
          handleComment={handleComment}
          handleChange={handleChange}
          comment={commentInput}
        />}
        {comments ? (
          comments.map((ele) => <CommentView key={ele._id} comment={ele} />)
        ) : (
          <p>no comments</p>
        )}
      </div>
    </>
  );
};

// #endregion

export default Comments;
