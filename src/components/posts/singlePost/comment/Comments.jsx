import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CommentView from "./CommentView";
import CommentTextBox from "./commentTextbox/CommentTextBox";
import AuthContext from "../../../../authContext/authContext";
import {
  GetComment,
  PostComment,
  DeleteComment,
} from "../../../../utils/httpRequests/HttpRequest";

const Comments = () => {
  const context = useContext(AuthContext);
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [deleteComment, setDeleteComment] = useState("");
  const user = window.localStorage.getItem("user");

  useEffect(() => {
    GetComment(postId)
      .then((res) => setComments(res))
      .catch((err) => console.log(err));
  }, [commentInput, deleteComment]);

  // comment state being changed
  const handleChange = (e) => {
    e.preventDefault();
    setCommentInput(e.target.value);
  };

  const handleComment = (event) => {
    event.preventDefault();
    PostComment(user, postId, commentInput)
      .then(() => setCommentInput(""))
      .catch((err) => console.log(err));
  };

  const handleDelete = async (event) => {
    DeleteComment(postId, event.target.id)
      .then(() => {
        const newComments = comments.filter(
          (comment) => comment._id !== event.target.id
        );
        setComments(newComments);
      })
      .catch((err) => console.log(err));
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
        {!context.isLoggedIn && (
          <p className="tablet:text-xs laptop:text-sm">
            Please log in to write a comment
          </p>
        )}
        {comments ? (
          comments
            .slice(0)
            .reverse()
            .map((ele) => (
              <CommentView
                key={ele._id}
                comment={ele}
                handleDelete={handleDelete}
              />
            ))
        ) : (
          <p className="tablet:text-xs laptop:text-sm">no comments</p>
        )}
      </div>
    </div>
  );
};

export default Comments;
