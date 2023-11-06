import React from "react";
import Link from "next/link";

export default function Register() {
  return (
    <div className="credentials">
      <span className="text-4xl">Register</span>
      <form method="POST" className="w-[20%]">
        <div className="flex flex-col my-3">
          <label htmlFor="userName" className="text-gray-700">
            User name
          </label>
          <input type="text" name="userName" id="userName" placeholder="user@name" className="outline-none bg-transparent border-2  px-2 py-1 rounded-md w-full"/>
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="email" className="text-gray-700">
            Email
          </label>
          <input type="email" name="email" id="email" placeholder="Enter email" className="outline-none bg-transparent border-2  px-2 py-1 rounded-md w-full"/>
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="password" className="text-gray-700">
            Password
          </label>
          <input type="password" name="password" id="password" placeholder="Enter password" className="outline-none bg-transparent border-2  px-2 py-1 rounded-md w-full"/>
        </div>
        <p className="font-normal">
          Do you have an account?{" "}
          <Link href={"/login"} className="text-teal-500 hover:underline">
            Login
          </Link>
        </p>
        <button type="submit" className="bg-teal-500 px-2 py-1 rounded-md mt-3">
          Register
        </button>
      </form>
    </div>
  );
}
