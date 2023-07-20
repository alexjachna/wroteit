import React from 'react'
import Post from './Post'

export default function Posts({ posts }) {
  return (
    <div className='w-full h-screen flex flex-col gap-4'>
      {posts.map(post => {
        return (
          <Post
            id={post.id}
            subreddit={post.subreddit}
            title={post.title}
            desc={post.desc}
          />
        )
      })}
    </div>
  )
}
