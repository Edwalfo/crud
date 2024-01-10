"use client";
import LoginForm from "../component/form/LoginForm";
import userAPI from "../api/userAPI";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "../component/spinner";

export default function LoginPage() {
  interface Login {
    email: string;
    password: string;
  }

  const [newLogin, setNewLogin] = useState<Login>({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState<string>("");
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleAuthentication = async () => {
    if (newLogin.email === "" || newLogin.password === "") {
      setMessage("Por favor ingrese sus credenciales");
      return;
    }
    setLoading(true);
    const users = await userAPI.getUsers();

    if (users) {
      const auth = users.find((user) => {
        return (
          user.correo === newLogin.email && user.password === newLogin.password
        );
      });

      if (auth) {
        console.log("Usuario autenticado");
        router.push("/registros");
      } else {
        console.log("Usuario no autenticado");
        setMessage("Credenciales incorrectas");
      }
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewLogin((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main>
      <div className="container mx-auto flex justify-center items-center h-screen">
        {loading && <Spinner />} {/* Muestra el spinner si loading es true */}
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
