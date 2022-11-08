import { useContext } from "react";
import { createContext } from "react";

//! 1-) Creating Login Context
export const AuthContext = createContext();

//! 2-) Providing
const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
