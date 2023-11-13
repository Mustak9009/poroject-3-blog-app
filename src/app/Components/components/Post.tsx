import React from 'react'
import Image from "next/image";
import Link from "next/link";

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
export default function Post({id,title,img,description,createdAt}:PostsType) {
  const data = new Date(createdAt);

  return (
    <div className="w-full px-5 space-y-5" >
    <Image src={img} className="object-cover rounded-md w-full md:h-[30vh]" width={1000} height={100} alt="abx"/>
    <div className="w-full space-y-5">
      <div className="space-x-2 font-verelaRound text-[#be9656]">
        <span>{data.getDate()+" "+monthNames[data.getMonth()]+" "+data.getHours()+":"+data.getMinutes()}</span>
      </div>
      <section className="space-y-1">
        <h2 className="text-xl lg:text-2xl font-josefinSans cursor-pointer hover:underline">
          <Link href={`/posts/${id.toString()}`}>
            {title}
          </Link>
        </h2>
        <p className="text-gray-700 font-verelaRound Blog_post_description">
          {description}
        </p>
      </section>
      <span className="font-lora  italic text-[#999]"></span>
    </div>
  </div>
  )
}
