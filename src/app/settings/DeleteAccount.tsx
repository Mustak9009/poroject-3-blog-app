'use client'
import React from 'react'
import {deleteAccount} from '@/handler/apiHandler';
import {signOut} from 'next-auth/react';
export default function DeleteAccount({userId}:{userId:string}) {
  const handleDelete = ()=>{
    try{
        deleteAccount({userId});
        signOut();
    }catch(err){
        console.log(err);
    }
  }
  return (
    <>
        <h1 className="text-4xl lg:text-5xl text-red-400">Update Your Account.</h1>
        <button className="text-red-400 text-xl hover:underline" onClick={handleDelete}>Delete account</button>
    </>
  )
}
