'use client'
import React from "react";
import {signOut} from 'next-auth/react';
export default function LogOut() {
  return (
    <li>
      <button onClick={()=>signOut()}  className="hover:text-gray-500">
        LOGOUT
      </button>
    </li>
  );
}
