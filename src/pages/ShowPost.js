import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function ShowPost({ posts, match, history }) {

  const [post, setPost] = useState("");

  useEffect(() => {
      if (posts) {
          const id = match.params.id;
          const post = posts.find((f) => f._id == id);
          setPost(post)
      } else {
          history.push('/');
      }
  }, [posts]);


console.log("post deatil from show page: ", post)
  return (
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

                 </div>
             )}
         </div>
         <div style={{ margin: 'auto', marginTop: '2%' }}>
				<Link style={{ marginRight: '5%' }} to="/">
					Go Back
				</Link>
         </div>
    </div>
  );
}
