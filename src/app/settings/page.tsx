import React from "react";
import Image from "next/image";
import {BsCamera} from 'react-icons/bs';
import {UserDetials} from '@/app/Components';
import {getServerSession} from 'next-auth';

import DeleteAccount from './DeleteAccount';
import {authOption} from '@/app/api/auth/[...nextauth]/authOption';
export default async function Settings() {
  const session = await getServerSession(authOption);
  const user = {
    id:'',
    userName:'',
    email:''
  }
  if(session?.user.email && session.user.userName){
    user.userName = session.user.userName;
    user.email = session.user.email;
    user.id = session.user.id
  }
  return (
    <div className="px-5 w-full sm:w-[84%] mx-auto mt-10 font-youngSerif">
      <div className="my-5 flex justify-between items-center">
        <DeleteAccount userId={user.id}/>  
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
        <UserDetials userName={user.userName} email={user.email}/>
       </div>
      </div>
    </div>
  );
}
