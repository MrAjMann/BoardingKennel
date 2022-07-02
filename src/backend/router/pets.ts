import * as trpc from '@trpc/server';
import { z } from 'zod';
import {prisma} from '../../db/client'


export const petRouter = trpc
  .router()
  .query("getPets", {
    async resolve() {
      // console.log(prisma.pets);
      
      return await prisma.pets?.findFirst({
        where: {
          owner: "johno@test.com",
        }
      });
    },
  })
