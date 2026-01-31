import { Person } from "@/entities/person.entity.js";

export class PersonRepository {

    async createPerson(person: Person): Promise<Person> {
        // Logic to save person to the database
        return person;
    }
    async findById(id: number): Promise<Person | null> {
        // Logic to find a person by ID from the database
            return {
                id,
                cpf: "123.456.789-00",
                name: "John Doe",
                birth: new Date("1990-01-01"),
                email: "test@example.com",
                user_id: 1,
            };
        }
}