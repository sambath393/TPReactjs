import React from 'react';
import UserProvider, { useUser } from './userProvider';

export default function Provider(props) {
    return <UserProvider>
        {props.children}
    </UserProvider>;
}

// combine file in current folder
export {
    useUser
}