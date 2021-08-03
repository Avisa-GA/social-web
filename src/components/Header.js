import { Link, useHistory } from 'react-router-dom';
import { StyledHeader } from '../styles';
import { signOut } from "../services/firebase";
import { useAuth } from "../services/context";
import defaultImg from "../assets/images/profile.jpg";

export default function Header({ getAllPosts }) {

    const { state: {user} } = useAuth();
	const history = useHistory();
	async function handleLogout() {
		await signOut();
		history.push("/login");
	  }

	return (
		<StyledHeader>
			<Link to="/" onClick={() => getAllPosts()}>
				<h5>Social Web</h5>
			</Link>
			<Link to="/about">
				<h5>About</h5>
			</Link>
			
			
			 <ul style={{display: "flex"}}>
          {user ? (
            <>
			<li>
			<Link to="/posts">
			<h5>Create Post</h5>
			 </Link>
			</li>
			<br />
              <li>
                Welcome,{" "}
                {user.displayName ? user.displayName.split(" ")[0] : "User"}
              </li>
              <li>|</li>
              <li className="logout" onClick={handleLogout}>
               <Link to="/login">Logout</Link>
              </li>
              <li>
                <img style={{width: "38px", height: "38px"}}
                  src={user.photoURL ? user.photoURL : defaultImg}
                  alt={user.displayName ? user.displayName : "User"}
                />
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
		</StyledHeader>
	);
}