import { Client, Account, Databases } from "appwrite";
import { config } from "@/conf/config";
const { dbURL, projectId } = config;
export const client = new Client();
export const lineDB = new Databases(client);
export const account = new Account(client);
client.setEndpoint(dbURL).setProject(projectId);

export const createAnonymousSession = async () => {
  try {
    await account.createAnonymousSession();
  } catch (error) {
    console.error(error);
  }
};
export { ID } from "appwrite";
