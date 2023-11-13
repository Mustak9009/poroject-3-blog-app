"use client";
import React, { ChangeEvent, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { handlePrivewImg,uploadImgCloudnary } from "@/utils/handleImg";
import { useFormik } from "formik";
import { writePostSchema } from "@/schema";
import { useMutation } from "@tanstack/react-query";
import { CreatePost } from "@/handler/apiHandler";
import { RxCrossCircled } from "react-icons/rx";
const defaultImg = 'https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'

export default function Write() {
  const { data: session } = useSession();
  const [imgSrc, setImg] = useState(defaultImg);
  const [imgWidthError, setImgWidthError] = useState<string | null>("");
  const [sucess, setSucess] = useState<boolean>(true);
  const [loadingImg,setImgLoading] = useState<boolean>(false);
  const [uploadImg,setUploadImg] = useState<ChangeEvent<HTMLInputElement>>();
  const { data: posts, mutate, isSuccess, isPending,isError} = useMutation({ mutationKey: ["createPost"], mutationFn: CreatePost });
  const { values, handleChange, handleBlur, handleSubmit, errors,resetForm } = useFormik({
    initialValues: {
      title: "",
      story: "",
    },
    validationSchema: writePostSchema,
    onSubmit: async ({ title, story }) => {
      if(uploadImg){
        setImgLoading(true);
        await uploadImgCloudnary({event:uploadImg}).then((data)=>{
          if (session?.user) {
            mutate({
              title,
              description: story,
              img: data.imgUrl,
              userId: session?.user.id,
            });
            resetForm();
            setImg(defaultImg);
            setImgLoading(false)
        }
        })
      }
    },
  });
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const res = await handlePrivewImg({ event });
    setUploadImg(event);
    if (res?.resolve) {
      setImg(res.srcOrError);
      setImgWidthError(null);
    } else {
      setImgWidthError(res?.srcOrError);
    }
  };
  if (session?.user.role === "USER") {
    redirect("/");
  }
  if (isPending) {
    return (
      <div className="absolute inset-0 bg-white grid place-items-center">
        <span>Posting🫡...</span>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="absolute inset-0 bg-white grid place-items-center">
        <span className="text-red-500">Something going wrong....!!!</span>
      </div>
    );
  }
  return (
    <div className="w-full mt-12 font-verelaRound">
      {isSuccess && sucess && (
        <div className="absolute inset-0  grid place-items-center z-10 bg-gray-200 bg-opacity-40">
          <section className="w-[30rem] p-2 rounded-md space-y-3 relative bg-white !opacity-100 shadow-sm">
            <h2 className="text-3xl  mr-12">{posts.title}</h2>
            <p className="text-gray-500 font-verelaRound Blog_post_description">
              {posts.story}
            </p>
            <RxCrossCircled className="absolute top-0 right-5 text-xl text-teal-400 hover:cursor-pointer" onClick={() => setSucess(!isSuccess)}/>
          </section>
        </div>
      )}
      <div className="grid place-items-center mb-5 relative w-[90%] md:w-[76.5%] md:h-[30vh] mx-auto overflow-hidden">
        <Image id="uploadPreview" src={imgSrc} className="object-cover rounded-md  w-full  md:h-[30vh]" width={500} height={100} alt="Music blog"/>
          {loadingImg && <span className="absolute inset-0 bg-gray-500 bg-opacity-50 grid place-items-center text-white text-xl">Uploding img...</span> }
          <label htmlFor="img" title="Add img..." className={`cursor-pointer inline-block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white ${!loadingImg && 'px-2 py-1'} rounded-md opacity-60 select-none ${imgWidthError && "text-red-400"}`}>
            {imgWidthError ? imgWidthError : (imgSrc === defaultImg) ? (!loadingImg && 'Default') : (!loadingImg &&  'Set img')}
            <input type="file" name="img" id="img" style={{ display: "none" }} accept="image/png, image/gif, image/jpeg" onChange={handleFileChange}/>
          </label>
      </div>  
      <div className="w-[96%] md:w-full h-full flex justify-center items-start">
        <form method="POST" onSubmit={handleSubmit}>
          <div className="flex justify-start items-center gap-2 my-5 relative">
            <label htmlFor="img" title="Add img...">
              <AiOutlinePlusCircle className="text-3xl text-gray-600 cursor-pointer" />
            </label>
            <input type="file" name="img" id="img" style={{ display: "none" }} accept="image/png, image/gif, image/jpeg" onChange={handleFileChange}/>
            <span className="absolute -bottom-4 left-11 text-sm text-red-500">
              {errors.title}
            </span>
            <input type="text" name="title" id="title" placeholder="Title" className={`outline-none w-full text-2xl font-semibold  py-1 px-2 ${errors.title && "placeholder-red-400" }`} value={values.title} onChange={handleChange} onBlur={handleBlur}/>
            <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-3 py-1.5 rounded-md  absolute right-0">
              Share
            </button>
          </div>
          <div className="relative">
            <span className="absolute -bottom-4 right-0 text-sm text-red-500">
              {errors.story}
            </span>
            <textarea name="story" id="story" className={`outline-none pl-12  rounded-md resize-none tracking-widest w-[77vw] ${   errors.title && "placeholder-red-400" }`} placeholder="Tell your story..." cols={10} rows={5} onChange={handleChange} onBlur={handleBlur} value={values.story}></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
