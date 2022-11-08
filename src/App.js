import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/pages/home/Home.jsx'
import Login from "./components/userAuth/login/Login";
import Developers from "./components/dev/Developers";
import Topbar from "./components/topbar/Topbar";
import Signup from "./components/userAuth/signup/Singup";
import Logout from "./components/userAuth/logout/Logout";
import BlogPostPage from "./components/pages/blogPostPage/BlogPostPage.jsx";
import WritePost from "./components/posts/writePost/post/WritePost";
import SinglePost from "./components/posts/singlePost/SinglePost";
import UpdatePost from "./components/posts/singlePost/updatePost/UpdatePost";
import Steve from "./components/dev/SteveLee"; 
import Roy from "./components/dev/RoyceHong"; 
import Footer from "./components/footer/Footer";
import "./index.css";


const App = () => {
  return (
    <Router>
      <div>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<BlogPostPage />} />
          <Route path="/posts/:postId" element={<SinglePost />} />
          <Route path="/posts/:postId/updatePost" element={<UpdatePost />} />
          <Route path="/posts/create" element={<WritePost />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/developers/roycehong" element={<Roy/>}/>
          <Route path="/developers/stevelee" element={<Steve/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
