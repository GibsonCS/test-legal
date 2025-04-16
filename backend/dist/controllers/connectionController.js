import { inputSchema } from "../schemas/inputSchema.js";
import { ConnectionService } from "../services/connectionService.js";
import { ConnectionRepository } from "../repositories/connectionRepository.js";
const connectionService = new ConnectionService(new ConnectionRepository(`${process.cwd()}/database/users.json`));
export class ConnectionController {
    handleFindConnection = async (req, reply) => {
        const data = inputSchema.parse(req.body);
        const response = await connectionService.getConnections(data);
        reply.send(response);
    };
}
