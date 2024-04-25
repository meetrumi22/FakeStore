import { ID } from "appwrite";
import { account } from "./auth";
export async function createAccount(userData) {
  const { email, name, password } = userData;
  try {
    const User = await account.create(ID.unique(), email, password, name);
    if (!User) throw User;
    return User;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getCurrentAccount() {
  try {
    const userData = await account.get();
    if (!userData) throw error;
    return userData;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
