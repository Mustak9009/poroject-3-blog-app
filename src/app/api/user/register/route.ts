import {NextRequest,NextResponse} from 'next/server';
import {hash,genSalt} from 'bcryptjs'
import {prisma} from '@/prisma';

import {ConnectDB} from '@/db';
ConnectDB();
export const POST = async (req:NextRequest) =>{
    try{
        const reqBody = await req.json();
        const {userName,email,password,user_type} = reqBody;

        const salt = await genSalt(10);
        const hashPassword = await hash(password,salt);

        const isUserExist = await prisma.user.findFirst({where:{OR:[{email},{userName}]}});
        if(isUserExist){
            return NextResponse.json({message:"User already exist"},{status:409});
        }
        const createAUser =await prisma.user.create({data:{
            userName,
            email,
            password:hashPassword,
            role:user_type
        },select:{email:true}});
        return NextResponse.json({user:createAUser},{status:201});
    }catch(err){
        console.log(err);
        return NextResponse.json({error:"Something going wrong....!!!"},{status:500});
    }
}