import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "@/db";
import { prisma } from "@/prisma";
import {hash,genSalt} from 'bcryptjs'
ConnectDB();
export const PUT = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    const {userName,password} = reqBody
    const salt = await genSalt(10);
    const hashPassword = await hash(password,salt);

    const updateUser = await prisma.user.update({where:{userName},data:{password:hashPassword}});
    return NextResponse.json({ updateUser },{ status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Something going wrong....!!!" },{ status: 500 });
  }
};
