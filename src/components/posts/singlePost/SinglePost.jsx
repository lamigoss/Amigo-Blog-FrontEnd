import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SinglePost() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [updateMode, setUpdateMode] = useState(false);

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
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${postId}`, {
        _id: postId,
        userId: "6344c9d878ed99b6e34b2cdf", // this userId needs to be ref not hardcoded
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
      <button
        className="singlePostIcon far fa-edit"
        onClick={() => setUpdateMode(true)}
      >
        update this post
      </button>
      <div className="singlePostWrapper">
        {post.postImg && <img src={""} alt="" className="singlePostImg" />}
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
        {post.postTitle && (
          <h1 className="singlePostTitle">{post.postTitle}</h1>
        )}
        <div className="singlePostDesc">{post.postDesc}</div>
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
        <button onClick={handleDelete}>Delete this post</button>
      </div>
    </div>
  );
}
