import { Client, Account, Databases } from "appwrite";

const DB_URI = process.env.DB_URI;
const PROJECT_ID = process.env.PROJECT_ID;

export const client = new Client();
export const lineDB = new Databases(client);
export const account = new Account(client);
client.setEndpoint(DB_URI!).setProject(PROJECT_ID!);

export const createAnonymousSession = async () => {
  try {
    await account.createAnonymousSession();
  } catch (error) {
    console.error(error);
  }
};
export { ID } from "appwrite";
