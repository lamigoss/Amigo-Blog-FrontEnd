import "./posts.css";
import { Link } from "react-router-dom";

const Posts = ({ post }) => {
  return (
    <>
      <div className="postsContainer">
        <Link to={`/posts/${post._id}`}>
          <div className="postsWrapper">
            <div className="postsTop">
              <div className="postsTopLeft">
                <img
                  src="/assets/person/1.jpeg"
                  alt=""
                  className="profilePicture"
                />
                <span className="userName">{post.username}</span>
                {/* <span className="postDate">{format(post.createdAt)}</span> */}
              </div>
              <div className="postsCeter">
                <span className="postTitle">{post.postTitle}</span>
                <img src="/assets/posts/1.jpeg" alt="" className="postsImg" />
              </div>
              <div className="postsBottom">
                <span className="postsDesc">{post.postDesc}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Posts;
