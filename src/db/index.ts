import {prisma} from '@/prisma';
export const ConnectDB = async() =>{
    try{
        await  prisma.$connect();
    }catch(err){
        console.log(err);
        throw new Error("Connection failed...!!!");
    }
}