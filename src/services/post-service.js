import axios from 'axios';
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dzsyqjq3i/image/upload"
const POST_URL = "https://social-app-end.herokuapp.com/post"

// *********************** Index
async function getPosts() {
    const response = await fetch(POST_URL);
    return response.json();
};

// *********************** Save Image to Cloudinary
function uploadPostImage(data) {
    return axios({
      url: CLOUDINARY_URL,
      method: "POST",
      data
    });
}

// *********************** Create Post
async function createPost(post) {
    return fetch(POST_URL, {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(post)
    })
}

// ************************* Delete Post
async function deletePost(id) {
    return fetch(POST_URL + "/" + id, {
        method: "DELETE"
    });
}


export {getPosts, uploadPostImage, createPost, deletePost}