
import { createRouter } from '../router/context'
// import { postRouter } from './post.router'
import { userRouter } from './user.router'

export const appRouter = createRouter()
  .merge('users.', userRouter)


export type AppRouter = typeof appRouter