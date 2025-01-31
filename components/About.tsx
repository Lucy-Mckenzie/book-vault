import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full min-h-screen flex justify-between px-6 py-10 overflow-hidden'>
      <div className='flex-1 flex justify-center items-center'>
        <Image 
          src='/books.png'
          alt='an illistration of a review'
          width={500}
          height={500}
          className=''
        />
      </div>
      <div className='flex-1  items-center justify-center flex flex-col'>
        <div className='text-left space-y-4'>
          <h1 className='text-4xl font-bold text-black'>
            Keep track of books you are currently reading, or have already read.
          </h1>
          <div className='flex space-x-4'>
            <button className='px-4 py-2 border border-[#FFC41F] text-gray-800 rounded-full hover:bg-gray-300 text-lg'>
              Browse books
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About