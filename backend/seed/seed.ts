import { faker } from "@faker-js/faker";
import { User } from "../src/models/user.js";
import { writeFile } from "fs/promises";

const pathDatabase = `${process.cwd()}/database/users.json`;

const seed = async () => {
  const MAX_USERS = 6;
  const users = [];
  for (let i = 0; i <= MAX_USERS; i++) {
    const user = new User(
      faker.string.uuid(),
      faker.person.firstName(),
      Math.floor(Math.random() * MAX_USERS).toString(),
      Math.floor(Math.random() * MAX_USERS).toString()
    );
    users.push(user);
  }
  await writeFile(pathDatabase, JSON.stringify(users));
};

await seed();
