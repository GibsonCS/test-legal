import { User } from "../models/user.js";
import { faker } from "@faker-js/faker";
export class ConnectionService {
    dataBase;
    constructor(dataBase) {
        this.dataBase = dataBase;
    }
    getConnections = async (inputData) => {
        const user = new User(faker.string.uuid(), inputData.name, inputData.idAreaOfInteresse, inputData.idLocalization);
        await this.dataBase.saveUser(user);
        const allUsers = JSON.parse(await this.dataBase.findAll());
        const usersWithoutCurrentUser = allUsers.filter((u) => u.id !== user.id);
        const usersWithConnections = usersWithoutCurrentUser.map((u) => {
            let affinityLevel = 0;
            if (u.idAreaOfInteresse === user.idAreaOfInteresse &&
                u.idLocalization === u.idLocalization) {
                affinityLevel += 100;
                return {
                    name: u.name,
                    affinityLevel,
                };
            }
            else if (u.idAreaOfInteresse === user.idAreaOfInteresse) {
                affinityLevel += 60;
                return {
                    name: user.name,
                    affinityLevel,
                };
            }
            else {
                affinityLevel += 40;
                return {
                    name: user.name,
                    affinityLevel,
                };
            }
        });
        console.log(usersWithConnections
            .sort((a, b) => a.affinityLevel + b.affinityLevel)
            .slice(usersWithConnections.length - 3));
    };
}
