import React, { createContext, useContext } from 'react';

const UserController = createContext()

export default function UserProvider(props) {
    const user = {
        name: "test"
    }
    
    return (
        <UserController.Provider
            value={user}
        >
            {props.children}
        </UserController.Provider>
    )
}

export const useUser = () => useContext(UserController);