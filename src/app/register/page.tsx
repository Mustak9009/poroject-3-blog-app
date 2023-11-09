'use client'
import React from "react";
import Link from "next/link";
import {useFormik} from 'formik';
import {RegisterSchema} from '@/schema';
export default function Register() {
  const {handleChange,values,handleSubmit,handleBlur,errors} = useFormik({
    validationSchema:RegisterSchema,
    initialValues:{
      userName:'',
      email:'',
      password:'',
      user_type:'USER'
    },
    onSubmit:(values)=>{
      console.log(values)
    }
  })
  return (
    <div className="credentials">
      <span className="text-4xl">Register</span>
      <form method="POST" className="w-[70%] lg:w-[20%]" onSubmit={handleSubmit}>
        <div className="flex flex-col my-3">
          <label htmlFor="userName" className="text-gray-700">
            User name
          </label>
          <input type="text" name="userName" id="userName" placeholder="user@name" className="outline-none bg-transparent border-2  px-2 py-1 rounded-md w-full" onChange={handleChange} onBlur={handleBlur} value={values.userName}/>
          <p className="text-sm text-red-500 ">{errors.userName}</p>
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="email" className="text-gray-700">
            Email
          </label>
          <input type="email" name="email" id="email" placeholder="Enter email" className="outline-none bg-transparent border-2  px-2 py-1 rounded-md w-full" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
          <p className="text-sm text-red-500 ">{errors.email}</p>
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="password" className="text-gray-700">
            Password
          </label>
          <input type="password" name="password" id="password" placeholder="Enter password" className="outline-none bg-transparent border-2  px-2 py-1 rounded-md w-full" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
          <p className="text-sm text-red-500 ">{errors.password}</p>
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="user_type">
            Select user:
          </label>
          <select name="user_type" id="user_type" className="bg-gray-200 p-1 rounded-md" defaultValue={values.user_type} onChange={handleChange} onBlur={handleBlur}>
            <option value="USER">user</option>
            <option value="AUTHOR">Author</option>
          </select>
        </div>
        <p className="font-normal">
          Do you have an account?{" "}
          <Link href={"/login"} className="text-teal-500 hover:underline">
            Login
          </Link>
        </p>
        <button type="submit" className="bg-teal-500 px-2 py-1 rounded-md mt-3">
          Register
        </button>
      </form>
    </div>
  );
}
