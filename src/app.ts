import fastify from "fastify";
import { personRoutes } from "./http/controllers/Person/routes.js";

export const app = fastify();

app.register(personRoutes)