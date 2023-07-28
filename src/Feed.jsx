import React, { useState, useEffect } from 'react'
import Posts from './Posts'
import CreatePost from './CreatePost'

export default function Feed({ username }) {

    const [community, setCommunity] = useState("")
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [posts, setPosts] = useState(() => {
        const localVal = localStorage.getItem('items')
        if (localVal == null) {
            return [{ username: "alexjachna123", id: crypto.randomUUID(), community: "react", title: "hello world", desc: "hello world, this is react." }, 
                    { username: "krazykoala45", id: crypto.randomUUID(), community: "theworld", title: "This is my World.", desc: "Hello world, the world is mine!!!!" }]
        }
        
        return JSON.parse(localVal)
    })

    useEffect(() => {
    localStorage.setItem('items', JSON.stringify(posts))
  }, [posts])

    function createPost() {
        if (!community && !title && !desc) {
            console.log('empty inputs')
            return
        }

        setPosts(currentPosts => {
        return [
            { username, id: crypto.randomUUID(), community, title, desc },
            ...currentPosts  
        ]
        })

        console.log('i got here!')
        }

    return (
        <div className='w-full h-fit flex flex-col-reverse items-center gap-4
        xl:flex-row xl:justify-center xl:items-start'>   
            <Posts posts={posts}/>
            <CreatePost
            community={community}
            title={title}
            desc={desc}
            setCommunity={setCommunity} 
            setTitle={setTitle} 
            setDesc={setDesc} 
            createPost={createPost}
            />
        </div>
  )
}
