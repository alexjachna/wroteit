import React from 'react'
import Post from './Post'
import { useState } from 'react'

export default function Posts({ posts }) {
  return (
    <div className='w-full h-screen flex flex-col gap-4'>
      {posts.map(post => {
        return (
          <Post 

          />
        )
      })}
    </div>
  )
}
