import 'materialize-css/dist/css/materialize.min.css';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { StyledLayout } from './styles';
import { getPosts, createPost } from './services/post-service';
import PostForm from './components/PostForm';
import ShowPost from './pages/ShowPost';
import About from './pages/About';
import Header from './components/Header';
import Index from './pages/Index';
import Footer from './components/Footer';;



function App() {

  const [postsState, setPostsState] = useState([]);

  useEffect(() => {
    getAllPosts()
  }, []);

   // * ******************************* Index
   async function getAllPosts() {
    setPostsState(await getPosts());
  }
console.log("coming from app.js:", postsState)
  return (
    <StyledLayout>
			<Header getAllPosts={getAllPosts}/>
			<Switch>
				<Route exact path="/">
				    <Index 
               posts={postsState}
            />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/posts">
             <PostForm posts={postsState} createPost={createPost}/>
        </Route>
        <Route
           path="/:id"
           render={(rp) => (
             <ShowPost 
                posts={postsState}
                {...rp}
             />
           )}
        />
			</Switch>
			<Footer />
		</StyledLayout>
  );
}

export default App;
