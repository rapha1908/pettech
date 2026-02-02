import { db } from "../lib/pg/db.js";
import type { User } from "../entities/user.entity.js";
import type { Person } from "@/entities/person.entity.js";

export class UserRepository {
    async create({username, password}: User): Promise<User | undefined> {
        const client = db.clientInstance;
        if (!client) {
            throw new Error("Database client is not connected.");
        }
        const result = await client.query(
            'INSERT INTO "user" (username, password) VALUES ($1, $2) RETURNING id, username, password',
            [username, password]
        );
        return result.rows[0] ?? undefined;
    }

    async findWithPerson(userId: number): Promise<(User & Person) | undefined> {
        const client = db.clientInstance;
        if (!client) {
            throw new Error("Database client is not connected.");
        }
        const result = await client.query(
            'SELECT * FROM "user" LEFT JOIN person ON "user".id = person.user_id WHERE "user".id = $1',
            [userId]
        );
        return result.rows[0] ?? null;
    }

}