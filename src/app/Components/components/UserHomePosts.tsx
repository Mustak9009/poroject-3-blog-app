'use client'
import React, { useState,useEffect} from "react";
import {getPosts} from '@/handler/apiHandler';
import { useQuery } from "@tanstack/react-query";
import Post from './Post';
export default  function Posts() {
  const [posts,setPosts] = useState<PostsType[]>([]);
  const {data,isLoading} = useQuery({queryKey:['getPosts'],queryFn:getPosts});
  useEffect(()=>{
    if(data){
      const {posts} = data;
      setPosts(posts);
    }
  },[data]);
  return (
    <div className="w-full container mx-auto lg:px-10 py-5 space-y-5 relative">
     <b>Latest posts:</b>
      {posts.slice(0,2).map(({id,title,img,description,createdAt})=>(
        <Post {...{title,img,description,createdAt,id}} key={id}/>
      ))}
      {isLoading &&
       [1,2].map((item)=>(
        <div key={item} className="animate-pulse opacity-30 w-full md:h-[30vh] p-10">
          <div className="bg-gray-300  rounded-md  w-full h-40 sm:h-full"/>
          <div className="w-[5rem] bg-gray-300 h-[2rem] mt-2 rounded-md"/>
        </div>
      ))
      }
    </div>
  );
}
