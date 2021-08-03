import React from 'react'
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

export default function Post({post}) {
	
    return (
        <Grid container direction="row" justifyContent="center" >
			<Grid item xs={12} sm={6} md={6} lg={5}>
				<div className="card large">
					<div className="card-image">
						<img src={post.imageUrl} alt={post.text} />
					</div>
					<div className="card-content">
						<span
							style={{
								color: '#00796b',
								marginRight: '30%',
								fontSize: '14px',
								textAlign: 'left',
							}}
							className="card-title">
							{post.text}
						</span>
					</div>
					<div className="card-action">
						<Link style={{marginLeft: "40%"}} to={`/${post._id}`}>Show More</Link>
					</div>
				</div>
			</Grid>
		</Grid>
    )
}
