import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SinglePost() {
  const [selected, setSelected] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = axios.get(`/posts/${postId}`);
        setSelected(res.data);
      } catch (error) {}
    };
    fetchData();
  }, [postId]);

  return (
    <div className="singlePostContainer">
      <div className="singlePostWrapper"></div>
    </div>
  );
}
