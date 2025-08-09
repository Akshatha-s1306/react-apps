import NoteForm from '@/components/NoteForm'
import NoteList from '@/components/NoteList'
import React from 'react'

const Home = () => {
  return (
    <div className='flex items-center justify-center px-4 py-8
      bg-gray-100 mx-w-screen-sm mx-auto w-full'>
      <div className='w-full'>
        <h1 className='text-2xl font-bold text-center mb-4'>Welcome to NoteNest</h1>
        <p className='text-center text-gray-600'>Your personal note-taking app.</p>
        <div className='mt-6 flex justify-center'>
          <NoteForm/>
        </div>
        <NoteList/>
      </div>
    </div>
  )
}

export default Home
