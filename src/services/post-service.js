import axios from 'axios';
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dzsyqjq3i/image/upload"
const POST_URL = "https://social-app-end.herokuapp.com/post"


async function getPosts() {
    const response = await fetch(POST_URL);
    return response.json();
};


export {getPosts}