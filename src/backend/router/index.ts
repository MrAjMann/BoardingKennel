import * as trpc from '@trpc/server';

import superjson from 'superjson';
import { userRouter } from './users';


export const appRouter = trpc
  .router()
  .transformer(superjson)
  .merge("users.", userRouter);
// export type definition of API
  export type AppRouter = typeof appRouter;