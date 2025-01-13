/* eslint-disable react/prop-types */


import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../url";


export const UserContext=createContext({})


export function UserContextProvider({children}){
    const [user,setUser]=useState(null)

    useEffect(()=>{
      getUser()

    },[])

      const getUser = async () => {
      try {
        const res = await axios.get(`${URL}/api/auth/refetch`, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        })
        setUser(res.data)
      }
      catch (err) {
        console.log('Authentication error:', err.message)
        setUser(null)  // Reset user state on error
      }
    }
    
    return (<UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>)
}
