import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  GetPost,
  DeletePost,
  GetPostImage,
} from "../../../utils/httpRequests/HttpRequest";
import AuthContext from "../../../authContext/authContext";
import updateButton from "../../../img/edit.png";
import deleteButton from "../../../img/delete.png";

import Comments from "./comment/Comments";
import ViewImg from "../writePost/viewImg/ViewImg";

const SinglePost = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [imageKey, setImageKey] = useState();
  const { postId } = useParams();
  const [view, setView] = useState(false);
  const date = new Date(post.updatedAt);
  const formattedDate = date.toLocaleString("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await GetPost(postId).then((res) => {
          setPost(res);
          return res;
        });
        await GetPostImage(res.imageId).then((res) =>
          setImageKey(res.data.imageKey)
        );
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, []);

  const handleDelete = async () => {
    try {
      await DeletePost(post._id).then(() => navigate("/posts"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-10/12 desktopLG:w-6/12 tablet:w-8/12 mobile:mt-20 h-full laptop:mr-10 laptop:ml-10  mt-20">
        <div className="laptop:ml-40 laptop:mr-40 tablet:mt-20 mobile:mt-10 mt-32">
          <h2 className="text-center laptop:text-6xl tablet:text-5xl mobile:text-4xl text-blue-800 break-words mb-10">
            {post.postTitle}
          </h2>
          <div className="flex border-t-[1px]">
            <span className="laptop:text-2xl mobile:text-xs ml-5 text-neutral-500 mt-2">
              {post.username}
            </span>
            <div className="flex opacity-70 scale-75 sm:scale-50">
              {context.admin ? (
                <img
                  className="cursor-pointer scale-75"
                  src={updateButton}
                  alt=""
                  onClick={() => {
                    navigate(`/posts/${postId}/updatePost`);
                  }}
                />
              ) : null}

              {context.admin ? (
                <img
                  className="cursor-pointer scale-75"
                  src={deleteButton}
                  alt=""
                  onClick={handleDelete}
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="laptop:grid laptop:grid-cols-2 tablet:mt-20 laptop:mt-32 mobile:mt-10 border-b-[1px]">
          <div className="laptop:w-5/6 tablet:w-7/12 mobile:w-6/12 mobile:mb-10 place-content-center">
            {!imageKey ? (
              <p>Loading</p>
            ) : (
              <ViewImg key={imageKey._id} imageKey={imageKey} />
            )}
          </div>
          <div className="">
            <span className="text-neutral-400"> {formattedDate}</span>

            <h3 className="tablet:mt-20 laptop:mt-0 tablet:text-sm mobile:text-xs text-left break-word mb-20">
              {post.postDesc}
            </h3>
          </div>
        </div>
        <div className="flex justify-center mt-20 mb-32 items-center">
          <div className="grow">
            {!view && (
              <button
                className="tablet:text-xs laptop:text-sm mobile:text-xs"
                onClick={() => setView(true)}
              >
                view comments
              </button>
            )}
            {view && (
              <>
                <button
                  onClick={() => setView(false)}
                  className="laptop:text-sm mobile:text-xs"
                >
                  hide comments
                </button>
                <Comments />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
