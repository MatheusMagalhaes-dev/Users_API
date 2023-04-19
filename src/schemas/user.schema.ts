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