import { ConnectionController } from "../controllers/connectionController.js";
const connectionController = new ConnectionController();
export const connectionRoutes = async (server) => {
    server.post("/find-connection", connectionController.handleFindConnection);
};
