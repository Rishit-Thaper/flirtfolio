import { ID } from "appwrite";
import { lineDB, account } from "@/utils/appwrite";
import { LineType } from "@/types/types";
const DATABASE_ID = process.env.DATABASE_ID;
const COLLECTION_ID = process.env.COLLECTION_ID;

export const createLine = async (data: LineType) => {
  try {
    await lineDB.createDocument(
      DATABASE_ID!,
      COLLECTION_ID!,
      ID.unique(),
      data
    );
  } catch (error) {
    console.error(error);
  }
};

export const getLine = async () => {
  try {
    const response = await lineDB.listDocuments(DATABASE_ID!, COLLECTION_ID!);
    const lines = response.documents;
    return lines;
  } catch (error) {
    console.error(error);
  }
};
