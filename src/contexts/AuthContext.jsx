import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";


const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function logout() {
        signOut(auth)
    }

    useEffect(() => {
        if (currentUser) {
            return
        } else {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                setCurrentUser(user)
                setLoading(false)
            })
            return unsubscribe
        }
        
    }, [currentUser])

    const value = {
        currentUser,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}