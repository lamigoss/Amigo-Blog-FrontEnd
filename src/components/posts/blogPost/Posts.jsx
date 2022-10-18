import React, { useState, useEffect } from "react";
import ViewImg from "../writePost/viewImg/ViewImg";
import "./posts.css";
import { Link } from "react-router-dom";
import { GetPostImage } from "../../../utils/httpRequests/HttpRequest";

const Posts = ({ post }) => {
<<<<<<< HEAD
  const [imageKey, setImageKey] = useState();
  console.log(post.imageId);
  useEffect(() => {
    GetPostImage(post.imageId).then((res) => setImageKey(res.data.imageKey));
  }, []);
=======
  const[imageKey, setImageKey] = useState()
  useEffect(() => {
    GetPostImage(post.imageId).then((res) => {
      setImageKey(res.data.imageKey)
    })
  },[])
>>>>>>> c9c5c31 (used useContext to pass imageId onto form field to submit for backend. Local storage caused issues where the new post uploaded the previous post imageid. To resolve that i set imageId state upon imageupload, then used that state to send in postblog request)
  return (
    <>
      <div className="postsContainer">
        <div className="postsWrapper">
          <div className="postsTop">
            <div className="postsTopLeft">
              <img
                src="/assets/person/1.jpeg"
                alt=""
                className="profilePicture"
              />
              <span className="userName">{post.username}</span>
            </div>
            <div className="postsCeter">
              <span className="postTitle">{post.postTitle}</span>
              {/* <img src="/assets/posts/1.jpeg" alt="" className="postsImg" /> */}
              {!imageKey ? null : <ViewImg imageKey={imageKey} />}
            </div>
            <div className="postsBottom">
              <span className="postsDesc">{post.postDesc}</span>
            </div>
          </div>
        </div>
        <Link to={`/posts/${post._id}`}>
          <button className="viewButton">!Click to view the post</button>
        </Link>
      </div>
    </>
  );
};

export default Posts;
