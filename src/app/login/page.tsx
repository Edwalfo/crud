/**
 * Página de inicio de sesión.
 */
"use client";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "../component/form/LoginForm";
import Spinner from "../component/Spinner";
import useAuth from "../hooks/useAuth";

/**
 * Interfaz para representar los datos de inicio de sesión.
 */
interface Login {
    email: string;
    password: string;
}

/**
 * Componente de la página de inicio de sesión.
 */
export default function LoginPage() {
    const [newLogin, setNewLogin] = useState<Login>({ email: "", password: "" });
    const [message, setMessage] = useState<string>("");
    const { authenticate, loading } = useAuth();
    const router = useRouter();

    /**
     * Maneja la autenticación del usuario.
     */
    const handleAuthentication = async () => {
        if (newLogin.email === "" || newLogin.password === "") {
            setMessage("Por favor ingrese sus credenciales");
            return;
        }

        const isAuthenticated = await authenticate(newLogin);

        if (isAuthenticated) {
            router.push("/registros");
        } else {
            setMessage("Credenciales incorrectas");
        }
    };

    /**
     * Maneja el cambio en los campos de entrada.
     * @param e El evento de cambio.
     */
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewLogin((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <main>
            <div className="container mx-auto flex justify-center items-center h-screen">
                {loading && <Spinner />}
                <LoginForm
                    onLogin={handleAuthentication}
                    onChange={handleInputChange}
                    newLogin={newLogin}
                    message={message}
                />
            </div>
        </main>
    );
}