import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import ViewImage from "../viewImage/ViewImage";
import PostTitle from "../../writePost/postTitle/PostTitle";
import PostImg from "../../writePost/postImg/PostImg";
import PostDesc from "../../writePost/postDesc/PostDesc";
import { GetPostImage } from "../../../../utils/httpRequests/HttpRequest";
import PostContext from "../../../../authContext/postContext";
// import { Edit } from "@mui/icons-material";
// import { Delete } from "@mui/icons-material";
import "./updatePost.css";

const UpdatePost = () => {
    const navigate = useNavigate()
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
    console.log("IN USE EFFECT");
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

  const handleChange = (event) => {
    event.preventDefault();
    setPost({ ...post, [event.target.id]: event.target.value });
  };
  const handleDeleteImg = async () => {
    try {
        const res = await axios.delete(`/images/${postId}/${imageKey}/${post.imageId}`)
        setPost(res.data)
        setImageKey(undefined)
    }catch (error) {
        console.log(error)
    }
  }

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${postId}/${imageCtx.imageId}`, {
        _id: postId,
        username: username,
        postTitle: post.postTitle,
        postDesc: post.postDesc,
      });
      navigate(`/posts/${post._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="update-post-container">
      {/* <div className="edit">
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
      </div> */}
      <div className="update-post-form-wrapper">
        <form className="update-post-form" onSubmit={handleUpdate}>
          <PostTitle postTitle={post.postTitle} handleChange={handleChange} />
          <PostDesc postDesc={post.postDesc} handleChange={handleChange} />
          {!imageKey && <PostImg />}
          <div className="update-image-wrapper">
            {imageKey && <ViewImage imageKey={imageKey} />}
            {imageKey && null}
            {imageKey && <button onClick={handleDeleteImg}>Delete Image</button>}
          </div>
          <button type="submit">Update</button>
          <button type="submit" onClick={handleDelete}>
            Delete post
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
