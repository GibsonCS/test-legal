import { connectionRoutes } from "./connectionRoutes.js";
export const registerRoutes = (server) => {
    const apiPrefix = "/api";
    server.register(connectionRoutes, { prefix: apiPrefix });
};
