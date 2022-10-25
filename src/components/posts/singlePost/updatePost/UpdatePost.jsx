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
  const navigate = useNavigate();
  const imageCtx = useContext(PostContext);
  const [post, setPost] = useState({
    username: "",
    postTitle: "",
    postDesc: "",
  });
  const location = useLocation();
  const [imageKey, setImageKey] = useState("");
  const username = window.localStorage.getItem("user");
  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    window.localStorage.removeItem("imageId");
    const getPost = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
        const imgRes = await GetPostImage(res.data.imageId);
        setImageKey(imgRes.data.imageKey);
      } catch (error) {
        console.log(error);
      }
    };
    imageCtx.setImageId("");
    getPost();
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setPost({ ...post, [event.target.id]: event.target.value });
  };

  const handleDeleteImg = async () => {
    window.localStorage.removeItem("imageId");
    window.localStorage.removeItem("imageKey");
    try {
      const res = await axios.delete(
        `/images/${postId}/${imageKey}/${post.imageId}`
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = async () => {
    try {
      if (!imageCtx.imageId) {
        await axios.put(`/posts/${postId}`, {
          _id: postId,
          username: username,
          postTitle: post.postTitle,
          postDesc: post.postDesc,
        });

        navigate(`/posts`);
      } else {
        await axios.put(`/posts/${postId}/${imageCtx.imageId}`, {
          _id: postId,
          username: username,
          postTitle: post.postTitle,
          postDesc: post.postDesc,
        });
        navigate(`/posts`);
      }
    } catch (err) {
      console.log(err + post.postTitle);
    }
  };

  return (
    <div className="update-post-container">
      <div className="update-post-form-wrapper">
        <form className="update-post-form" onSubmit={handleUpdate}>
          <PostTitle postTitle={post.postTitle} handleChange={handleChange} />
          <PostDesc postDesc={post.postDesc} handleChange={handleChange} />
          {!imageKey && <PostImg />}
          <div className="update-image-wrapper">
            {imageKey && <ViewImage imageKey={imageKey} />}
            {imageKey && null}
            {imageKey && (
              <button onClick={handleDeleteImg}>Delete Image</button>
            )}
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
