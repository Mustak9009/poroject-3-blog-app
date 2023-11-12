
import React from "react";
import { SideBar} from "../../Components";
import Image from "next/image";
import {getPost} from '@/handler/apiHandler';
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const Post = ({post}:{post:{img:string,title:string,description:string,createdAt:string}}) => {
  const data = new Date(post.createdAt);
  const text = post.description.split('\n');
  
  return (
    <div className="pt-5 px-5 lg:px-10">
        <Image src={post.img} className="object-fill lg:object-cover rounded-md  h-[20vh] lg:h-[50vh] w-full" width={0} height={0} sizes="100vw" alt={post.title}/>
        <div className="mt-5 relative">
          <div className="space-x-2 font-verelaRound text-[#be9656]">
            <span>{data.getDate()+" "+monthNames[data.getMonth()]+" "+data.getHours()+":"+data.getMinutes()}</span>
          </div>
          <section className="space-y-1 mb-10">
            <h2 className="text-xl lg:text-2xl font-josefinSans cursor-pointer">
              {post.title}
            </h2>
            <article className="space-y-5">
              {text.map((item,index)=>(
                <p key={index} className={`text-gray-700 font-verelaRound ${index==0 && 'indent-5 first-letter:text-2xl first-letter:font-bold'}`}>{item}</p>
              ))}
            </article>
          </section>
          <span className="font-lora  italic text-[#999] absolute top-0 right-1">1 hour ago</span>
        </div>
      </div>
  );
};
export default async function PostPage({params,searchParams}:{ params: { slug: string }; searchParams?: { [key: string]: string | string[] | undefined }}) {
  const search = searchParams;
  let post;
  if(search){
    const data  = await getPost({postId:search.postId as string});
    post = data.post;
  }
  
  return (
    <div className="w-full h-full">
      <main className="grid lg:grid-cols-[75%_1fr] gap-5 pt-10">
        <Post {...{post}}/>
        <SideBar />
      </main>
    </div>
  );
}
