import React from 'react'
import {AiFillInstagram,AiFillLinkedin} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import {BiUserCircle,BiSearchAlt} from 'react-icons/bi';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className='w-full h-full font-josefinSans'>
      <div className='mx-5 py-2 lg:flex lg:justify-center lg:items-center lg:gap-5'>
        <div className='w-full flex-[3] py-3 px-1'>
          <div className='flex justify-center items-center gap-10 text-2xl'>
            <Link href={'#'} target='_blank'>
              <AiFillInstagram/>
            </Link>
            <Link href={'#'} target='_blank'>
              <BsTwitter/>
            </Link>
            <Link href={'#'} target='_blank'>
              <AiFillLinkedin/>
            </Link>
          </div>
        </div>
        <div className='w-full flex-[6] py-3 px-1'>
          <ul className='flex justify-center items-center gap-5 lg:gap-10 font-semibold flex-wrap'>
            <li>
              <Link href={'/'} className='hover:text-gray-500'>
               HOME
              </Link>
            </li>
            <li>
              <Link href={'/posts'} className='hover:text-gray-500'>
               POSTS
              </Link>
            </li>
            <li>
              <Link href={'#'} className='hover:text-gray-500'>
               CONTACT
              </Link>
            </li>
            <li>
              <Link href={'/write'} className='hover:text-gray-500'>
               WRITE
              </Link>
            </li>
            <li>
              <Link href={'#'} className='hover:text-gray-500'>
               LOGOUT
              </Link>
            </li>
          </ul>
        </div>
        <div className='w-full flex-[3] py-3 px-1 hidden lg:block'>
          <div className='flex lg:justify-center lg:items-center gap-3'>
            <Link href={'/settings'}>
              <BiUserCircle className='text-4xl hidden lg:block'/>
            </Link>
            <div className='flex justify-center items-center border gap-2 py-1 px-2 rounded-md border-black'>
              <label htmlFor="search">
                <BiSearchAlt/>
              </label>
              <input type="text" name="search" id="search" className='bg-transparent outline-none' placeholder='search'/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
