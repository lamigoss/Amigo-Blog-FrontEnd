import React from "react";
import Posts from "../../components/posts/blogPost/Posts";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BlogPostPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8800/api/posts/");
      setPosts(res.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="mt-20 mb-20">
        {posts ? (
          posts.slice().reverse().map((posting) => (
          <Posts key={posting._id} post={posting} />
          ))
        ) : (
          <p>loading</p>
        )}
      </div>
    </>
  );
}
