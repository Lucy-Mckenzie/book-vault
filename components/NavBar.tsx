import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const NavBar = () => {
return (
  <div className='top-0 fixed flex w-full p-4 text-black'>
    <div className='space-x-12 pl-20 items-center flex'>
      <Link href='/'>
       home
      </Link>
        <Link href='/user-panel'>
         my books
        </Link>
      <Link href='/discover'>
        discover
      </Link>
    </div>
    <div className='flex items-center ml-auto space-x-4'>
      <label className="input input-bordered flex items-center gap-2 bg-white">
         <input type="text" className="grow bg-white" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
            </svg>
       </label>
      <div className='avatar'>
        <div className='w-14 rounded-full'>
          <Image
           src='/user.svg'
           alt='stock avatar'
           width={12}
           height={12}
           />
        </div>
      </div>
    </div>
  </div>
  )
}

export default NavBar