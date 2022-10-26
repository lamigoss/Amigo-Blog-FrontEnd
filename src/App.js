import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/userAuth/login/Login";
import Developers from "./components/dev/Developers";
import Topbar from "./components/topbar/Topbar";
import Signup from "./components/userAuth/signup/Singup";
import Logout from "./components/userAuth/logout/Logout";
import BlogPostPage from "./pages/blogPostPage/BlogPostPage";
import WritePost from "./components/posts/writePost/post/WritePost";
import SinglePost from "./components/posts/singlePost/SinglePost";
import UpdatePost from "./components/posts/singlePost/updatePost/UpdatePost";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div>
        <Topbar />
        <Routes>
          <Route path="/posts" element={<BlogPostPage />} />
          <Route path="/posts/:postId" element={<SinglePost />} />
          <Route path="/posts/:postId/updatePost" element={<UpdatePost />} />
          <Route path="/posts/create" element={<WritePost />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
