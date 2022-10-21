import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import ViewImage from "../viewImage/ViewImage";
import PostTitle from "../../writePost/postTitle/PostTitle";
import PostImg from "../../writePost/postImg/PostImg";
import PostDesc from "../../writePost/postDesc/PostDesc";
import { GetPostImage } from "../../../../utils/httpRequests/HttpRequest";
import PostContext from "../../../../authContext/postContext";
import { Edit } from "@mui/icons-material";
import { Delete } from "@mui/icons-material";
import "./updatePost.css";

const UpdatePost = () => {
  // const context = useContext(AuthContext);
  const imageCtx = useContext(PostContext);
  const [post, setPost] = useState({
    username: '',
    postTitle: '',
    postDesc: '',
  });
  const location = useLocation();
  const [imageKey, setImageKey] = useState();

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

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${postId}/${imageCtx.imageId}`, {
        _id: postId,
        username: username,
        postTitle: post.postTitle,
        postDesc: post.postDesc,
      });
      window.location.replace("/updatePost");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
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
