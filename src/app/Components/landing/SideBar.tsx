import React from "react";
import Image from "next/image";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";
export default function SideBar() {
  return (
    <div className="w-full h-[100vh]  bg-[#fdfbfb]  my-5">
      <div className="p-5 font-lora">
        <div className="my-2 space-y-5 flex justify-center items-center  flex-col">
          <span className="text-center w-full lg:border-y-2 border-gray-400 py-1 inline-block font-medium text-2xl">
            ABOUT ME
          </span>
          <Image className="rounded-md object-cover" src={"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="it's me" width={500} height={500}/>
          <p className="font-medium text-lg text-gray-800">
            I am a passionate blog post creator, crafting engaging content that
            informs, entertains, and inspires. With a keen eye for storytelling
            and a love for sharing knowledge, I bring ideas to life through the
            written word.
          </p>
        </div>
        <div className="my-2">
          <span className="py-1 inline-block font-medium text-xl">
            CATEGORIES
          </span>
          <ul className="text-xl ml-2 space-y-2 grid grid-cols-2 place-items-center items-center list-disc [&>li]:w-28  ">
            <li>Life</li>
            <li>Music</li>
            <li>Style</li>
            <li>Sport</li>
            <li>Teck</li>
            <li>Cooking</li>
          </ul>
        </div>
        <div className="my-2">
          <span className="py-1 inline-block font-medium text-xl">
            FOLLOW US
          </span>
          <div className="flex gap-5 mt-2  text-2xl">
            <Link href={"#"} target="_blank">
              <AiFillInstagram />
            </Link>
            <Link href={"#"} target="_blank">
              <BsTwitter />
            </Link>
            <Link href={"#"} target="_blank">
              <AiFillLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
