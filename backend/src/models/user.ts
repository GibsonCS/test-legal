import { BaseModel } from "./baseModel.js";

export class User extends BaseModel {
  constructor(name: string) {
    super(name);
  }
}
