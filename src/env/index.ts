import "dotenv/config";

import { z } from "zod";

const envSchema = z.object({
    PORT: z.coerce.number().default(3000),
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_HOST: z.string(),
    DB_NAME: z.string(),
    DB_PORT: z.coerce.number().default(5432),
});
const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
    console.error("❌ Invalid environment variables:", _env.error.format());
    throw new Error("Invalid environment variables.");
}  
export const env = _env.data;
