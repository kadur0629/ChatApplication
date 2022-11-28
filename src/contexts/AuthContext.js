import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../components/firebase';

// Here we are setting the loader and user states
// and grabbing the user from firebase authentication
// setting it to state and using react-router-dom
// to push (display to user) the chat page 

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

// setting user state 
export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const history = useHistory();

    useEffect(() => {
        // grabbing user from firebase
        auth.onAuthStateChanged((user) => {
            // setting user to state 
            setUser(user);
            setLoading(false);
            // display chat page to user
            if(user) history.push('/chats');
        })
    }, [user, history]);

    const value = { user };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}


