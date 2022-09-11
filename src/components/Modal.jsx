import { doc, setDoc } from "firebase/firestore"
import { useAuth } from "../contexts/AuthContext"
import { db } from "../firebaseConfig"
import texts from "../Texts"

export const Modal = ({ setShowModal, checkedItems }) => {

    const { currentUser } = useAuth()
   async function handleSubmit() {

        const userRef = doc(db,"users", currentUser.uid)
        let booksPicked = []
        checkedItems.forEach(book => {
          
            if(book.isPickup) {
                const newBook = {
                    name : book.name,
                    uid: book.uid
                }
                // console.log(newBook)
                booksPicked.push(newBook)
            }
        })
       await setDoc(userRef, {...currentUser, books: booksPicked}).then(() => {

       })

       window.location.reload()
    }

    return (
        <div className="modal z-10 w-full h-ful backdrop-blur-md">
            <div className="bg-white w-[80%] lg:w-1/3 lg:min-h-[50%] rounded border-primary border shadow flex flex-col justify-between">
                <div className="bg-primary p-5">
                    <h1 className="text-center text-xl md:text-2xl text-white ">{texts.zomi.MODAL_QUESTION}</h1>
                </div>
                <ol className=" list-disc p-5 ml-5 md:ml-20 capitalize text-xl text-primary">
                    {
                        checkedItems.map((item, i) => item.isPickup && <li key={i}>{item.name}</li>)
                    }
                </ol>

                <h1 className='w-full text-center text-yellow-600 font-bold'><span className='text-red-700 text-xl'>&#9888;</span>{texts.zomi.MODAL_ALERT}</h1>
                <div className="p-5 flex justify-evenly space-x-5">
                    <button onClick={handleSubmit} className="primary-btn w-full">Yes</button>
                    <button onClick={setShowModal} className="cancel-btn font-bold w-full">NO</button>
                </div>

            </div>

        </div>
    )

    // update books and create a new collection with user's selected books
} 