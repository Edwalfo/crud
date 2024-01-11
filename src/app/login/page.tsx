// LoginPage.tsx
"use client";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "../component/form/LoginForm";
import Spinner from "../component/Spinner";
import useAuth from "../hooks/useAuth";
import { useAuthContext } from "../contexts/AuthContext";


interface Login {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [newLogin, setNewLogin] = useState<Login>({ email: "", password: "" });
  const [message, setMessage] = useState<string>("");
  const { authenticate, loading } = useAuth();
  const router = useRouter();
  const { setIsAuthenticated} = useAuthContext();
  


  const validateCredentials = () => {
    if (newLogin.email === "" || newLogin.password === "") {
      setMessage("Por favor ingrese sus credenciales");
      return false;
    }
    return true;
  };

  const handleAuthentication = async () => {
    if (!validateCredentials()) return;

    const isAuthenticated = await authenticate(newLogin);

    if (isAuthenticated) {
      setIsAuthenticated(true);
      console.log("isAuthenticated", isAuthenticated);
      
      router.push("/registros");
    } else {
      setMessage("Credenciales incorrectas");
    }
  };

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
