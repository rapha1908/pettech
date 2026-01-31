import { CreatePersonUseCase } from "../create-person.js"
import { UserRepository } from "@/repositories/user-repository"

export function makeCreateUserUseCase() {
    const userRepository = new UserRepository()
    return new CreatePersonUseCase(userRepository)
}