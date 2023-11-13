import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "@/db";
import { prisma } from "@/prisma";

ConnectDB();
export const POST = async (req:NextRequest) => {
  try {
    const reqBody = await req.json();
    const {authorId} = reqBody;
    const authorAllPosts = await prisma.posts.findMany({where:{authorId}});
    return NextResponse.json({ authorAllPosts }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Something going wrong....!!!" },{ status: 500 });
  }
};
