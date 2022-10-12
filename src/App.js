import Home from './pages/home/Home';
import {
  BrowserRouter as Router, Route, Routes  
  } from 'react-router-dom';
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Developers from "./components/dev/Developers";
import Posts  from "./components/posts/Posts"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/posts" element={ <Posts/>}/>
        <Route path="/developers" element={ <Developers/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/register" element={ <Register/>}/>
      </Routes>
    </Router>

  );
}

export default App;
