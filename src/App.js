import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthContext from "./authContext/authContext";
import { useContext } from "react";

import Home from "./pages/home/Home";
import Login from "./components/userAuth/login/Login";
import Developers from "./components/dev/Developers";
import Posts from "./components/posts/Posts";
import Topbar from "./components/topbar/Topbar";
import Signup from "./components/userAuth/signup/Singup";
import Logout from "./components/userAuth/logout/Logout";

const App = () => {
  const context = useContext(AuthContext)
  return (
    <Router>
      <Topbar isLoggedIn={context.isLoggedIn} setIsLoggedIn={context.setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/login" element={<Login setIsLoggedIn={context.setIsLoggedIn}/>} />
        <Route path="/logout" element={<Logout setIsLoggedIn={context.setIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
