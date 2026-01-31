import type { Person } from "../entities/person.entity.js";
import type { PersonRepository } from "../repositories/person.repository.js";

export class CreatePersonUseCase {
    constructor(private personRepository: PersonRepository) {}

    handle(person:Person){
        return this.personRepository.createPerson(person);
    }

}
