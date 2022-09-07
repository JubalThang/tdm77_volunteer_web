import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";


const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [booktaken, setBookTaken] = useState()
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
                    // const docSanp = await getDoc(doc(db, "users", user.uid))
                    // if (docSanp.exists()) {
                    //     if (docSanp.data().books){
                    //         console.log(docSanp.data().books)
                    //         // setBookTaken([...booktaken, docSanp.data().books])
                    //     }
                    //     setCurrentUser({...docSanp.data(), uid: user.uid})
                    // } 
                    const querySnapshop = await getDocs(collection(db,"users"))
                    querySnapshop.forEach(doc => {
                        // console.log(doc.data())
                        if(doc.id === user.uid){
                            setCurrentUser({...doc.data(), uid: user.uid})
                        }
                        // setUsers({...doc.data(), users})
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