import axios from "axios";
import { User } from "./types/user";

const baseUrl = "https://reqres.in/";

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(baseUrl + "api/users?page=1");
    return response.data.data; // API returns the users in `data.data`
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const deleteUser = async (id: number): Promise<void> => {
  try {
    await axios.delete(baseUrl + `api/users/${id}`);
    console.log(`User with ID ${id} deleted.`);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
