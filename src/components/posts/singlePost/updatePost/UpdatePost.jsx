import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import ViewImage from "../viewImage/ViewImage";
import PostTitle from "../../writePost/postTitle/PostTitle";
import PostImg from "../../writePost/postImg/PostImg";
import PostDesc from "../../writePost/postDesc/PostDesc";
import { GetPostImage } from "../../../../utils/httpRequests/HttpRequest";
import PostContext from "../../../../authContext/postContext";
import "./updatePost.css";

const UpdatePost = () => {
  // const context = useContext(AuthContext);
  const imageCtx = useContext(PostContext);
  const navigate = useNavigate();

  const [post, setPost] = useState({});
  const location = useLocation();

  const [view, setView] = useState(false);
  const [imageKey, setImageKey] = useState();
  const [imageId, setImageId] = useState();

  const username = window.localStorage.getItem("user");

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
      await axios.delete(`/posts/${post._id}`, {});
      window.location.replace("/posts");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setPost({ ...post, [event.target.id]: event.target.value });
  };

  const handleUpdate = async () => {
    try {
      const edit = await axios.put(`/posts/${postId}/${imageCtx.imageId}`, {
        _id: postId,
        username: username,
        postTitle: post.postTitle,
        postDesc: post.postDesc,
      });
      console.log("POSTED");
      //   navigate(`/posts/${postId}`)
    } catch (err) {
      console.log(err);
    }
  };
console.log(imageKey)
  return (
    <>
      <div>
        <form className="update-post-container" onSubmit={handleUpdate}>
          <PostTitle postTitle={post.postTitle} handleChange={handleChange} />
          <PostDesc postDesc={post.postDesc} handleChange={handleChange} />
          <PostImg />
          {imageKey && <ViewImage imageKey={imageKey} />}
          {!imageKey && <p>No Current Image</p>}
          <button type="submit">Update</button>
          <button type="submit" onClick={handleDelete}>
            Delete post
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdatePost;
