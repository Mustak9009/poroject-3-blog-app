import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "@/db";
import { prisma } from "@/prisma";

ConnectDB();
export const DELETE = async (req:NextRequest) => {
  try {
    const reqBody = await req.json();
    const {userId} = reqBody;
    const deleteUser = await prisma.user.delete({where:{id:userId},select:{id:true}});
    return NextResponse.json({done:deleteUser.id}, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Something going wrong....!!!" },{ status: 500 });
  }
};
