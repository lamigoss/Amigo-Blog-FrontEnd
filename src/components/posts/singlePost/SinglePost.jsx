import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../../authContext/authContext";
import axios from "axios";
import Comments from "./comment/Comments";
import { GetPostImage } from "../../../utils/httpRequests/HttpRequest";
import ViewImage from "./viewImage/ViewImage";
import CommentTextBox from "./comment/commentTextbox/CommentTextBox";
import updateButton from "../../../img/edit.png";
import deleteButton from "../../../img/delete.png";

export default function SinglePost() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const location = useLocation();
  const [view, setView] = useState(false);
  const [imageKey, setImageKey] = useState();
  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    console.log("IN USE EFFECT");
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
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`);
      window.location.replace("/posts");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center w-3/5 h-4/6 justify-center">
      <div className="grid grid-rows-2">
        <div className="">
          {imageKey ? <ViewImage imageKey={imageKey} /> : null}
        </div>

        <div className="text-center underline">
          <h3>{post.postTitle}</h3>
          <h3>{post.username}</h3>

          <div className="">
            <h3>{post.postDesc}</h3>
          </div>
        </div>

        <div className="flex opacity-70">
          <div className="h-10 w-10">
            {context.admin ? (
              <img
                className="hover:scale-110 cursor-pointer"
                src={updateButton}
                alt=""
                onClick={() => {
                  navigate(`/posts/${postId}/updatePost`);
                }}
              />
            ) : null}
          </div>
          <div className="h-10 w-10">
            {context.admin ? (
              <img
                className="hover:scale-110 cursor-pointer"
                src={deleteButton}
                alt=""
                onClick={handleDelete}
              />
            ) : null}
          </div>
        </div>

        <div className="">
          {view ? null : (
            <button className="" onClick={() => setView(true)}>
              view comments
            </button>
          )}
          {view && (
            <div className="commentsContainer">
              <button onClick={() => setView(false)}>hide comments</button>
              <div className="commentBox">
                <CommentTextBox />
              </div>
              <Comments postId={postId} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
