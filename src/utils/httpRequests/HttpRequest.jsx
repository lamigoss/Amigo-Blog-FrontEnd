import axios from "axios";

const baseUrl = "https://amigo-blog-backend-production.up.railway.app/api";

//==================== USER LOGIN/ SIGN UP ======================
// USER SIGNUP POST REQUEST
export const PostSignUp = async (body) => {
  try {
    const res = await axios.post(`/${baseUrl}/users/signup`, body)
    return res.data;
  } catch (error) {
    console.log("POST SIGNUP " + error);
  }
};

// USER LOGIN POST REQUEST
export const PostLogin = async (body, setIsLoggedIn, setAdmin) => {

  try {
    const res = await axios.post(`${baseUrl}/users/login`, body);
    const user = res.data.user;
    if (user.isAdmin === true) {
      window.localStorage.setItem("token", res.token);
      window.localStorage.setItem("user", user.username);
      window.localStorage.setItem("isAdmin", true);
      window.localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
      setAdmin(true);
    } else {
      window.localStorage.setItem("user", user.username);
      window.localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
    }
    return res.data;
  } catch (error) {
    console.log("POST LOGIN " + error + " " + baseUrl);
  }
};

//==================== IMAGES ======================
// GET IMAGES
export const GetImage = async (key) => {
  try {
    const res = await axios.get(`${baseUrl}/images/${key}`);
    return res;
  } catch (error) {
    console.log("GET IMAGE " + error);
  }
};

// GET POST IMAGE 
export const GetPostImage = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}/images/post/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// POST IMAGES
export const PostImage = async (formData) => {
  try {
    const res = await axios.post(`${baseUrl}/images`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// DELETE IMAGEPOST
export const DeleteImagePost = async(postId, imageKey, imageId) => {
  try {
    const res = await axios.delete(`${baseUrl}/images/${postId}/${imageKey}/${imageId}`)
    return res
  } catch (error) {
    console.log(error)
  }
}

//==================== BLOGPOST ======================
// GET REQUEST FOR ALL BLOGPOSTS
export const GetAllPosts = async () => {
  try {
    const res = await axios.get(`${baseUrl}/posts`) 
    return res.data
  } catch (error) {
    console.log(error)
  }
}

// GET REQUEST FOR BLOGPOST
export const GetPost = async (postId) => {
  try {
    const res = await axios.get(`${baseUrl}/posts/${postId}`);
    return res.data;
  } catch (error) {
    console.log("GET BLOG " + error);
  }
};

// DELETE BLOGPOST 
export const DeletePost = async (postId) => {
  try {
    await axios.delete(`${baseUrl}/posts/${postId}`);
  } catch (err) {
    console.log(err);
  }
};
// POST REQUEST FOR BLOGPOST
export const PostBlog = async (body, id) => {
  try {
    const res = await axios.post(`${baseUrl}/posts/create/${id}`, body);
    console.log(res.data)
    return res.data;
  } catch (error) {
    console.log("POST BLOG " + error);
  }
};

// PUT REQUEST FOR BLOG POST WITHOUT IMAGE
export const EditBlog = async (postId, body) => {
  console.log(body)
  try {
    const res = await axios.put(`${baseUrl}/posts/${postId}`, body)
    console.log(res)
    return res
  } catch (error) {
    console.log(error)
  }
}

// PUT REQUEST FOR BLOG POST WITH IMAGE
export const EditBlogWithImage = async (postId, imageId, body) => {
  try {
    const res = await axios.put(`${baseUrl}/posts/${postId}/${imageId}`, body)
    return res
  } catch (error) {
    console.log(error)
  }
}


//==================== COMMENT ======================
// GET REQUEST FOR COMMENT
export const GetComment = async (postId) => {
  try {
    const res = await axios.get(`${baseUrl}/comments/${postId}`);
    return res.data;
  } catch (error) {
    console.log("POST COMMENT " + error);
  }
};

// POST REQUEST FOR COMMENT
export const PostComment = async(username, postId, desc) => {
  try {
    const res = axios.post(`${baseUrl}/comments`, {
      username: username,
      postId: postId,
      desc: desc
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}

// DELETE REQEUST FOR COMMENT
export const DeleteComment = async(postId, commentId) => {
  try {
    const res = axios.delete(`${baseUrl}/comments/${postId}/${commentId}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
