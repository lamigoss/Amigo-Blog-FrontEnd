import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./components/userAuth/login/Login";
import Developers from "./components/dev/Developers";
import Topbar from "./components/topbar/Topbar";
import Signup from "./components/userAuth/signup/Singup";
import Logout from "./components/userAuth/logout/Logout";
import BlogPostPage from "./pages/blogPostPage/BlogPostPage";
import PostForm from "./components/posts/writePost/PostForm";
import SinglePost from "./components/posts/singlePost/SinglePost";

const App = () => {
  
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<BlogPostPage />} />
        <Route path="/posts/:postId" element={<SinglePost />} />
        <Route path="/posts/create" element={<PostForm />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
