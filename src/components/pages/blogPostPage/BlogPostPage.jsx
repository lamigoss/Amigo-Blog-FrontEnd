import React from "react";
import Posts from "../../posts/blogPost/Posts";
import { useState, useEffect } from "react";
import { GetAllPosts } from "../../../utils/httpRequests/HttpRequest";

export default function BlogPostPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    GetAllPosts().then((res) => setPosts(res))
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
