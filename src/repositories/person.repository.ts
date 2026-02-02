import { db } from "../lib/pg/db.js";
import { Person } from "../entities/person.entity.js";

export class PersonRepository {

    async createPerson({cpf, name, birth, email, user_id}: Person): Promise<Person | null> {
        const client = db.clientInstance;
        if (!client) {
            throw new Error("Database client is not connected.");
        }
        const result = await client.query(
            'INSERT INTO person (cpf, name, birth, email, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING id, cpf, name, birth, email, user_id',
            [cpf,name, birth, email, user_id]
        );
        return result.rows[0] ?? null;
    }
    async findByUserId(user_id: number): Promise<Person | null> {
        const client = db.clientInstance;
        if (!client) {
            throw new Error("Database client is not connected.");
        }
        const result = await client.query(
            'SELECT id, cpf, name, birth, email, user_id FROM person WHERE user_id = $1',
            [user_id]
        );
        return result.rows[0] ?? null;
    }

}