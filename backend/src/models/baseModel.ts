export class BaseModel {
  name: string;
  id: string;
  constructor(id: string, name: string) {
    this.name = name;
    this.id = id;
  }
}
