import React from 'react';

const authContext = React.createContext({
    Authenticate : false,
    login: ()=>{}
});

export default authContext;