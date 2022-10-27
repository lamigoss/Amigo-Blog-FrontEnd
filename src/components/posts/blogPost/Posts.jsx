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
      <div className="bg-white rounded-md p-1 m-5 h-50 w-60 hover:scale-150">
        <Link to={`/posts/${post._id}`}>
          <div className="scale-100">
            <div className="">
              {!imageKey ? (
                <p>Loading</p>
              ) : (
                <div className="">
                  <ViewImg imageKey={imageKey} />
                </div>
              )}
            </div>
          </div>
          <div className="items-center">
            <span className="font-bold">{post.postTitle}</span>
            <div className="author">
              <span className="userName">
                <strong>Writer</strong>: {post.username}
              </span>
            </div>
            <span className="postsDesc">{post.postDesc}</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Posts;
