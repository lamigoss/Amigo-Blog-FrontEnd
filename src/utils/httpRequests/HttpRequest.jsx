import axios from "axios";

const baseUrl = "http://localhost:8800/api";

// USER SIGNUP POST REQUEST
export const PostSignUp = async (body) => {
  try {
    const res = await axios.post(`${baseUrl}/users/signup`, body);
  
    return res.data
  } catch (error) {
    console.log('POST SIGNUP ' + error);
  }
};

// USER LOGIN POST REQUEST
export const PostLogin = async (body, setIsLoggedIn, setAdmin) => {
  try {
    const res = await axios.post(`${baseUrl}/users/login`, body);
    console.log(res.data)
    const user = res.data.user
    if (user.isAdmin === true) {
      window.localStorage.setItem("token", res.token);
      window.localStorage.setItem("user", user.username);
      window.localStorage.setItem("isAdmin", true);
      window.localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true)
      setAdmin(true)
    } else {
      window.localStorage.setItem("user", user.username);
      window.localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true)
    }
    return res.data
  } catch (error) {
    console.log('POST LOGIN ' + error);
  }
};

// GET IMAGES
export const GetImage = async (key) => {
  try {
    const res = await axios.get(`${baseUrl}/images/${key}`)
    return res
  } catch(error) {
    console.log(error)
  }
}

export const GetPostImage = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}/images/post/${id}`)
    return res
  } catch(error) {
    console.log(error)
  }
}


// POST IMAGES 
export const PostImage = async (formData) => {
  try {
    const res = await axios.post(`${baseUrl}/images`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data
  } catch (error) {
    console.log(error);
  }
};


// POST REQUEST FOR BLOGPOST
export const PostBlog = async (body) => {
  try {
    const res = await axios.post("/posts/create", body);
    return res.data
  } catch(error) {
    console.log('POST BLOG ' + error)
  }
}
