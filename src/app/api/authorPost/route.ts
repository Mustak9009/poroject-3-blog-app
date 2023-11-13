import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "@/db";
import { prisma } from "@/prisma";

ConnectDB();
export const GET = async (req:NextRequest) => {
  try {
    // const url = new URL(req.url);
    // const authorId = req.nextUrl.searchParams.get('authorID');
    // if(!authorId){
    //   return NextResponse.json({error:'Required author id'},{status:422});
    // }
    const authorAllPosts = await prisma.posts.findMany({where:{authorId:'654dbb39294bfa1f00a580e1'}});
    return NextResponse.json({ authorAllPosts }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Something going wrong....!!!" },{ status: 500 });
  }
};
