import React, { useState, useEffect } from "react";
import "./posts.css";
// import { format } from "timeago.js";
import axios from "axios";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
const Posts = ({ post }) => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get(`/`);
  //     setPosts(res.data);
  //   };
  //   fetchData();
  // }, [posts.data]);

  return (
    <>

      <div className="postsContainer">
        <div className="postsWrapper">
          <div className="postsTop">
            <div className="postsTopLeft">
              <img
                src="/assets/person/1.jpeg"
                alt=""
                className="profilePicture"
              />
              <span className="userName">{}</span>
              {/* <span className="postDate">{format(post.createdAt)}</span> */}
            </div>
            <div className="postsCeter">
              <span className="postTitle">{post.postTitle}</span>
              <img src="/assets/posts/1.jpeg" alt="" className="postsImg" />
            </div>
            <div className="postsBottom">
              <span className="postsDesc">{post.postDesc}</span>
              <div className="postsBottomLeft">
                <img src="/assets/like.png" alt="" className="likeIcon" />
                <ChatOutlinedIcon className="postsCommentText" />
              </div>

              {/* <div className="postsBottomRight">
                <ChatOutlinedIcon className="postsCommentText" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div>this is the post page</div>
    </>
  );
};

export default Posts;
