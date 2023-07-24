import React, { useState } from 'react'
import Posts from './Posts'
import CreatePost from './CreatePost'
import Post from './Post'

export default function Feed() {

    const [subreddit, setSubreddit] = useState("")
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [posts, setPosts] = useState([{ id: crypto.randomUUID(), subreddit: "react", title: "hello world", desc: "hello world, this is react." }, 
                                        { id: crypto.randomUUID(), subreddit: "theworld", title: "This is my World.", desc: "Hello world, the world is mine!!!!" }])

    function createPost() {
        if (!subreddit && !title && !desc) {
            console.log('empty inputs')
            return
        }

        setPosts(currentPosts => {
        return [
            { id: crypto.randomUUID(), subreddit, title, desc },
            ...currentPosts  
        ]
        })
        }

    return (
        <div className='w-full h-fit flex flex-col-reverse items-center gap-4
        xl:flex-row xl:justify-center xl:items-start'>   
            <Posts posts={posts}/>
            <CreatePost 
            subreddit={subreddit}
            title={title}
            desc={desc}
            setSubreddit={setSubreddit} 
            setTitle={setTitle} 
            setDesc={setDesc} 
            createPost={createPost}
            />
        </div>
  )
}
