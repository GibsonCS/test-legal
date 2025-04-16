import { InputData } from "../schemas/inputSchema";

export interface BaseRepositoryInterface {
  findAll(): Promise<any>;
  saveUser(user: InputData): Promise<boolean>;
  findById(id: string): Promise<any>;
}
