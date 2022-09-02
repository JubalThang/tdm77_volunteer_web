import { useEffect, useState } from "react"
import { useFirestore } from "../contexts/FirestoreContext"
import { Checkbox } from "./Checkbox"
import { Footer } from "./Footer"
import { Modal } from "./Modal"

export const VolSignUpPage = () => {

    const { books } = useFirestore()

    const [localData, setLocalData] = useState(books.map(examp => ({...examp, isPickup: false})))
    const [isDisabled, setIsDisabled] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [bookIndexs, setBookIndexs] = useState()

    useEffect(() => {
        showModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
    }, [showModal])

    const handleShowModal = () => {
        setShowModal()
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        setShowModal(true)
    }

    const handleOnChange = (e) => {

        localData[e.target.dataset.action].isPickup = e.target.checked
        setLocalData(localData.map((example, i) => {
            if (i === e.target.id) {
                example.isPickup = !example.isPickup
                // setIsDisabled([...isDisabled, example])ß
            }
            return example
        }))

        const find = localData.find(data => data.isPickup === true)
        if (find) {
            setIsDisabled(false)
            setBookIndexs(localData.filter(data => data.isPickup === true))
        } else {
            setIsDisabled(true)
        }
    }

    return (
        <div className="flex flex-col justify-between w-full ">
            <div className=" p-10 ">
                <h1 className="font-bold md:font-medium md:text-2xl text-center text-primary ">Please choose book(s) you would like to contribute.</h1>
                <p className="text-red-500 text-center p-5">If the book is <span className=" line-through text-gray-400">grayed out</span> someone had picked up!</p>
            </div>
            <form onSubmit={(e) => handleOnSubmit(e)} className=" md:w-[60%] mx-auto max-h-min mb-28 " >
                <div className="grid px-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 ">
                    {
                        localData.map((example, i) => (
                            <Checkbox key={i} book={example} bookid={i} onChange={handleOnChange} />
                        ))
                    }
                </div>

                <div className='inline-flex justify-center w-full pt-10'>
                    <input type="submit" className={`${isDisabled ? 'primary-btn-disabled' : 'primary-btn'} `} value='Submit' disabled={isDisabled} />
                </div>
            </form>
            {
                showModal && <Modal setShowModal={handleShowModal} checkedItems={bookIndexs} />
            }
            <Footer />
        </div>
    )
}
