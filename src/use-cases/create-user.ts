import { User } from '../entities'
import { UserRepository } from "../repositories/user-repository";
import "tsconfig-paths/register";
import "ts-node/register";

export class createUserUseCase {
    
    constructor(private userRepository: UserRepository) {}

    async handle(user:User): Promise<User | undefined> {
        return this.userRepository.createUser(user);
    }

}

// node -r tsconfig-paths/register -r ts-node/register src/use-cases/create-user.ts