import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../../authContext/authContext";
import axios from "axios";
import Comments from "./comment/Comments";
import { GetPostImage } from "../../../utils/httpRequests/HttpRequest";
import ViewImage from "./viewImage/ViewImage";
import CommentTextBox from "./comment/commentTextbox/CommentTextBox";
import updateButton from "../../../img/edit.png";
import deleteButton from "../../../img/delete.png";

import "./singlepost.css";

export default function SinglePost() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const location = useLocation();
  const [view, setView] = useState(false);
  const [imageKey, setImageKey] = useState();
  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    console.log("IN USE EFFECT");
    const getPost = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
        GetPostImage(res.data.imageId).then((res) =>
          setImageKey(res.data.imageKey)
        );
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`);
      window.location.replace("/posts");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="singlePostContainer">
      <div className="singlePostWrapper">
        {!imageKey && null}
        {imageKey && <ViewImage imageKey={imageKey} />}

        <h2>
          {post.postTitle}

          {context.admin && (
            <img
              className="button"
              src={updateButton}
              alt=""
              onClick={() => {
                navigate(`/posts/${postId}/updatePost`);
              }}
            />
          )}

          {context.admin && (
            <img
              className="button"
              src={deleteButton}
              alt=""
              onClick={handleDelete}
            />
          )}
        </h2>

        <h3>{post.postDesc}</h3>
        <h3>{post.username}</h3>
      </div>

      <div>
        {view ? null : (
          <button className="viewComment" onClick={() => setView(true)}>
            view comments
          </button>
        )}
        {view && (
          <div className="commentsContainer">
            <button onClick={() => setView(false)}>hide comments</button>
            <div className="commentBox">
              <CommentTextBox />
            </div>
            <Comments postId={postId} />
          </div>
        )}
      </div>
    </div>
  );
}
