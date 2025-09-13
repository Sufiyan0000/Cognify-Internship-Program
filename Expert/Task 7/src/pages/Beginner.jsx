import React from 'react'
import Navbar from '../components/Navbar'

function Beginner() {
  return (
    <div>
       
        <div className='text-center text-2xl font-bold mt-20 flex flex-col gap-4 items-center'>
            This is the Beginner Page. You can check out my completed tasks
            <a href="https://github.com/Sufiyan0000/Cognify-Internship-Program/tree/main/Beginner" target='_blank' className='w-fit bg-blue-600 px-4 py-2 text-white hover:opacity-90'> Beginner Tasks.</a>
        </div>
    </div>
  )
}

export default Beginner