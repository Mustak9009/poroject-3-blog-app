import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    userName: string;
    role: string;
  }
  interface Session {
    user: User & {
      userName: string;
      role: string;
    };
  }
}
