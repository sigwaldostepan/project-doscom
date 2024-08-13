import { axiosInstance } from "../lib/axiosInstance";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (inputs) => {
    const { data } = await axiosInstance.post("/auth/login", inputs);
    console.log(data);

    setCurrentUser(data.payload.user);
  };

  const logout = async () => {
    setCurrentUser("");
    await axiosInstance.post("/auth/logout");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
