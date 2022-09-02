import { doc, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { db } from "../firebaseConfig"

export const Modal = ({ setShowModal, checkedItems }) => {

    // const pickedItems = useState(checkedItems.filter(checkedItem => checkedItem.isPickup))
    const { currentUser } = useAuth()
    console.log(checkedItems)
   async function handleSubmit() {

        // const updateBooks = checkedItems.map(book => {
        //     if(book.isPickup){
        //         return {...book, isChosen: true ,user: currentUser.uid}
        //     }
        //     return book
        // } )

        // const bookDocRef = doc(db,"books")

        checkedItems.forEach(book => {
            const docRef = doc(db,"books", book.key)
             updateDoc(docRef, {
                isChosen: true
            })
        })
        // await updateDoc(bookDocRef, checkedItems)
       window.location.reload()
        
    }

    return (
        <div className="modal z-10 w-full h-ful backdrop-blur-md">
            <div className="bg-white w-[80%] lg:w-1/3 lg:min-h-[50%] rounded border-primary border shadow flex flex-col justify-between">
                <div className="bg-primary p-5">
                    <h1 className="text-center text-xl md:text-2xl text-white ">Hih a nuai aa te tel takpi ding maw?</h1>
                </div>
                <ol className=" list-disc p-5 ml-5 md:ml-20 capitalize text-xl text-primary">
                    {
                        checkedItems.map((item, i) => item.isPickup && <li key={i}>{item.name}</li>)
                    }
                </ol>

                <h1 className='w-full text-center text-yellow-600 font-bold'><span className='text-red-700 text-xl'>&#9888;</span>You can't not change after submitted!</h1>
                <div className="p-5 flex justify-evenly space-x-5">
                    <button onClick={handleSubmit} className="primary-btn w-full">Yes</button>
                    <button onClick={setShowModal} className="cancel-btn font-bold w-full">NO</button>
                </div>

            </div>

        </div>
    )

    // update books and create a new collection with user's selected books
} 