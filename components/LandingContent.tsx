import React from 'react'
import Image from 'next/image'

const LandingContent = () => {
  return (
    <div className='w-full min-h-screen flex justify-between px-6 py-10 overflow-hidden'>
      <div className='flex-1 mx-auto items-center justify-center flex flex-col'>
        <div className='text-left space-y-4'>
          <h1 className='text-7xl font-bold text-black'>
            Book Vault
          </h1>
          <h2 className='text-2xl text-gray-600'>
            Because life&apos;s too short to read boring books
          </h2>
          <div className='flex space-x-4'>
            <button className='px-4 py-2 bg-[#4F67B1] text-white rounded-full hover:bg-blue-700 text-lg'>
              Sign in
            </button>
            <button className='px-4 py-2 border border-[#FFC41F] text-gray-800 rounded-full hover:bg-gray-300 text-lg'>
              Join
            </button>
          </div>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center pr-20'>
        <Image 
          src='/landing.svg'
          alt='an illistration of a review'
          width={800}
          height={800}
          className=''
        />
      </div>
      <div className='absolute bottom-6 right-0 w-[500px] h-[400px] bg-[#FFC41F] rounded-full blur-3xl opacity-30'></div>
      <div className='absolute -top-20 left-40 w-[500px] h-[400px] bg-[#4F67B1] rounded-full blur-3xl opacity-30'></div>
    </div>
  )
}

export default LandingContent
