import { useEffect, useState } from "react"
import { useFirestore } from "../contexts/FirestoreContext"
import { Checkbox } from "./Checkbox"
import { Footer } from "./Footer"
import { Modal } from "./Modal"

export const VolSignUpPage = () => {
    

    const [localData, setLocalData] = useState([])
    const [isDisabled, setIsDisabled] = useState(true)
    const [showModal, setShowModal] = useState(false)

    const { books } = useFirestore()
    
    useEffect(() => {
        const newExample = books.map(examp => {
            return { ...examp, isPickup: false }
        })
        setLocalData(newExample)
    },[books])

    useEffect(() => {
        showModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
    },[showModal])

    const handleShowModal = () => {
        setShowModal()
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
       
        setShowModal(true)
    }

    const handleOnChange = (e) => {
        // const newExample = examples.filter((example, i) => i === box && {isChoosen: !example.isChoosen})
        //   console.log(box)
        // const newExample = examples.map(example => {

        //     if (example === box.example) {
        //         return {...example, isChoosen: !box.example.isChoosen}
        //     }
        //     return example
        // })
        //     setExample(newExample)
        
        localData[e.target.dataset.action].isPickup = e.target.checked

       
        
        setLocalData(localData.map((example,i) => {
            if (i === e.target.id) {
                example.isPickup = true
            }
            return example
        }))


        // console.log(localData)
    }

    

    return (
        <div className="flex flex-col justify-between w-full ">
            <div className=" p-10 ">
                <h1 className="font-bold md:font-medium md:text-2xl text-center text-primary ">Please choose book(s) you would like to contribute.</h1>
                <p className="text-red-500 text-center p-5">Book is <span className=" line-through text-gray-400">grayed out</span>  if someone had picked up!</p>
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
                showModal && <Modal setShowModal={handleShowModal} checkedItems={localData}/>
            }
            <Footer />
        </div>
    )
}
