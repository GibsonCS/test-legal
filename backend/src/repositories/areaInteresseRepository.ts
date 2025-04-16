import { InputData } from "../schemas/inputSchema.js";
import { BaseRepositoryInterface } from "./baseRepository.js";
import { readFile, writeFile } from "node:fs/promises";

const BASE_PATH = `${process.cwd()}/database/areaInteresse.json`;
export class AreaInteresseRepository implements BaseRepositoryInterface {
  findAll(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  saveUser(user: InputData): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  async findById(id: string): Promise<any> {
    const areasInteresse = JSON.parse(await readFile(BASE_PATH, "utf8"));
    const areaInteresse = areasInteresse.filter((area: any) => area.id === id);
    return areaInteresse;
  }
}
