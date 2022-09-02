import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";


const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function logout() {
        return signOut(auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            const fetch = async () => {
                if (user) {
                    const docSanp = await getDoc(doc(db, "users", user.uid))
                    if (docSanp.exists()) {
                        setCurrentUser({...docSanp.data(), uid: user.uid})
                    } 
                }
            }

            fetch()
            setLoading(false)
        })
        return unsubscribe

    }, [])

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