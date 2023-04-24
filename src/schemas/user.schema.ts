import { isValidObjectId } from 'mongoose';
import { z } from 'zod';
//GetUser
//Nesse caso para descobrir os usuarios cadastrados
//usaremos somente o ID de usuario
export const getUserSchema = z.object({
    params: z.object({
        id: z.string(),
    })
});

export const createUserSchema =z.object({
    body: z.object({
        name: z.string().min(3).max(50),
        email: z.string().email(),
        password: z.string().min(5).max(20),
    })
})

export const updateUserSchema = z.object({
    body: z.object({
        name: z.string().min(3).max(50).optional(),
        email: z.string().email().optional(),
    })
})

export const updateUserPasswordSchema = z.object({
    body: z.object({
        password: z.string().min(6).max(20),
    }),
    params: z.object({
        id: z.custom(isValidObjectId),
    })
})

export const deleteUserSchema = z.object({
    params: z.object({
        id: z.custom(isValidObjectId),
    })
})