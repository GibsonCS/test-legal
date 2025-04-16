import { FastifyInstance } from "fastify";
import { ConnectionController } from "../controllers/connectionController.js";

const connectionController = new ConnectionController();
export const connectionRoutes = async (server: FastifyInstance) => {
  server.post("/find-connection", connectionController.handleFindConnection);
};
