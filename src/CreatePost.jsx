import React, { useState } from 'react'

export default function CreatePost({ subreddit, title, desc, setSubreddit, setTitle, setDesc, createPost }) {

  function handleCreatePost(e) {
    e.preventDefault()

    createPost()

    setSubreddit("")
    setTitle("")
    setDesc("")
  }

  return (
    <div className='w-full max-w-md h-fit bg-white border-gray-100 border rounded-lg'> 
      <div className='bg-green-100 flex items-center h-20 px-6 rounded-t-lg'>
        <img src="../public/house.png" alt="" className='w-5'/>
        <p className='text-black font-semibold text-lg pl-2'>Home</p>
      </div>
      <form onSubmit={handleCreatePost} className='m-3 flex flex-col gap-2 items-center'>
        <input name='subreddit' value={subreddit} onChange={e => setSubreddit(e.target.value)} type="text" placeholder='subreddit' className='w-full border rounded-sm px-2 text-black' required/>
        <input name='title' value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='title' className='w-full border rounded-sm px-2 text-black' required/>
        <textarea name="description" value={desc} onChange={e => setDesc(e.target.value)} placeholder='description' className='w-full border rounded-sm p-2 text-black resize-none' required></textarea>
        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white w-11/12 font-bold py-2 px-4 rounded'>Create Post</button>
      </form>
      <div className='flex flex-col justify-center items-center p-4 h-fit'>
        <p className='text-gray-600 mb-6'>Your personal Wroteit page. Create your first post here.</p>
      </div>
      
    </div>
  )
}