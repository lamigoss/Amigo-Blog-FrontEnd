import React, { useState, useEffect } from "react";
import ViewImg from "../writePost/viewImg/ViewImg";
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
          <div className="bg-white bg-opacity-50 text-black shadow-lg rounded-md w-2/5 h-4/6">
            <div className="grid grid-rows-[20%_80%]">
              <div className="text-slate-800 ">
                <div className="grid grid-cols-[15%_85%] border-b-[.5px] border-blue-200 pt-4 pl-6 pb-2 pr-10">
                  <div className="mt-3">
                    <span>{post.username}</span>
                  </div>
                </div>
              </div>
              <div className="justify-self-center">
                <div className="">
                  <span className="font-bold">{post.postTitle}</span>
                </div>
                <div className="">
                  {!imageKey ? <p>Loading</p> : <ViewImg imageKey={imageKey} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Posts;
