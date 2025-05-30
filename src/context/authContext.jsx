import { createContext, useState} from "react";
import { useEffect } from "react";
import Profile from "../pages/profile/Profile";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    // const [currentUser, setcurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    
    // for testing, give a default currentUser
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {
      id: 1,
      name: "zhuanyi Zhu",
      profilePic: "https://images.pexels.com/photos/963060/pexels-photo-963060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
  );

 

    const login =() => {
        // to do
        setcurrentUser({
            id:1, 
            name:"zhuanyi Zhu",
             profilePic:"https://images.pexels.com/photos/963060/pexels-photo-963060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            })
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);
    
    return (
        <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>
    )

    };