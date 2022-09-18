import { onAuthStateChanged } from "firebase/auth";
import { useState,useEffect } from "react";
import { createContext } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    //real time application return function
    const unsub=onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return ()=>{
        unsub()
  }
  }, []);
  return (
  <AuthContext.Provider value={{ currentUser }}>
    {children}
  </AuthContext.Provider>
  )
 
};
