import { createContext, useEffect, useState } from "react";
import { getCurrentAccount } from "../lib/appwrite/api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthUser = async () => {
    const user = await getCurrentAccount();
    if (user) console.log("User in context = ", user);
  };

  useEffect(() => {
    if (
      localStorage.getItem("cookieFallback") === "[]" ||
      localStorage.getItem === null
    )
      navigate("/sign-in");
    checkAuthUser();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsLoading, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
