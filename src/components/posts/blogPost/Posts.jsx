import React, { useState, useEffect } from "react";
import ViewImg from "../writePost/viewImg/ViewImg";
import "./posts.css";
import { Link } from "react-router-dom";
import { GetPostImage } from "../../../utils/httpRequests/HttpRequest";

const Posts = ({ post }) => {
  const [imageKey, setImageKey] = useState();

  useEffect(() => {
    GetPostImage(post.imageId).then((res) => setImageKey(res.data.imageKey));
  }, []);
  return (
    <>
      <div className="postsContainer">
        <div className="postsWrapper">
          <div className="postsTop">
            <Link to={`/posts/${post._id}`}>
              {!imageKey ? <p>Loading</p> : <ViewImg imageKey={imageKey} />}
            </Link>
            <div className="postsTopLeft">
              <span className="userName">{post.username}</span>
            </div>
            <div className="postsCeter">
              <span className="postTitle">{post.postTitle}</span>
            </div>
            <div className="postsBottom">
              <span className="postsDesc">{post.postDesc}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
