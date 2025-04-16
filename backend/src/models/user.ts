import { BaseModel } from "./baseModel.js";

export class User extends BaseModel {
  idAreaOfInteresse: string;
  idLocalization: string;
  constructor(
    id: string,
    name: string,
    idAreaInteresse: string,
    idLocalization: string
  ) {
    super(id, name);
    this.idAreaOfInteresse = idAreaInteresse;
    this.idLocalization = idLocalization;
  }
}
