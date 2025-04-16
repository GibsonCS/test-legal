import { FastifyReply, FastifyRequest } from "fastify";
import { InputData, inputSchema } from "../schemas/inputSchema.js";
import { ConnectionService } from "../services/connectionService.js";
import { ConnectionRepository } from "../repositories/connectionRepository.js";

const connectionService = new ConnectionService(
  new ConnectionRepository(`${process.cwd()}/database/users.json`)
);
export class ConnectionController {
  handleFindConnection = async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const data: InputData = inputSchema.parse(req.body);
      const response = await connectionService.getConnections(data);
      if (response) {
        return reply.send(response);
      }
      reply.send({ message: "Nenhuma conexão encontrada encontrada!" });
    } catch (error: any) {
      console.error(error);
      throw new Error(error);
    }
  };
}
