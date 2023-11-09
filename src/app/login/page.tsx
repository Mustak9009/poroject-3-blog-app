'use client'
import React from 'react'
import Link from 'next/link';
import {signIn} from 'next-auth/react';
export default function Login() {
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    signIn('credentials',{email:"abc@gmail.com",password:'123455',redirect:true,callbackUrl:'http://localhost:3000'});
  }
  return (
    <div className='credentials'>
        <span className='text-4xl'>Login</span>
        <form method='POST' className='w-[20%]' onSubmit={handleSubmit}>
            <div className='flex flex-col my-3'>
                <label htmlFor="email" className='text-gray-700'>Email</label>
                <input type="email" name="email" id="email" placeholder='Enter email' className='outline-none bg-transparent border-2  px-2 py-1 rounded-md w-full'/>
            </div>
            <div className='flex flex-col my-3'>
                <label htmlFor="password" className='text-gray-700'>Password</label>
                <input type="password" name="password" id="password" placeholder='Enter password' className='outline-none bg-transparent border-2  px-2 py-1 rounded-md w-full'/>
            </div>
            <p className='font-normal'>
              Don't have an account? <Link href={'/register'} className='text-teal-500 hover:underline'>Register</Link>
            </p>
            <button type='submit' className='bg-teal-500 px-2 py-1 rounded-md mt-3'>Login</button>
        </form>
    </div>
  )
}
