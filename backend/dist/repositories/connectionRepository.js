import { readFile, writeFile } from "node:fs/promises";
export class ConnectionRepository {
    pathDatabase;
    constructor(pathDatabase) {
        this.pathDatabase = pathDatabase;
    }
    async saveUser(user) {
        const usersFromDB = JSON.parse(await this.findAll());
        usersFromDB.push(user);
        await writeFile(this.pathDatabase, JSON.stringify(usersFromDB));
        return true;
    }
    async findAll() {
        const results = await readFile(this.pathDatabase, "utf-8");
        return results;
    }
}
