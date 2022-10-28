import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../../authContext/authContext";
import axios from "axios";
import Comments from "./comment/Comments";
import { GetPostImage } from "../../../utils/httpRequests/HttpRequest";
import ViewImage from "./viewImage/ViewImage";
import updateButton from "../../../img/edit.png";
import deleteButton from "../../../img/delete.png";
import CommentTextBox from "./comment/commentTextbox/CommentTextBox";

// import "./singlepost.css";

export default function SinglePost() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const location = useLocation();
  // const [view, setView] = useState(false);
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
  }, []);

  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`/posts/${post._id}`);
  //     window.location.replace("/posts");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="grid border-l border-r ">
      <div className="m-10 justify-self-center justify-center border-blue-800  h-full ml-10 mr-10">
        <span className=" grid grid-cols-2 pt-4 pl-6 pb-2 pr-10">
          <img
            className="w-10 h-10 rounded-full col-end-1"
            src="https://assets.vogue.com/photos/594be9149a441f6fe326781f/master/w_2560%2Cc_limit/00-lede-emma-watson-celeb-bty.jpg"
          />
          <div className="mt-3">
            <span className="text-xl ml-5 text-neutral-400">{post.username}</span>
          </div>
        </span>
      </div>
      <div className="flex items-center justify-center h-full ml-10 mr-10">
        <div className="grid grid-cols-[60%_40%] text-black w-full h-full ml-10 mr-10">
          <div className="grid-rows-2">
            <h2 className="text-center text-6xl text-blue-800 break-words">
              {post.postTitle}

              {/* {context.admin && (
                <img
                className="button"
                src={updateButton}
                alt=""
                onClick={() => {
                  navigate(`/posts/${postId}/updatePost`);
                }}
                />
                )}
                
                {context.admin && (
                  <img
                  className="button"
                  src={deleteButton}
                  alt=""
                  onClick={handleDelete}
                  />
                )} */}
            </h2>
            <div className="pt-4 pl-6 pb-2 pr-10 justify-self-center w-2/5">
              {!imageKey && null}
              {imageKey && <ViewImage imageKey={imageKey} />}
            </div>
            <h3 className="text-left mt-10 break-all w-full">{post.postDesc}</h3>
          </div>
          <div className="ml-10">
            <div>
              {/* {view ? null : (
                <button className="viewComment" onClick={() => setView(true)}>
                  view comments
                </button>
              )} */}
              {/* {view && ( */}
                <div className="">
                  {/* <button onClick={() => setView(false)}>hide comments</button> */}
                  {/* <div className="">
                    <CommentTextBox />
                  </div> */}
                  <Comments />
                </div>
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
