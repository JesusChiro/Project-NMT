import { z } from 'zod'

export const registerSchema = z.object({
    username: z
        .string({
            required_error: 'Username must not be empty'
        }),
    email: z
        .string({
            required_error: 'Email must not be empty'
        })
        .email({
            required_error: 'Email must be valid'
        }),
    password: z
        .string({
            required_error: 'Password must not be empty'
        })
        .min(6, {
            message: 'Password must be at least 6 characters long'
        })
})

export const loginSchema = z.object({
    email: z
        .string({
            required_error: 'Email must not be empty'
        })
        .email({
            required_error: 'Email must be valid'
        }),
    password: z
        .string({
            required_error: 'Password must not be empty'
        })
        .min(6, {
            message: 'Password must be at least 6 characters long'
        })
})