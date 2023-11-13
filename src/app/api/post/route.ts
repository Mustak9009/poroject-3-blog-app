import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "@/db";
import { prisma } from "@/prisma";
ConnectDB();
export const GET = async (req: NextRequest) => {
    try{
        // const postId  = req.nextUrl.searchParams.get('postId');
        // if(!postId){
        //     return NextResponse.json({error:'Required post id'},{status:422});
        // }
        const post = await prisma.posts.findUnique({where:{id:'65504db251adce2ab8c984fc'}});
        return NextResponse.json({ post }, { status: 200 });
    }catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Something going wrong....!!!" },{ status: 500 });
  }
}