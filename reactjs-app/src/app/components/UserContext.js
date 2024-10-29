"use client"
import React, { useState } from 'react'
import { createContext } from 'react'

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState({name: "Hachim", age: 21});

    const updateUser = (newUserName, newUserAge) => {
        setUser({name: newUserName, age:newUserAge});
    }

    return <UserContext.Provider value={{ user, updateUser }}>
        {children}
    </UserContext.Provider>

}

export { UserContext, UserProvider }
