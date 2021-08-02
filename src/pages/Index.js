import React from 'react'
import Posts from '../pages/Posts';

export default function Index({posts}) {
    return (
        <div>
            <Posts posts={posts}/>
        </div>
    )
}
