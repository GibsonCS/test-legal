import { User } from "../models/user.js";
import { AreaInteresseRepository } from "../repositories/areaInteresseRepository.js";
import { BaseRepositoryInterface } from "../repositories/baseRepository.js";
import { InputData } from "../schemas/inputSchema.js";
import { faker, th } from "@faker-js/faker";

const areaInteresseRepository = new AreaInteresseRepository();
export class ConnectionService {
  dataBase: BaseRepositoryInterface;
  constructor(dataBase: BaseRepositoryInterface) {
    this.dataBase = dataBase;
  }

  getConnections = async (inputData: InputData) => {
    const user = new User(
      faker.string.uuid(),
      inputData.name,
      inputData.idAreaOfInteresse,
      inputData.idLocalization
    );
    await this.dataBase.saveUser(user);
    const allUsers = JSON.parse(await this.dataBase.findAll());
    const usersWithoutCurrentUser = allUsers.filter(
      (u: User) => u.id !== user.id
    );

    const usersWithConnections = await Promise.all(
      usersWithoutCurrentUser.map(async (u: User) => {
        let affinityLevel = 0;
        let areaInteresse: any;
        if (
          u.idAreaOfInteresse === user.idAreaOfInteresse &&
          u.idLocalization === u.idLocalization
        ) {
          affinityLevel += 100;

          [areaInteresse] = await areaInteresseRepository.findById(
            u.idAreaOfInteresse
          );

          return {
            name: u.name,
            description: areaInteresse.name,
            affinityLevel,
          };
        } else if (
          u.idAreaOfInteresse === user.idAreaOfInteresse &&
          u.idLocalization !== u.idLocalization
        ) {
          affinityLevel += 60;
          [areaInteresse] = await areaInteresseRepository.findById(
            u.idAreaOfInteresse
          );
          return {
            name: u.name,
            description: areaInteresse.name,
            affinityLevel,
          };
        } else {
          affinityLevel += 40;
          [areaInteresse] = await areaInteresseRepository.findById(
            u.idAreaOfInteresse
          );
          return {
            name: u.name,
            description: areaInteresse.name,
            affinityLevel,
          };
        }
      })
    );

    const threeUsersMoreConnections = usersWithConnections
      .sort((a: any, b: any) => a.affinityLevel + b.affinityLevel)
      .slice(usersWithConnections.length - 3);
    return threeUsersMoreConnections;
  };
}
