import { BaseModel } from "./baseModel.js";
export class User extends BaseModel {
    idAreaOfInteresse;
    idLocalization;
    constructor(id, name, idAreaInteresse, idLocalization) {
        super(id, name);
        this.idAreaOfInteresse = idAreaInteresse;
        this.idLocalization = idLocalization;
    }
}
