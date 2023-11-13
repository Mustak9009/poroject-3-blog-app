import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "@/db";
import { prisma } from "@/prisma";
export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache  = 'force-no-store'
ConnectDB();
export const GET = async (req:NextRequest) => {
  try {
    const url = new URL(req.url);
    const authorId = url.searchParams.get('authorID');
    if(!authorId){
      return NextResponse.json({error:'Required author id'},{status:422});
    }
    const authorAllPosts = await prisma.posts.findMany({where:{authorId}});
    return NextResponse.json({ authorAllPosts }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Something going wrong....!!!" },{ status: 500 });
  }
};
