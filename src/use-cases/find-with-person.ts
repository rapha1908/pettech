import type { UserRepository } from "@/repositories/user.repository.js";
import type { Person } from "../entities/person.entity.js";
import type { PersonRepository } from "../repositories/person.repository.js";
import type { User } from "@/entities/user.entity.js";

export class FindWithPersonUseCase {
    constructor(private userRepository: UserRepository) {}

    async handle(user_id: number): Promise<(Person & User) | undefined > {
        return this.userRepository.findWithPerson(user_id);
    
    }
}