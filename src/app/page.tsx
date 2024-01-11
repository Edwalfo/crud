"use client";

import { useAuthContext } from "./contexts/AuthContext";

export default function Home() {
  const { isAuthenticated ,setIsAuthenticated} = useAuthContext();

  const handleAuthentication = () => {
    if (isAuthenticated) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
  }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      {isAuthenticated ? (
        <p>Autenticado</p>
      ) : (
        <p>No autenticado</p>
      )}
      <button type="button" className="bg-dark" onClick={handleAuthentication}>
        Cambiar
      </button>
    </main>
  );
}
