import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ViewImg from "../../writePost/viewImg/ViewImg";
import PostTitle from "../../writePost/postTitle/PostTitle";
import PostImg from "../../writePost/postImg/PostImg";
import PostDesc from "../../writePost/postDesc/PostDesc";
import { GetPostImage, GetPost, DeleteImagePost, EditBlog, EditBlogWithImage } from "../../../../utils/httpRequests/HttpRequest";
import PostContext from "../../../../authContext/postContext";

const UpdatePost = () => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const imageCtx = useContext(PostContext);
  const [post, setPost] = useState({
    username: "",
    postTitle: "",
    postDesc: "",
  });
  const [imageKey, setImageKey] = useState("");
  const username = window.localStorage.getItem("user");

  useEffect(() => {
    window.localStorage.removeItem("imageId");
    const getPost = async () => {
      try {
        const res = await GetPost(postId).then((res) => {
          setPost(res)
          return res
        });
        await GetPostImage(res.imageId).then((res) => setImageKey(res.imageKey));
      } catch (error) {
        console.log(error);
      }
    };
    imageCtx.setImageId("");
    getPost();
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setPost({ ...post, [event.target.id]: event.target.value });
  };

  const handleDeleteImg = async (event) => {
    event.preventDefault();
    window.localStorage.removeItem("imageId");
    window.localStorage.removeItem("imageKey");
    try {
      await DeleteImagePost(postId, imageKey, post.imageId)
        .then((res) => (res.status === 204 ? setImageKey("") : null));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      if (!imageCtx.imageId) {
        await EditBlog(postId, {
          _id: postId,
          username: username,
          postTitle: post.postTitle,
          postDesc: post.postDesc,
        })
        .then(() => {
          navigate("/posts")
        });
      } else {
        await EditBlogWithImage(postId,imageCtx.imageId, {
            _id: postId,
            username: username,
            postTitle: post.postTitle,
            postDesc: post.postDesc,
          })
          .then((res) => {
            if (res.status === 201) {
              navigate("/posts");
            }
          });
      }
    } catch (err) {
      console.log(err + post.postTitle);
    }
  };

  return (
    <div className="grid mb-28 mt-28">
      <div className="grid justify-self-center mobile:w-full desktop:w-10/12 desktopLG:w-7/12">
        <form
          className="grid justify-self-center w-10/12 mobile:text-xs tablet:text-sm "
          onSubmit={handleDeleteImg}
        >
          <div className="grid tablet:mt-5 ">
            <div className="justify-self-center w-4/12">
              {imageKey && <ViewImg imageKey={imageKey} />}
            </div>
          </div>
          {imageKey && (
            <button
              className="
                bg-indigo-500
                 hover:bg-indigo-700 
                 w-full
                rounded-md 
                font-medium 
                p-4 text-bold
                text-white
                mt-10
                "
              id="delete-button"
              type="submit"
            >
              Delete Image
            </button>
          )}
        </form>
        <form
          className="grid grid-row-4 justify-self-center w-10/12 mobile:text-xs tablet:text-sm"
          onSubmit={handleUpdate}
        >
          {!imageKey && null}
          {!imageKey ? <PostImg /> : null}
          <div className="mobile:mb-10 place-content-center mt-5 "></div>
          <PostTitle postTitle={post.postTitle} handleChange={handleChange} />
          <PostDesc postDesc={post.postDesc} handleChange={handleChange} />
          <button
            className="
          items-center
          justify-self-center
            bg-indigo-500
             hover:bg-indigo-700 
             w-full
            rounded-md 
            font-medium 
            p-5 text-bold
            text-white
            mt-10
            "
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
