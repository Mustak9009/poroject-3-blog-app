import React from "react";
import Image from "next/image";
import {BsCamera} from 'react-icons/bs';

export default function Settings() {
  return (
    <div className="px-5 w-full sm:w-[84%] mx-auto mt-10 font-youngSerif">
      <div className="my-5 flex justify-between items-center">
        <h1 className="text-4xl lg:text-5xl text-red-400">Update Your Account.</h1>
        <button className="text-red-400 text-xl hover:underline">Delete account</button>
      </div>
      <div className="w-full h-full">
        <div className="my-5 space-y-2" title="Add picture">
            <p className="text-xl">Profile picture</p>
            <div className="border w-24 rounded-full group overflow-hidden h-24 object-fill flex justify-center items-stretch cursor-pointer relative">
                <Image src={"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}  width={100} height={100}  alt="Music blog"/>
                <BsCamera className='text-xl w-24 h-24 text-red-400 bg-gray-200 p-8 bg-opacity-60 absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 invisible group-hover:visible'/>
            </div>
        </div>
       <div className="mt-5 w-full">
        <form method="POST">
                <div className="flex flex-col my-5 gap-2">
                    <label htmlFor="userName" className="text-gray-600">UserName</label>
                    <input type="text" name="userName" id="userName" placeholder="user@name" className="outline-none border-b border-gray-400 py-2 px-2 "/>
                </div>
                <div className="flex flex-col my-5 gap-2">
                    <label htmlFor="email" className="text-gray-600">Email</label>
                    <input type="email" name="email" id="email" placeholder="abc@email.com" className="outline-none border-b border-gray-400 py-2 px-2 "/>
                </div>
                <div className="flex flex-col my-5 gap-2">
                    <label htmlFor="password" className="text-gray-600">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••••••" className="outline-none border-b border-gray-400 py-2 px-2 "/>
                </div>
                <button type="submit" className="px-4 py-2 bg-teal-500 rounded-md text-white">Update</button>
            </form>
       </div>
      </div>
    </div>
  );
}
