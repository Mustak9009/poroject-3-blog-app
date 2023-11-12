import React from 'react'
import AuthorHomePosts from '../components/AuthorHomePosts';
import {getServerSession} from 'next-auth';
import {authOption} from '@/app/api/auth/[...nextauth]/authOption';
import UserHomePosts from '../components/UserHomePosts';
export default async function HomePostServer() {
  const session = await getServerSession(authOption);
  if(session){
    if(session.user.role === 'AUTHOR'){
      return(
        <AuthorHomePosts authorID={session?.user.id}/>
      )
    }
  }
  return (
    <UserHomePosts/>
  )
}
