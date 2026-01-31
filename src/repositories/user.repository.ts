import { db } from "../lib/pg/db.js";
import type { User } from "../entities/user.entity.js";

export class UserRepository {
    async create({username, password}: User): Promise<User> {
        const result = await db.clientInstance?.query(
            'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username, password',
            [username, password]
        );
        return result.rows[0];
    }

    async findById(id: number): Promise<User | null> {
        const result = await db.clientInstance?.query(
            'SELECT id, username, password FROM users WHERE id = $1',
            [id]
        );
        return result?.rows[0] || null;
    }

}