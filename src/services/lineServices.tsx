import { ID } from "appwrite";
import { lineDB } from "@/appwrite/appwrite";
import { LineType } from "@/types/types";
import { config } from "@/conf/config";

const { databaseId, collectionId } = config;
export const createLine = async (data: LineType) => {
  try {
    await lineDB.createDocument(databaseId, collectionId, ID.unique(), data);
  } catch (error) {
    console.error(error);
  }
};

export const getLine = async () => {
  try {
    const response = await lineDB.listDocuments(databaseId, collectionId);
    if (response && response.documents && response.documents.length > 0) {
      return response.documents;
    } else {
      console.log("No lines found in Appwrite collection");
      return [];
    }
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
