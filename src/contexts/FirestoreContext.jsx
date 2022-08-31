import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from '../firebaseConfig'

const FiresotreContext = createContext()

export function useFirestore() {
    return useContext(FiresotreContext)
}

export function FirestoreProvider({ children }) {
    const [books, setBooks] = useState()
    const [loading, setLoading] = useState(true)

    const fetchBooks = async () => {
        let getBooks = []
        const querySnapshot = await getDocs(collection(db, "books"))
        querySnapshot.forEach(doc => {
            getBooks.push({ ...doc.data(), key: doc.id, isPickup: false })
        })
        setBooks(getBooks)
        setLoading(false)
    }

    useEffect(() => {
        if (books) {
            return
        } else {
            fetchBooks()
        }
    }, [books])

    const value = {
        books,
    }

    return (
        <FiresotreContext.Provider value={value}>
            {!loading && children}
        </FiresotreContext.Provider>
    )
}