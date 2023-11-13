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
        const data = await fetch(`/api/authorPost/?authorID=${authorId}`);
        const res = await data.json();
        return res;
    }catch(err){
        console.log(err);
        throw new Error("Something going wrong....!!!")
    }
}
export const checkEnvironment = () => {
    let base_url =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://poroject-3-blog-app.vercel.app"; // https://v2ds.netlify.app
  
    return base_url;
  };
export const getPost = async({postId}:{postId:string})=>{
    try{
        const data = await fetch(checkEnvironment().concat(`/api/post/?postId=${postId}`));
        const res = await data.json();
        return res;
    }catch(err){
        console.log(err);
        throw new Error("Something going wrong....!!!")
    }
}