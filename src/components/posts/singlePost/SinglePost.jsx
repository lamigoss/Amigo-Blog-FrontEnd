import React, { useState, useEffect, useContext } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../authContext/authContext";
import PostContext from "../../../authContext/postContext";
import axios from "axios";
import Comment from "./comment/Comment";
import { GetPostImage } from "../../../utils/httpRequests/HttpRequest";
import ViewImage from "./viewImage/ViewImage";
import CommentTextBox from "./comment/commentTextbox/CommentTextBox";
import "./singlepost.css";
import Edit from "../../../img/edit.png";
import Delete from "../../../img/delete.png";
import PostImg from "../writePost/postImg/PostImg";
import { GetPost } from "../../../utils/httpRequests/HttpRequest";

export default function SinglePost() {
  const context = useContext(AuthContext);
  const imageCtx = useContext(PostContext);
  const navigate = useNavigate();

  const [post, setPost] = useState();
  const location = useLocation();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [updateMode, setUpdateMode] = useState(false);
  const [view, setView] = useState(false);
  const [imageKey, setImageKey] = useState();
  const [imageId, setImageId] = useState();

  const username = window.localStorage.getItem("user");

  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    console.log("IN USE EFFECT");
    const fetchData = async() => {
      try {
        const getPost = await GetPost(postId)
        setPost(getPost)
        console.log(post)
      } catch(error) {
        console.log(error)
      }
    }

    fetchData()

    // const getPost = GetPost(postId)
    //   .then((res) => setPost(res))
    //   .then(() => {
    //     GetPostImage(post.imageId)
    //   });
    // console.log(post);
    // setTitle(getPost.data.postTitle);
    // setDesc(res.data.postDesc);
    // console.log(res.data)
    // GetPostImage(res.data.imageId).then((res) => {
    //   setImageId(res.data._id)
    //   setImageKey(res.data.imageKey);
    // });
    // console.log("this is singlepost: " + post.imageId);
    // console.log("postId: " + post.postId);
  }, []);
  console.log(post)
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {});
      window.location.replace("/posts");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      const edit = await axios.put(`/posts/${postId}/${imageCtx.imageId}`, {
        _id: postId,
        username: username,
        postTitle: title,
        postDesc: desc,
      });
      console.log(edit.data);
      navigate(`/posts/${postId}`);

      // console.log(edit.data)
    } catch (err) {
      console.log(err);
    }
    setUpdateMode(false);
    console.log("update clicked");
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
                navigate(`/posts/${postId}/updatePost`);
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
        <div className="author">Author: </div>

        {updateMode ? (
          <textarea
            className="singlePostDescinput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc"></p>
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
