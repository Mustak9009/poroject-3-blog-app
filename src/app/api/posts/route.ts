import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "@/db";
import { prisma } from "@/prisma";

ConnectDB();
type postData={
  title:string
  description:string
  authorId:string
  img?:string
}
export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    const {userId, title, img, description} = reqBody;
    const postData:postData = {title, description,authorId:userId};
    if(img){
      postData.img = img;
    }
    const newPost = await prisma.posts.create({data: {...postData}});
    return NextResponse.json({ newPost }, { status: 200});
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Something going wrong....!!!" },{ status: 500 });
  }
};

export const GET = async (req:NextRequest)=>{
  try{
    const posts = await prisma.posts.findMany({orderBy:{createdAt:'desc'}});
    return NextResponse.json({ posts }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Something going wrong....!!!" },{ status: 500 });
  }
}