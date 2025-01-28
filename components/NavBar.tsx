import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
return (
  <div className='navbar z-10 sticky top-0 text-black'>
  <div className='navbar-start flex items-center'>
    <div className='dropdown'>
      <button
        tabIndex={0}
        role='button'
        className='btn btn-ghost lg:hidden pb-4'
        aria-label='Open Menu'
        aria-expanded='false'
        aria-controls='mobile-menu'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h8m-8 6h16'
          />
        </svg>
      </button>
      <ul
        tabIndex={0}
        id='mobile-menu'
        className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow lg:hidden'
      >
        <li>
          <Link href='/' className='hover:underline'>
            home
          </Link>
        </li>
        <li>
          <Link href='/user-panel' className='hover:underline'>
            my books
          </Link>
        </li>
        <li>
          <Link href='/discover' className='hover:underline'>
            discover
          </Link>
        </li>
      </ul>
    </div>
  </div>

  <div className='navbar hidden lg:flex flex-grow'>
    <ul className='flex items-start px-1 space-x-24 text-xl'>
      <li>
        <Link href='/' className='hover:underline'>
          home
        </Link>
      </li>
      <li>
        <Link href='/user-panel' className='hover:underline'>
          my books
        </Link>
      </li>
      <li>
        <Link href='/discover' className='hover:underline'>
          discover
        </Link>
      </li>
    </ul>
  </div>

  <div className='navbar-end flex items-center space-x-4 mr-10'>
    <label className='input input-bordered flex items-center gap-2 bg-white'>
      <input type='text' className='grow bg-white' placeholder='Search' />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 16 16'
        fill='currentColor'
        className='h-4 w-4 opacity-70'
      >
        <path
          fillRule='evenodd'
          d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
          clipRule='evenodd'
        />
      </svg>
    </label>
    <div className='avatar'>
      <div className='w-10 h-10 rounded-full'>
        <Image src='/user.svg' alt='stock avatar' width={40} height={40} />
      </div>
    </div>
  </div>
</div>
  )
}

export default NavBar
