import Conf from "../../conf/Conf";
import { Client, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint(Conf.appwriteUrl) // Your API Endpoint
  .setProject(Conf.appwriteProjectID); // Your project ID;

export const account = new Account(client);
