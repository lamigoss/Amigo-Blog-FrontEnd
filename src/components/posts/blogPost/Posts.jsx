import React, { useState, useEffect } from "react";
import ViewImg from "../writePost/viewImg/ViewImg";
import { Link } from "react-router-dom";
import { GetPostImage } from "../../../utils/httpRequests/HttpRequest";

const Posts = ({ post }) => {
  const [imageKey, setImageKey] = useState();
  const date = new Date(post.updatedAt);
  const formattedDate = date.toLocaleString("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    GetPostImage(post.imageId).then((res) => setImageKey(res.data.imageKey));
  }, []);

  return (
    <>
      <div className="hover:scale-110 hover:bg-indigo-200">
        <Link to={`/posts/${post._id}`}>
          <div className="grid grid-row-reverse justify-items-center">
            <div className="grid grid-cols-2 w-6/12 border-b-[.5px] border-gray-300 ">
              <div className="grid grid-rows-[20%_80%] mt-5 mb-5">
                <span className="text-blue-500 mobile:text-xs tablet:text-sm">
                  {post.username}
                </span>
                <div className="grid">
                  <span className="font-bold mobile:text-sm tablet:text-lg laptop:text-xl">
                    {post.postTitle}
                  </span>
                  <span className="mobile:text-xs tablet:text-sm text-gray-400">
                    {formattedDate}
                  </span>
                </div>
              </div>
              <div className="mobile:w-7/12 tablet:w-4/12 mobile:mb-10 justify-self-end mt-5">
                {!imageKey ? <p>Loading</p> : <ViewImg imageKey={imageKey} />}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Posts;
