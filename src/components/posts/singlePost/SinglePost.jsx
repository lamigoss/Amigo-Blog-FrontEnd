import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../../authContext/authContext";
import axios from "axios";
import Comments from "./comment/Comments";
import { GetPostImage } from "../../../utils/httpRequests/HttpRequest";
import ViewImage from "./viewImage/ViewImage";
import updateButton from "../../../img/edit.png";
import deleteButton from "../../../img/delete.png";

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
    <div className="grid">
      <div className="m-10 justify-self-center justify-center border-blue-800  h-full ml-10 mr-10">
        <span className=" grid grid-cols-2 pt-4 pl-6 pb-2 pr-10">
          <div className="mt-3">
            <h2 className="text-center text-6xl text-blue-800 break-words">
              {post.postTitle}
            </h2>
          </div>
        </span>
      </div>
      <div className="flex items-center justify-center h-full ml-10 mr-10">
        <div className="grid grid-cols-[60%_40%] text-black w-full h-full ml-10 mr-10">
          <div className="grid-rows-2">
            <span className="text-xl ml-5 text-neutral-400">
              {post.username}
            </span>
            <div className="pt-4 pl-6 pb-2 pr-10 justify-self-center w-2/5">
              {imageKey ? <ViewImage imageKey={imageKey} /> : null}
            </div>
            <div className="w-2/5 m-2 flex">
              {context.admin ? (
                <img
                  className="w-1/12 m-1"
                  src={updateButton}
                  alt=""
                  onClick={() => {
                    navigate(`/posts/${postId}/updatePost`);
                  }}
                />
              ) : null}

              {context.admin ? (
                <img
                  className="w-1/12 m-1"
                  src={deleteButton}
                  alt=""
                  onClick={handleDelete}
                />
              ) : null}
            </div>
          </div>

          <h3 className="text-left mt-10 break-word w-full">{post.postDesc}</h3>
        </div>
      </div>

      <div className="m-20">
        <div>
          {view ? null : (
            <button className="viewComment" onClick={() => setView(true)}>
              view comments
            </button>
          )}
          <div className="">
            {view ? (
              <>
                <button onClick={() => setView(false)}>hide comments</button>
                <Comments />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
