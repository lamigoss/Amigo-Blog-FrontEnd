import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../../authContext/authContext";
import axios from "axios";
import Comments from "./comment/Comments";
import { GetPostImage } from "../../../utils/httpRequests/HttpRequest";
import ViewImg from "../writePost/viewImg/ViewImg";
// import updateButton from "../../../img/edit.png";
// import deleteButton from "../../../img/delete.png";

export default function SinglePost() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const location = useLocation();
  const [imageKey, setImageKey] = useState();
  const postId = location.pathname.split("/")[2];
  const [view, setView] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
        GetPostImage(res.data.imageId).then((res) =>
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
      await axios.delete(`/posts/${post._id}`);
      window.location.replace("/posts");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-10/12 desktopLG:w-6/12 tablet:w-8/12 h-full laptop:mr-10 laptop:ml-10 border-t-[1px] mt-20">
        <span className="text-xl ml-5 text-neutral-400">{post.username}</span>
        <div className="laptop:ml-40 laptop:mr-40 tablet:mt-20 mt-32">
          <h2 className="text-center laptop:text-6xl tablet:text-5xl text-blue-800 break-words">
            {post.postTitle}
          </h2>
        </div>
        <div className="laptop:grid laptop:grid-cols-2 tablet:mt-20 laptop:mt-32 border-b-[1px]">
          <div className="laptop:w-5/6 tablet:w-7/12 place-content-center">
            {!imageKey ? (
              <p>Loading</p>
            ) : (
              <ViewImg key={imageKey._id} imageKey={imageKey} />
            )}
          </div>
          <div className="">
            <h3 className="tablet:mt-20 laptop:mt-0 tablet:text-sm text-left break-word mb-20">{post.postDesc}</h3>
          </div>
        </div>

        {/* {context.admin ? (
        <img
          className=""
          src={updateButton}
          alt=""
          onClick={() => {
            navigate(`/posts/${postId}/updatePost`);
          }}
        />
      ) : null}

      {context.admin ? (
        <img className="" src={deleteButton} alt="" onClick={handleDelete} />
      ) : null} */}
        <div className="flex justify-center mt-20 mb-32 items-center">
          <div className="grow">
          {!view && (
              <button className="tablet:text-xs laptop:text-sm" onClick={() => setView(true)}>
                view comments
              </button>
          )}
          {view && (
            <>
              <button onClick={() => setView(false)} className='tablet:text-xs laptop:text-sm'>hide comments</button>
              <Comments />
            </>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
