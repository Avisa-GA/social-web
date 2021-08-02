import 'materialize-css/dist/css/materialize.min.css';
import { useState, useEffect } from 'react';
import { StyledLayout } from './styles';
import { getPosts } from './services/post-service';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import About from './pages/About';
import Index from './pages/Index';

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
				<Route>
 
        </Route>
			</Switch>
			<Footer />
		</StyledLayout>
  );
}

export default App;
