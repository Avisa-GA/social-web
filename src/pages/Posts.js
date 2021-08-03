import React from 'react'
import Post from './Post'
import { StyledTitle } from '../styles';

export default function Posts({posts}) {
    return (
        <ul style={{ marginTop: '5%' }} className="collection with-header" alignItems="center">
			<li className="collection-header">
				<StyledTitle
					style={{ fontSize: '24px', fontWeight: 'bold', color: '#00695c', marginLeft: "40%" }}>
					Posts from all users
				</StyledTitle>
			</li>
			{posts.length < 1 ? (
				'No results'
			) : (
				<>
					{posts.map((post, index) => (
						<li key={index} className="collection-item">
						<Post
							key={post.id}
							post={post}
						/>
						</li>
					))}
					</>
			)}
		</ul>
    )
}
