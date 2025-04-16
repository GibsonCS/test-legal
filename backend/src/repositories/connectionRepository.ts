import { readFile, writeFile } from "node:fs/promises";
import { InputData } from "../schemas/inputSchema";
import { BaseRepositoryInterface } from "./baseRepository.js";

export class ConnectionRepository implements BaseRepositoryInterface {
  private pathDatabase: string;
  constructor(pathDatabase: string) {
    this.pathDatabase = pathDatabase;
  }
  async findById(id: string): Promise<any> {
    const usersFromDB = JSON.parse(await this.findAll());
    const user = usersFromDB.filter((user: any) => user.id === id);
    return user;
  }

  async saveUser(user: InputData): Promise<boolean> {
    const usersFromDB = JSON.parse(await this.findAll());
    usersFromDB.push(user);
    await writeFile(this.pathDatabase, JSON.stringify(usersFromDB));
    return true;
  }

  async findAll(): Promise<any> {
    const results: any = await readFile(this.pathDatabase, "utf-8");
    return results;
  }
}
