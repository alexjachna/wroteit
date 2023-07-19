import React, { useState } from 'react'
import Posts from './Posts'
import CreatePost from './CreatePost'
import Post from './Post'

export default function Feed() {

    const [posts, setPosts] = useState([{}, {}])

    function createPost() {
        setPosts(currentPosts => {
        return [
            ...currentPosts,
            <Post />
        ]
        })
        }

    return (
        <div className='w-full h-fit flex flex-col-reverse items-center gap-4
        xl:flex-row xl:justify-center xl:items-start'>   
            <Posts posts={posts}/>
            <CreatePost createPost={createPost}/>
        </div>
  )
}
