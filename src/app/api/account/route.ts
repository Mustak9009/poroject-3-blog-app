import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "@/db";
import { prisma } from "@/prisma";

ConnectDB();
export const GET = async ({userId}:{userId:string}) => {
  try {
    const user = await prisma.user.findUnique({where:{id:userId}});
    return NextResponse.json({ user }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Something going wrong....!!!" },{ status: 500 });
  }
};