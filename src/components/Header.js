import { Link } from 'react-router-dom';
import { StyledHeader } from '../styles';

export default function Header({ getAllPosts }) {

	return (
		<StyledHeader>
			<Link to="/" onClick={() => getAllPosts()}>
				<h5>Social Web</h5>
			</Link>
			<Link to="/posts">
			<h5>Create Post</h5>
			</Link>
			<Link to="/about">
				<h5>About</h5>
			</Link>
		</StyledHeader>
	);
}