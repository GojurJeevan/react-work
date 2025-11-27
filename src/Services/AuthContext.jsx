import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [isUserAvailable, setIsUserAvailable] = useState(false);

  return (
    <AuthContext.Provider value={{ isUserAvailable, setIsUserAvailable }}>
      {children}
    </AuthContext.Provider>
  );
}
