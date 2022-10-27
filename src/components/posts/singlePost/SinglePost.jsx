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
      <div className="grid grid-cols-3">
        {imageKey ? (
          <div className="scale-70 m-10">
            <ViewImage imageKey={imageKey} />
          </div>
        ) : null}
        <div>
          <div className="grid scale-50 grid-cols-2">
            <div className="scale-50">
              {context.admin ? (
                <img
                  className="scale-50"
                  src={updateButton}
                  alt=""
                  onClick={() => {
                    navigate(`/posts/${postId}/updatePost`);
                  }}
                />
              ) : null}

              {context.admin ? (
                <img
                  className="scale-50"
                  src={deleteButton}
                  alt=""
                  onClick={handleDelete}
                />
              ) : null}
            </div>
          </div>
          <h3>{post.postTitle}</h3>
          <h3>{post.username}</h3>
        </div>
        <div>
          <h3>{post.postDesc}</h3>
        </div>
      </div>

      <div>
        {view ? null : (
          <button className="contents-center" onClick={() => setView(true)}>
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
