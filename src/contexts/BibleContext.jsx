import { createContext, useContext, useState } from "react";
import { books } from '../bibleData'

const BibleContext = createContext()

export function useBibleContext() {
    return useContext(BibleContext)
}

export function BibleProvider({ children }) {
    const [bibleBooks, setBibleBooks] = useState(books)



    function handleSetBibleBooks(books){
        setBibleBooks(books)
    }

    const value = {
        bibleBooks,
        handleSetBibleBooks
    }
    return (
        <BibleContext.Provider value={value}>
            {children}
        </BibleContext.Provider>
    )
}