import fastify from "fastify";
import { personRoutes } from "./http/controllers/Person/routes.js";
import { userRoutes } from "./http/controllers/User/routes.js";

export const app = fastify();

app.register(personRoutes)
app.register(userRoutes)