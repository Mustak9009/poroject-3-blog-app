'use client'
import React from "react";
import {useFormik} from 'formik';
import {useMutation} from '@tanstack/react-query';
import {updateUserDetails} from '@/handler/apiHandler';
import {signOut} from 'next-auth/react';
import {updateUserSchema} from '@/schema';
export default function UserDetials({userName,email}:{email:string,userName:string}) {
  const {mutate} = useMutation({mutationKey:['upadteUser_details'],mutationFn:updateUserDetails})
  const {values,handleSubmit,handleChange,handleBlur,errors} = useFormik({
        initialValues:{
            password:''
        },
        validationSchema:updateUserSchema,
        onSubmit:({password})=>{
            mutate({userName,password});
            signOut();
        }
    })
  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className="flex flex-col my-5 gap-2">
        <label htmlFor="userName" className="text-gray-600">
          UserName
        </label>
        <input type="text" name="userName" id="userName" placeholder="user@name" className="outline-none border-b border-gray-400 py-2 px-2 bg-gray-100 rounded-t-md" readOnly value={userName}/>
      </div>
      <div className="flex flex-col my-5 gap-2">
        <label htmlFor="email" className="text-gray-600">
          Email
        </label>
        <input type="email" name="email" id="email" placeholder="abc@email.com" className="outline-none border-b border-gray-400 py-2 px-2 bg-gray-100 rounded-t-md" readOnly  value={email}/>
      </div>
      <div className="flex flex-col my-5 gap-2">
        <label htmlFor="password" className="text-gray-600">
          Password
        </label>
        <input type="password" name="password" id="password" placeholder="••••••••••••" className="outline-none border-b border-gray-400 py-2 px-2 " onChange={handleChange} onBlur={handleBlur} value={values.password}/>
        <p className="text-red-500 text-sm">{errors.password}</p>
      </div>
      <button type="submit" className="px-4 py-2 bg-teal-500 rounded-md text-white">
        Update
      </button>
    </form>
  );
}
