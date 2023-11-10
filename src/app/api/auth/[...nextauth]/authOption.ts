import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/prisma";
import { compare } from "bcryptjs";

export const authOption: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    Credentials({
      name: "UserAuthentication",
      credentials: {
        email: { label: "Email", placeholder: "Enter your email" },
        password: { label: "Password", placeholder: "Enter your password" },
      },
      async authorize(credentials, req) {//Run - 1
        if (!credentials || !credentials.password || !credentials.email) {
          throw new Error("Please provide credentials");
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) {
          throw new Error("User not found");
        }
        const matchPassword = await compare(
          credentials.password,
          user?.password
        );
        if (!matchPassword) {
          throw new Error("Wrong credentials");
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session }) {//Run - 2
      if (user) {
        return {
          ...token,
          id: user.id,
          userName: user.userName,
          role: user.role,
        };
      }
      return token;
    },
    async session({ session, token, trigger }) { //Run - 3
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          userName: token.userName,
          role: token.role,
        },
      };

    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
