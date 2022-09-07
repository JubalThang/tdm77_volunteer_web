import { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useBibleContext } from "../contexts/BibleContext"
import { Checkbox } from "./Checkbox"
import { Modal } from "./Modal"

export const VolSignUpPage = () => {
    
    const { users } = useAuth()
    // const [localData, setLocalData] = useState(books.map(examp => ({...examp, isPickup: false})))
    // const [localData, setLocalData] = useState(books.map(examp => ({...examp, isPickup: false})))
    const { bibleBooks } = useBibleContext()
    const [localData, setLocalData] = useState(bibleBooks)
    const [isDisabled, setIsDisabled] = useState(true)
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
       users.map(user => user.books && console.log(user.books))
    },[])

    useEffect(() => {
        showModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
    }, [showModal])

    useEffect(() => {
        const find = localData.find(data => data.isPickup === true)
        if (find) {
            setIsDisabled(false)
            // setBookIndexs(localData.filter(data => data.isPickup === true))
        } else {
            setIsDisabled(true)
        }
    },[localData])

    const handleShowModal = () => {
        setShowModal()
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        setShowModal(true)
    }

    function handleOnChange(book) {
        setLocalData(localData.map(bible => {
            if (bible.key === book.key) {
                return { ...bible, isPickup: !bible.isPickup }
            }
            return bible
        }))
    }

    return (
        <div className="flex flex-col">
           
                <h1 className="font-bold md:font-medium md:text-2xl text-center text-primary py-5 ">Please choose book(s) you would like to contribute.</h1>
                <p className="text-red-500 text-center text-[14px] md:text-base ">If the book is <span className=" line-through text-gray-400">grayed out</span>, someone had picked up!</p>
            
            <form onSubmit={(e) => handleOnSubmit(e)} className=" md:w-[80%] mx-auto" >
                <div className="grid px-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 mt-5">
                    {
                        localData.map((example, i) => (
                            <Checkbox key={i} book={example} bookid={i} onChange={() => handleOnChange(example)} />
                        ))
                    }
                </div>

                <div className='inline-flex justify-center w-full py-10'>
                    <input type="submit" className={`${isDisabled ? 'primary-btn-disabled' : 'primary-btn'} `} value='Submit' disabled={isDisabled} />
                </div>
            </form>
            {
                showModal && <Modal setShowModal={handleShowModal} checkedItems={localData} />
            }
        </div>
    )
}


/// older version of handleClick
// const handleOnChange = (e) => {

//     localData[e.target.dataset.action].isPickup = e.target.checked
//     setLocalData(localData.map((example, i) => {
//         if (i === e.target.id) {
//             example.isPickup = !example.isPickup
//             console.log('example',example)
//         }
//         return example
//     }))

//     const find = localData.find(data => data.isPickup === true)
//     if (find) {
//         setIsDisabled(false)
//         setBookIndexs(localData.filter(data => data.isPickup === true))
//     } else {
//         setIsDisabled(true)
//     }
// }
