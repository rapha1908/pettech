import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { CreatePersonUseCase } from "../../../use-cases/create-person.js";
import { PersonRepository } from "../../../repositories/person.repository.js";

export async function create(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        cpf: z.string(),
        name: z.string(),
        birth: z.string(),
        email: z.string().email(),
        user_id: z.coerce.number(),
    });
    const { cpf, name, birth, email, user_id } = registerBodySchema.parse(request.body);


    try {
        const personRepository = new PersonRepository();
        const createPersonUseCase = new CreatePersonUseCase(personRepository);

        const person = await createPersonUseCase.handle({
            cpf,
            name,
            birth: new Date(birth),
            email,
            user_id
        });
        return reply.status(201).send(person);
    } catch (error) {
        console.error("Failed to create person:", error);
        return reply.status(400).send({ error: "Failed to create person" });
    }


}