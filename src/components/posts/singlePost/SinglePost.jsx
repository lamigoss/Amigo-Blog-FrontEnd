import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SinglePost() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  // const post = "http://localhost:3000/posts/63460e4115d974d2c5a118ac";

  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
        console.log(res.data);
        console.log(navigate);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div className="singlePostContainer">
      <div className="singlePostWrapper">
        <img src={post.postImg} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">{post.postTitle}</h1>
        <div className="singlePostDesc">{post.postDesc}</div>
      </div>
      <div className="button">
        <Link to="/posts">
          <button className="goBacktoPost">Go Back to Posts Page</button>
        </Link>
        <Link to="/posts/create">
          <button className="goBacktoPost">Update this post</button>
        </Link>
      </div>
    </div>
  );
}
