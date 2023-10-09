// import { ReactNode, createContext, useState, useEffect } from "react";
// import { auth } from "../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";

// type AuthContextProps = {
//   register: (email:string, password:string) => void;
// };

// export const AuthContext = createContext({} as AuthContextProps);

// type AuthProviderProps = {
//   children: ReactNode;
// };
// export const AuthProvider = ({ children }: AuthProviderProps) => {
//   const [currentUser, setCurrentUser] = useState();

//   const register = (email: string, password: string) => {
//     auth.crea
//   };

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//     });
//     return unsubscribe;
//   }, []);

//   auth.onAuthStateChanged((user) => {
//     setCurrentUser(user);
//   });

//   return (
//     <AuthContext.Provider value={{ currentUser, register }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
