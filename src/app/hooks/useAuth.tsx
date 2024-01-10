/**
 * Custom hook for authentication.
 * 
 * @returns An object containing the authenticate function and a loading state.
 */
import { useState } from "react";
import userAPI from "../api/userAPI";

export default function useAuth() {
    const [loading, setLoading] = useState<boolean>(false);

    /**
     * Authenticates the user with the provided credentials.
     * 
     * @param credentials - The user's email and password.
     * @returns A boolean indicating whether the authentication was successful.
     */
    const authenticate = async (credentials: { email: string; password: string }) => {
        setLoading(true);
        try {
            const users = await userAPI.getUsers();
            const auth = users.find((user) => user.correo === credentials.email && user.password === credentials.password);
            setLoading(false);
            return !!auth;
        } catch (error) {
            console.error(error);
            setLoading(false);
            return false;
        }
    };

    return { authenticate, loading };
}