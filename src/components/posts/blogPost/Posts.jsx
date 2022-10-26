import React, { useState, useEffect } from "react";
import ViewImg from "../writePost/viewImg/ViewImg";
// import "./posts.css";
import { Link } from "react-router-dom";
import { GetPostImage } from "../../../utils/httpRequests/HttpRequest";

const Posts = ({ post }) => {
  const [imageKey, setImageKey] = useState();

  useEffect(() => {
    GetPostImage(post.imageId).then((res) => setImageKey(res.data.imageKey));
  }, []);
  return (
    <>
      <Link to={`/posts/${post._id}`}>
        <div className="border-4 border-black rounded-md flex items-center">
          <div className="postsWrapper">
            <div className="postsTop">
              <div className="">
                {!imageKey ? <p>Loading</p> : <ViewImg imageKey={imageKey} />}
              </div>

              <span className="font-bold">{post.postTitle}</span>
              <div className="author">
                <span className="userName">
                  <strong>Writer</strong>: {post.username}
                </span>
              </div>
              <span className="postsDesc">{post.postDesc}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Posts;
