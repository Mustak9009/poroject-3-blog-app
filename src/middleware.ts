export { default } from "next-auth/middleware"

export const config = { matcher: ["/write",'/posts','/posts/:slug*','/settings'] }