'use client'
import React from 'react'
import Link from 'next/link';
import {signIn} from 'next-auth/react';
import {useFormik} from 'formik';
import {LoginSchema} from '@/schema';
import {useSearchParams} from 'next/navigation';

export default function Login() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const [loading,setLoading] = React.useState<boolean>(false);
  const {handleChange,values,handleBlur,handleSubmit,isSubmitting,errors} = useFormik({
    validationSchema:LoginSchema,
    initialValues:{
      email:'',
      password:'',
    },
    onSubmit:({email,password})=>{
      setLoading(true);
      signIn('credentials',{email,password,redirect:true,callbackUrl:'https://poroject-3-blog-app.vercel.app/'});
    }
  });
  if(loading){
    return(
      <div className="w-full h-screen bg-white flex justify-center items-center">
        <span>Loading...</span>
      </div>
    )
  }
  return (
    <div className='credentials'>
      {(error && !isSubmitting) && (
        <div className="bg-red-500 py-2 px-1 rounded-md w-[70%] lg:w-[20%] text-white font-bold text-center mb-10">
          <span>{error}</span>
        </div>
      )}
        <span className='text-4xl'>Login</span>
        <form method='POST' className='w-[90%] md:w-[20%]' onSubmit={handleSubmit}>
            <div className='flex flex-col my-3'>
                <label htmlFor="email" className='text-gray-700'>Email</label>
                <input type="email" name="email" id="email" placeholder='Enter email' className='outline-none bg-transparent border-2  px-2 py-1 rounded-md w-full' onChange={handleChange} onBlur={handleBlur} value={values.email}/>
                <p className="text-sm text-red-500 ">{errors.email}</p>
            </div>
            <div className='flex flex-col my-3'>
                <label htmlFor="password" className='text-gray-700'>Password</label>
                <input type="password" name="password" id="password" placeholder='Enter password' className='outline-none bg-transparent border-2  px-2 py-1 rounded-md w-full' onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                <p className="text-sm text-red-500 ">{errors.password}</p>
            </div>
            <p className='font-normal'>
              Don&apos;t have an account? <Link href={'/register'} className='text-teal-500 hover:underline'>Register</Link>
            </p>
            <button type='submit' className='bg-teal-500 px-2 py-1 rounded-md mt-3'>Login</button>
        </form>
    </div>
  )
}
