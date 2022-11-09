import { createRouter } from "./context";
import * as trpc from '@trpc/server'
import { prisma } from '../../server/db/client'
import { z } from "zod";
import users from "../../pages/api/users";
import { createUserSchema, createUserOutputSchema, requestUP } from "../../schema/user.schema";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { encode } from "punycode";


export const userRouter = createRouter().mutation("register-user", {
    input: createUserSchema,
    async resolve({ ctx, input }) {
        const { email, password } = input

        try {
            const user = await ctx.prisma.user.create({
                data: {
                    email,
                    password,
                },
            })
            return user
            // console.log(ctx.session?.user.id);

        }
        catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                if (e.code === 'P2002') {
                    throw new trpc.TRPCError({
                        code: 'CONFLICT',
                        message: 'User already exists'
                    })
                }
            }
            throw new trpc.TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                message: 'Something went wrong'
            })

        }

    },
}).mutation('requestUP', {
    input: requestUP,
    async resolve({ input, ctx }) {
        const { email, password } = input

        const user = await ctx.prisma.user.findUnique({
            where: {
                email,

            }
        })

        if (!user) {
            throw new trpc.TRPCError({
                code: 'NOT_FOUND',
                message: 'User not found'
            })
        }
        const token = await ctx.prisma.loginToken.create({
            data: {
                user: {
                    connect: {
                        id: user.id,

                    },
                },
            },

        })
        return token
    }

})


