// api/userAPI.ts
import User from "../models/userModel";

const API_URL = "http://localhost:4000/user";

class UserAPI {
  static getUsers = async (): Promise<User[]> => {
    const response = await fetch(API_URL);
    const users: User[] = await response.json();
    return users;
  };

  static getUser = async (id: number): Promise<User> => {
    const response = await fetch(`${API_URL}/${id}`);
    const user: User = await response.json();
    return user;
  };

  static createUser = async (user: User): Promise<User> => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const newUser = await response.json();
    return newUser;
  };

  static updateUser = async (id: number, user: User): Promise<User> => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const updatedUser = await response.json();
    return updatedUser;
  };

  static deleteUser = async (id: number): Promise<void> => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
  };

  
}

export default UserAPI;
