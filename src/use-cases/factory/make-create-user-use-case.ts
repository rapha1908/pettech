import { CreatePersonUseCase } from "../create-person.js";
import { UserRepository } from "../../repositories/user.repository.js";

export function makeCreateUserUseCase() {
    const userRepository = new UserRepository()
    return new CreatePersonUseCase(userRepository)
}