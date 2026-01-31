import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { CreateUserUseCase } from "../../../use-cases/create-user.js";
import { UserRepository } from "../../../repositories/user.repository.js";

export async function create(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        username: z.string(),
        password: z.string().min(6),
    });
    const { username, password } = registerBodySchema.parse(request.body);
    try {
        const userRepository = new UserRepository();
        const createUserUseCase = new CreateUserUseCase(userRepository);
        const user = await createUserUseCase.handle({username,password});
        return reply.status(201).send(user);
    } catch (error) {
        return reply.status(400).send({ error: "Failed to create user" });
    }
}