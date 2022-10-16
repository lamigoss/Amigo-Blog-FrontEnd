import React from "react";
import Posts from "../../components/posts/blogPost/Posts";
import { useState, useEffect } from "react";
import axios from "axios";
import "./blogPostPage.css";

export default function BlogPostPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8800/api/posts/");
      setPosts(res.data);
      // console.log(posts.length);
      // console.log(res)
    };
    fetchData();
  }, []);

  //pagination needs to be added

  return (
    <>
      <div className="postingContainer">
        {posts.map((posting) => (
          <Posts key={posting._id} post={posting} />
        ))}
        {/* <Posts /> */}
      </div>
    </>
  );
}
