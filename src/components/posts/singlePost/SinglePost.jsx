import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import AuthContext from "../../../authContext/authContext";
import axios from "axios";
import Comment from "./comment/Comment";

export default function SinglePost() {
  const context = useContext(AuthContext);
  const [post, setPost] = useState({});
  const location = useLocation();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [updateMode, setUpdateMode] = useState(false);
  const [view, setView] = useState(false);

  const username = window.localStorage.getItem("user");

  // const post = "http://localhost:3000/posts/63460e4115d974d2c5a118ac";

  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
        setTitle(res.data.postTitle);
        setDesc(res.data.postDesc);
      } catch (error) {}
    };
    getPost();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {});
      window.location.replace("/posts");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${postId}`, {
        _id: postId,
        username: username,
        postTitle: title,
        postDesc: desc,
      });
    } catch (err) {
      console.log(err);
    }
    setUpdateMode(false);
    console.log("update clicked");
  };

  return (
    <div className="singlePostContainer">
      {updateMode
        ? ""
        : context.admin && (
            <button
              className="btn btn-primart mb-5"
              onClick={() => {
                setUpdateMode(true);
              }}
            >
              update this post
            </button>
          )}
      <div className="singlePostWrapper">
        {/* {post.postImg && <img src={""} alt="" className="singlePostImg" />} */}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">{title}</h1>
        )}
        <div className="author">Author:{post.username}</div>

        {updateMode ? (
          <textarea
            className="singlePostDescinput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}

        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
        {context.admin && (
          <button onClick={handleDelete}>Delete this post</button>
        )}
      </div>
      {!updateMode && (
        <div>
          {view ? (
            ""
          ) : (
            <button className="viewComment" onClick={() => setView(true)}>
              view comments
            </button>
          )}
          {view && (
            <div className="commentsContainer">
              <button onClick={() => setView(false)}>hide comments</button>
              <Comment />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
