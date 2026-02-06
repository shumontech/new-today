import React, { useState, createContext } from "react";
import app from "../firebase/Firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


// Create context
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  // State inside the component
  const [user, setUser] = useState(null);

  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)

  }

  // Value to pass to context
  const authData = {
    user,
    setUser,
    createUser
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
