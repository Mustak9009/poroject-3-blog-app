import React from "react";
import Image from "next/image";
import Link from 'next/link';
function Post() {
  return (
    <div className="w-full md:max-w-[21.9rem] px-5 space-y-5">
      <Image  src={"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} className="object-cover rounded-md w-full" width={350} height={350} alt="Music blog"/>
      <div className="w-full space-y-5"> 
        <div className="space-x-2 font-verelaRound text-[#be9656]">
          <span>Music</span>
          <span>Life</span>
        </div>
        <section className="space-y-1">
          <h2 className="text-xl lg:text-2xl font-josefinSans cursor-pointer hover:underline">
            <Link href={'/posts/lorem-ipsum-dolor-sit-amet'}>
              Lorem ipsum dolor sit amet.
            </Link>
          </h2>
          <p className="text-gray-700 font-verelaRound Blog_post_description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil esse
            facere deserunt ullam accusantium soluta laborum eveniet nostrum
            exercitationem atque?
          </p>
        </section>
        <hr/>
        <span className="font-lora  italic text-[#999]">1 hour ago</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="w-full container mx-auto lg:px-10 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}
