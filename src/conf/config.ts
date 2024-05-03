export const config = {
  dbURL: String(process.env.NEXT_PUBLIC_DB_URI),
  projectId: String(process.env.NEXT_PUBLIC_PROJECT_ID),
  databaseId: String(process.env.NEXT_PUBLIC_DATABASE_ID),
  collectionId: String(process.env.NEXT_PUBLIC_COLLECTION_ID),
  apiURL: process.env.NEXT_PUBLIC_API_URL,
};
