import fastify from "fastify";

const app = fastify();

app.get("/", async () => {
    return { message: "Hello, World!" };
});

export { app };
