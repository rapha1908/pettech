import { app } from "./app";
import { env } from "./env";

app.listen({
    host: "0.0.0.0",
    port: env.PORT || 3333,
}).then(() => {
    console.log(`HTTP server running on http://localhost:${env.PORT || 3333}`);
});

export default app;