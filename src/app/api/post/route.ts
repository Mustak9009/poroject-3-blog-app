import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "@/db";
import { prisma } from "@/prisma";

ConnectDB();
export const POST = async (req: NextRequest) => {
    try{
        const reqBody = await req.json();
        const {postId} = reqBody;
        const post = await prisma.posts.findUnique({where:{id:postId}});
        return NextResponse.json({ post }, { status: 200 });
    }catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Something going wrong....!!!" },{ status: 500 });
  }
}