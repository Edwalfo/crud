import User from "../models/userModel";

const API_URL = "http://localhost:4000/user";

/**
 * Class representing a User API.
 */
class UserAPI {
  static fetchAPI = async (url: string, options?: RequestInit) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  static getUsers = (): Promise<User[]> => {
    return this.fetchAPI(API_URL);
  };

  static getUser = (id: number): Promise<User> => {
    return this.fetchAPI(`${API_URL}/${id}`);
  };

  static createUser = (user: User): Promise<User> => {
    return this.fetchAPI(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  static updateUser = (id: number, user: User): Promise<User> => {
    return this.fetchAPI(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  static deleteUser = (id: number): Promise<void> => {
    return this.fetchAPI(`${API_URL}/${id}`, {
      method: "DELETE",
    });
  };
}

export default UserAPI;