'use client'
import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {SessionProvider} from 'next-auth/react';
const queryClient = new QueryClient();
export default function AppContext({children}:{children:React.ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>
        <SessionProvider basePath="/api/auth">
          {children}  
        </SessionProvider>
    </QueryClientProvider>
  )
}
