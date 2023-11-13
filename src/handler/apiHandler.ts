type RegisterNewUserPropsType = {
    userName:string,
    email:string,
    password:string,
    user_type:string
}
type createPostPropsType = {
    userId:string, 
    title:string, 
    img:string, 
    description:string
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
export const CreatePost = async({userId, title, img, description}:createPostPropsType) =>{
    try{
        const data = await fetch("/api/posts",{
            method: "POST",     
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({userId, title, img, description}),
        });
        const {newPost} = await data.json();    ;
        return {
            title:newPost.title,
            story:newPost.description
        };
    }catch(err){
        console.log(err);
        throw new Error("Something going wrong....!!!")
    }
}
export const getPosts = async()=>{
    try{
        const data = await fetch('/api/posts');
        const res = await data.json();
        return {posts:res.posts}
    }catch(err){
        console.log(err);
        throw new Error("Something going wrong....!!!")
    }
}

export const getAllAuthorPosts = async({authorId}:{authorId:string})=>{
    try{
        const data = await fetch('https://poroject-3-blog-app.vercel.app/api/authorPost',{
            method: "POST",     
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: JSON.stringify({authorId}),
        });
        const res = await data.json();
        return res;
    }catch(err){
        console.log(err);
        throw new Error("Something going wrong....!!!")
    }
}

export const getPost = async({postId}:{postId:string})=>{
    try{
        const data = await fetch('https://poroject-3-blog-app.vercel.app/api/post',{
            method: "POST",     
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: JSON.stringify({postId}),
        });
  
        const res = await data.json();
        return res;
    }catch(err){
        console.log(err);
        throw new Error("Something going wrong....!!!")
    }
}