import React, { useState, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import AuthContext from "../../../authContext/authContext";
import axios from "axios";
import Comment from "./comment/Comment";
import { GetPostImage } from "../../../utils/httpRequests/HttpRequest";
import ViewImage from "./viewImage/ViewImage";
import CommentTextBox from "./comment/commentTextbox/CommentTextBox";
import "./singlepost.css";
import Edit from "../../../img/edit.png";
import Delete from "../../../img/delete.png";
import PostImg from "../writePost/postImg/PostImg";

export default function SinglePost() {
  const context = useContext(AuthContext);
  const [post, setPost] = useState({});
  const location = useLocation();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [updateMode, setUpdateMode] = useState(false);
  const [view, setView] = useState(false);
  const [imageKey, setImageKey] = useState();

  const username = window.localStorage.getItem("user");

  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
        setTitle(res.data.postTitle);
        setDesc(res.data.postDesc);

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
      console.log("desc: ", desc);
    } catch (err) {
      console.log(err);
    }
    setUpdateMode(false);
  };

  return (
    <div className="singlePostContainer">
      <div className="edit">
        <Link
          to={`/write?edit=6350785ecfaf3bf595a78d76`}
          className="editButton"
          state={post}
        >
          <img src={Edit} alt="" />
        </Link>
      </div>
      <div className="delete">
        <img src={Delete} alt="" className="editButton" />
      </div>
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
        {updateMode ? (
          <PostImg />
        ) : !imageKey ? null : (
          <ViewImage imageKey={imageKey} />
        )}

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
        <div className="author">Author: {post.username}</div>

        {updateMode ? (
          <textarea
            className="singlePostDescinput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{post.postDesc}</p>
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
              <div className="commentBox">
                <CommentTextBox />
              </div>
              <Comment />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
