type RegisterNewUserPropsType = {
    userName:string,
    email:string,
    password:string,
    user_type:string
}
interface LoginUserPropsType{
    email:string,
    password:string,
}
export const RegisterNewUser = async({userName,email,password,user_type}:RegisterNewUserPropsType)=>{
    try{
        const data = await fetch("/api/auth/register",{
            method: "POST",     
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({userName,email,password,user_type}),
        });
        const user = await data.json();
        if(data.ok && data.status === 201){
            return user;
        }
        return {
            error:true,
            message:user.message
        };
    }catch(err){
        console.log(err);
        throw new Error("Something going wrong....!!!")
    }
}