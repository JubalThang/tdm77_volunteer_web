import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection,getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";


const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    function logout() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            const fetch = async () => {
                let temp = []
                if (user) {
                    const querySnapshop = await getDocs(collection(db,"users"))
                    querySnapshop.forEach(doc => {
                        if(doc.id === user.uid){
                            setCurrentUser({...doc.data(), uid: user.uid})
                        }
                       temp.push(doc.data())
                    })
                }
                setUsers(temp)
            }
            fetch()
            setLoading(false)
        })
        return unsubscribe

    }, [])

    const value = {
        currentUser,
        logout,
        users
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}