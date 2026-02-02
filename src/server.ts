import { env } from "./env/index.js";
import { app } from "./app.js";
import { db } from "./lib/pg/db.js";

const port = env.PORT || 3333;

const start = async () => {
    try {
        await app.listen({
            host: "0.0.0.0",
            port,
        });
        console.log(`HTTP server running on http://localhost:${port}`);
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};

const shutdown = async (signal: string) => {
    try {
        console.log(`Shutting down (${signal})...`);
        await app.close();
        await db.close();
        process.exit(0);
    } catch (error) {
        console.error("Error during shutdown:", error);
        process.exit(1);
    }
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

start();

export default app;