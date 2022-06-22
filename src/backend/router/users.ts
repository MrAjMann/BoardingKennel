import * as trpc from '@trpc/server';
import { z } from 'zod';
import {prisma} from '../../db/client'

export const userRouter = trpc
  .router()
  .query("getUser", {
    async resolve() {
      return await prisma.user.findMany();
    },
  })
