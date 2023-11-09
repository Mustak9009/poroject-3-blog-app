'use client'
import React from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai';
import Image from 'next/image';


export default function Write() {

  return (
    <div className='w-full h-screen mt-12 font-verelaRound'>
      <div className='grid place-items-center mb-5 relative'>
        <Image src={"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} className="object-cover rounded-md w-[90%] md:w-[76.5%] md:h-[30vh]" width={500} height={100}  alt="Music blog"/>
        <span className='inline-block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded-md opacity-60 select-none'>Default img</span>
      </div>
      <div className='w-[96%] md:w-full h-full flex justify-center items-start m'>
        <form method='POST'>
          <div className='flex justify-start items-center gap-2 my-5 relative'>
            <label htmlFor="img" title='Add img...'>
              <AiOutlinePlusCircle className='text-3xl text-gray-600 cursor-pointer'/>
            </label>
            <input type="file" name="img" id="img" style={{display:'none'}}/>
            <input type="text" name="title" id="title" placeholder='Title' className='outline-none w-full text-2xl font-semibold  py-1 px-2'/>
            <button type='submit' className='bg-teal-500 hover:bg-teal-600 text-white font-bold px-3 py-1.5 rounded-md  absolute right-0'>Share</button>
          </div>
          <textarea name="story" id="story" className='outline-none pl-12  rounded-md resize-none tracking-widest w-[77vw] '  placeholder='Tell your story...' cols={10} rows={5} ></textarea>
        </form>
      </div>
    </div>
  )
}
