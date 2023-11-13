'use client'
import React, { useState,useEffect} from "react";
import {getPosts} from '@/handler/apiHandler';
import { useQuery } from "@tanstack/react-query";
import {Post} from '../Components';
export const dynamic = 'force-static'
export const revalidate = 3 * 60 * 60 * 1000
export const fetchCache  = 'force-cache'
export default  function Posts() {
  const [posts,setPosts] = useState<PostsType[]>([]);
  const {data,isLoading} = useQuery({queryKey:['getPosts'],queryFn:getPosts,staleTime: 3 * 60 * 60 * 1000});
  useEffect(()=>{
    if(data){
      const {posts} = data;
      setPosts(posts);
    }
  },[data])
  if(isLoading){
    return(
      <div className="absolute inset-0 bg-white flex justify-center items-center text-xl text-gray-500">
        <span>Loading posts...</span>
      </div>
    )
  }
  return (
    <div className="w-full container mx-auto lg:px-10 py-5 space-y-5">
      {posts.map(({id,title,img,description,createdAt})=>(
        <Post {...{id,title,img,description,createdAt}} key={id}/>
      ))}
    </div>
  );
}
