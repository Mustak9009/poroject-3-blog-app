"use client";
import React, { useState, useEffect } from "react";
import { getAllAuthorPosts } from "@/handler/apiHandler";
import { useQuery } from "@tanstack/react-query";
import Post from "../components/Post";
import Link from 'next/link';
export const revalidate = 0
export default function Hero({ authorID }: { authorID: string }) {
  const [posts, setPosts] = useState<PostsType[]>([]);
  const { data, isLoading, isSuccess } = useQuery({queryKey: ["author_posts"],queryFn: () => getAllAuthorPosts({ authorId: authorID })});
  useEffect(() => {
    if (data) {
      setPosts(data.authorAllPosts);
    }
  }, [data]);
  if(posts.length == 0 && !isLoading){
    return(
      <div className="text-center w-full mt-10 text-xl font-josefinSans space-y-2">
        <p className="text-2xl">You don&apos;t have any posts right now.</p>
        <div className="space-y-1 mt-10">
          <p><Link href={'/write'} className="text-teal-500 underline">Create</Link> post.</p>
          <p>
            <button className="text-teal-600 underline" onClick={()=>window.location.reload()}>Page</button> {' '}
            Refresh
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className="w-full container mx-auto lg:px-10 py-5 relative">
      <div className="mb-5 mx-5">
        <b>Your posts:</b>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {isSuccess && !isLoading ? (
          posts.map(({ id, title, img, description, createdAt }) => (
            <Post {...{ title, img, description, createdAt,id }} key={id} />
          ))
        ) : (
          <>
          {[1,2,3,4].map((item)=>(
            <div key={item} className="animate-pulse opacity-30 w-full md:h-[30vh] p-10">
              <div className="bg-gray-300  rounded-md  w-full h-40 sm:h-full"/>
              <div className="w-[5rem] bg-gray-300 h-[2rem] mt-2 rounded-md"/>
            </div>
          ))}
          </>
        )}
      </div>
    </div>
  );
}
