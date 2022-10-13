import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/userAuth/login/Login";
import Developers from "./components/dev/Developers";
import Topbar from "./components/topbar/Topbar";
import Signup from "./components/userAuth/signup/Singup";
import Logout from "./components/userAuth/logout/Logout";
import BlogPostPage from "./pages/blogPostPage/BlogPostPage";
import PostForm from "./components/posts/PostForm";

const App = () => {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<BlogPostPage />} />
        <Route path="/posts/create" element={<PostForm />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
};

export default App;
