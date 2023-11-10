import { useRouter } from 'next/router';
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};
export const UserProvider = ({ children }) => {
const router = useRouter();

  const [user, setUser] = useState({username:"",password:""});

  const login = (username, password) => {
    if (username === "xyz3d@pixwar.com" && password === "xyz569155pix.") {
      setUser({ username });
      router.push("/dashboard");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};