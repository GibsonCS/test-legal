import { fastify, FastifyInstance } from "fastify";
import { registerRoutes } from "./routes/index.js";

const server: FastifyInstance = fastify();
registerRoutes(server);

const startServer = async (): Promise<void> => {
  await server.listen({ port: 3000 });
  console.log("Server is running at 3000");
};
await startServer();
