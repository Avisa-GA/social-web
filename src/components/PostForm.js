import { useState } from "react";
import ImageIcon from "@material-ui/icons/Image";
import { uploadPostImage } from "../services/post-service";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function PostForm({post, posts, updatePost, createPost}) {

  const history = useHistory();

  const [message, setMessage] = useState("");

  const [fileName, setFileName] = useState("");

  const [imgFromCloud, setImgFromCloud] = useState({
    data: { secure_url: "" },
  });

  const [formState, setFormState] = useState({
    text: "",
    imageUrl: "",
  });

 

  function handleChange(e) {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleImageFile(e) {
    const file = e.target.files[0];
    setFileName(file.name);
    if (file) {
      let imageData;
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "ljxjnqss");
      imageData = await uploadPostImage(data);
      setImgFromCloud(imageData);
    }
  }

  async function handleSubmit(e) {

    e.preventDefault();
    if (post) {
     await updatePost(
        // specfically add img to formState
        { ...formState, imageUrl: imgFromCloud.data.secure_url },
        post._id
      );
      history.push('/')
    } else {
    const { text } = formState;
    
    if (!text) {
      setMessage("Enter all fields");
    } else {
      await createPost({ ...formState, imageUrl: imgFromCloud.data.secure_url });
      setFormState({
        text: "",
        imageUrl: "",
      });
      setImgFromCloud({ data: { secure_url: "" } });
      setFileName("");
      history.push("/");
    }
  }
  }


  return (
   <>
    <div style={{marginTop: "10%"}} className="container">
  
      <form>
          {message && (<p style={{color: 'red'}}>{message}</p>)}
        <input
          type="text"
          name="text"
          placeholder="What's happening?"
          value={formState.text}
          onChange={handleChange}
          id="text"
        />
        {/* ************ Add image here */}
        <div className="file-field input-field">
          <div className="btn deep-orange darken-4">
            <span style={{ fontSize: 24 }}>
              <ImageIcon />
            </span>
            <input type="file" name="imageUrl" onChange={handleImageFile} />
          </div>
          <div className="file-path-wrapper">
            <input
              className="file-path validate"
              type="text"
              value={
                fileName
                  ? imgFromCloud.data.secure_url
                  : ""
              }
              onChange={() => {}}
            />
          </div>
        </div>
        <button
          type="submit"
          style={{ marginLeft: "88%" }}
          className="btn white-text deep-orange darken-4"
          onClick={handleSubmit}
        >
          {post ? "edit" : "post"}
        </button>
      </form>
    </div>
    <div>
      { post || posts.map((post, index) => {
         return <div style={{marginLeft: "45%"}} key={index}>
            <Link to={`/${post._id}`}>{post.text}</Link>
          </div>})}
    </div>
    </>
  );
}
