import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import PostForm from "../components/PostForm";

export default function ShowPost({ posts, match, history, handleDelete, handleUpdate }) {

  const [post, setPost] = useState("");
  const [toggleForm, setToggleForm] = useState(false);

  useEffect(() => {
      if (posts) {
          const id = match.params.id;
          const post = posts.find((f) => f._id === id);
          setPost(post)
      } else {
          history.push('/');
      }
  }, [posts]);

  const toggleOpenForm = () => {
      setToggleForm(!toggleForm);
  }

  return (
      <>
      {toggleForm ? (
          <PostForm post={post} handleUpdate={handleUpdate} />
      ) : (
    <div>
         <div>
             {post && (
                 <div
                 style={{
                    width: '80%',
                    margin: 'auto',
                    marginTop: '5%',
                    maxWidth: '700px',
                    height: '100%',
                }}
                className="card">
                     <div className="card-image">
                         <>
                         <img src={post.imageUrl} alt={post.text} />
						 <span className="card-title">{post.text}</span>
                         </>
                     </div>
                     <button
							style={{ marginBottom: '10%', marginLeft: '10%' }}
							className="btn-floating halfway-fab waves-effect waves-light deep-orange darken-4"
							onClick={() => handleDelete(post._id)}>
							<Link style={{color: "whitesmoke"}} to='/posts'>delete</Link>
						</button>
                 </div>
             )}
         </div>
         <div style={{ margin: 'auto', marginTop: '2%' }}>
				<Link style={{ marginRight: '5%' }} to="/posts">
					Go Back to List
				</Link>
         </div>
    </div>
    )}
    <div style={{ margin: 'auto', marginTop: '2%' }}>
				<Link style={{ marginRight: '5%' }} to="/">
					Go Back to Home page
				</Link>
				<button
					className="waves-effect waves-light btn deep-orange darken-4"
					onClick={toggleOpenForm}>
					{toggleForm ? 'Back to Show Page' : 'Edit Post'}
				</button>
			</div>
    </>
  );
}
