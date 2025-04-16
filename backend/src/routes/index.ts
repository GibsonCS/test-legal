import { FastifyInstance } from "fastify";
import { connectionRoutes } from "./connectionRoutes.js";

export const registerRoutes = (server: FastifyInstance) => {
  const apiPrefix = "/api";
  server.register(connectionRoutes, { prefix: apiPrefix });
};
