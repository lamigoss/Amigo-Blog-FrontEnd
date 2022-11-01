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
    <div className="">
      <div className="w-2/">
        <h2 className="text-center text-6xl text-blue-800 break-words">
          {post.postTitle}
        </h2>
        <span className="text-xl ml-5 text-neutral-400">{post.username}</span>
        <div className="justify-self-center w-2/3">
          {!imageKey ? (
            <p>Loading</p>
          ) : (
            <ViewImg key={imageKey._id} imageKey={imageKey} />
          )}
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

        <h3 className="text-left mt-10 break-word w-full">{post.postDesc}</h3>

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
  );
}
