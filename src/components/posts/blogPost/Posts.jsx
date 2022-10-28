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
        <div className="flex items-center justify-center mt-40">
          <div className="bg-white bg-opacity-50 text-black shadow-lg rounded-md w-3/5 h-4/6">
            <div className="grid grid-cols-[30%_70%] gap-1">
              <div className="grid grid-row-[20%_80%] text-slate-800 border-b-[.5px] border-blue-200 pt-4 pl-6 pb-2 pr-10">
                <div className="border-b-[.5px] border-blue-500">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://assets.vogue.com/photos/594be9149a441f6fe326781f/master/w_2560%2Cc_limit/00-lede-emma-watson-celeb-bty.jpg"
                  />
                </div>
                <span className="">{post.username}</span>
              </div>
              <div className="border-l-[.5px] border-blue-200 pt-4 pl-6 pb-2 pr-10">
                <div className="">
                  <span className="font-bold">{post.postTitle}</span>
                </div>
                <div className="">
                  {!imageKey ? <p>Loading</p> : <ViewImg imageKey={imageKey} />}
                </div>
                <div>
                  <span className="postsDesc">{post.postDesc}</span>
                </div>
              </div>
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
      </div>
        </Link>
    </>
  );
};

export default Posts;
