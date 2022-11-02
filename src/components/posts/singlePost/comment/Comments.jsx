import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CommentView from "./CommentView";
import CommentTextBox from "./commentTextbox/CommentTextBox";
import AuthContext from "../../../../authContext/authContext";

const Comments = () => {
  const context = useContext(AuthContext);
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
  
      <div className="">
        <div className="w-full mb-4">
          <CommentTextBox
            handleComment={handleComment}
            handleChange={handleChange}
            comment={commentInput}
          />
        </div>

        <div className="bg-slate-200 border-solid-2 rounded-lg p-10 shadow-lg">
          {!context.isLoggedIn && <p className="tablet:text-xs laptop:text-sm">Please log in to write a comment</p>}
          {comments ? (
            comments.slice(0).reverse().map((ele) => <CommentView key={ele._id} comment={ele} />)
          ) : (
            <p className="tablet:text-xs laptop:text-sm">no comments</p>
          )}
        </div>
      </div>
  
  );
};

// #endregion

export default Comments;
