import React from 'react'
import { FaGithub } from "react-icons/fa";

function Expert() {
  return (
    <div>
       <div className='text-center text-2xl font-bold mt-20 flex flex-col gap-4 items-center'>
            This is the Expert Page. You can check out my completed tasks
            <a href="https://github.com/Sufiyan0000/Cognify-Internship-Program/tree/main/Expert" target='_blank' className='w-fit bg-blue-600 px-4 py-2 text-white hover:opacity-90 flex gap-2 items-center justify-center'> Expert Tasks. <span><FaGithub /></span> </a>
        </div>
    </div>
  )
}

export default Expert