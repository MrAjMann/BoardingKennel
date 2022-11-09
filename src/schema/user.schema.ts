import z from 'zod'

export const createUserSchema = z.object({
  password: z.string(),
  email: z.string().email(),
})

export const createUserOutputSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
})

export type CreateUserInput = z.TypeOf<typeof createUserSchema>

export const requestUP = z.object({
  redirect: z.string().default('/dashboard/profile'),
  email: z.string().email(),
  password: z.string(),

})


export type requestUPInput = z.TypeOf<typeof requestUP>


export const verifyOtpSchema = z.object({
  hash: z.string(),
})


