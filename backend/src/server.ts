import { fastify, FastifyInstance } from "fastify";
import { registerRoutes } from "./routes/index.js";
import fastifyCors from "@fastify/cors";

const server: FastifyInstance = fastify();
server.register(fastifyCors, {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
});

registerRoutes(server);

const startServer = async (): Promise<void> => {
  await server.listen({ port: 3000 });
  console.log("Server is running at 3000");
};
await startServer();
