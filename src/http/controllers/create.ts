import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { CreatePersonUseCase } from "@/use-cases/create-person.js";
import { PersonRepository } from "@/repositories/person.repository.js";

export async function create(request:FastifyRequest, reply:FastifyReply) {
    const registerBodtSchema = z.object({
        cpf: z.string(),
        name: z.string(),
        birth: z.string(),
        email: z.string().email(),
    });
    const { cpf, name, birth, email } = registerBodtSchema.parse(request.body);


    try {
        const personRepository = new PersonRepository();
        const createPersonUseCase = new CreatePersonUseCase(personRepository);

        const person = await createPersonUseCase.handle({cpf,name,birth,email});
        return reply.status(201).send(person);
    } catch (error) {
        return reply.status(400).send({ error: "Failed to create person" });
    }


}