import { env } from "../../env/index.js";
import { Pool } from 'pg';
import type { PoolClient } from 'pg';


const config = {
    user: env.DB_USER,
    host: env.DB_HOST,
    database: env.DB_NAME,
    password: env.DB_PASSWORD,
    port: env.DB_PORT,
};

class database {
    private pool: Pool;
    private client: PoolClient | undefined;

    constructor() {
        this.pool = new Pool(config);
        this.connect();
    }

    private async connect() {
        try {
            this.client = await this.pool.connect();
        } catch (error) {
            console.error('Error connecting to the database:', error);
            throw error;
        }   
    }

    get clientInstance() {
        return this.client;
    }

    async close() {
        if (this.client) {
            this.client.release();
            this.client = undefined;
        }
        await this.pool.end();
    }

}

export const db = new database();