import { fastify } from "fastify";
import { registerRoutes } from "./routes/index.js";
const server = fastify();
registerRoutes(server);
const startServer = async () => {
    await server.listen({ port: 3000 });
    console.log("Server is running at 3000");
};
await startServer();
