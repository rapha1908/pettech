import { User } from "../entities/user.entity.js";
import type { UserRepository } from "../repositories/user.repository.js";

export class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async handle(user: User): Promise<User | undefined> {
        return this.userRepository.create(user);
    }
}