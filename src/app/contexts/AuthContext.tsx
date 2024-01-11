// AuthContext.tsx
"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider 
    value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
 
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext debe ser usado dentro de un AuthProvider"
    );
  }
  return context;
}
