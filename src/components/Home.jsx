import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function Home() {
    const { currentUser } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        !currentUser &&  navigate('/')
    },[currentUser, navigate])

    return (
        <div>
            <div className="mx-4 px-2 md:px-10 md:w-[60%] md:mx-auto my-10 py-4 rounded-lg border space-y-8">
                <div className="flex items-center">
                    <h1 className=" font-medium text-primary mr-8">Book:</h1>
                    <div className="flex space-x-4 w-full overflow-y-hidden">
                        <h1 className=" bg-bgprimary text-primary font-medium py-2 px-4 rounded-md">Piancil</h1>
                        <h1 className=" bg-bgprimary text-primary font-medium py-2 px-4 rounded-md">Piancil</h1>
                        <h1 className=" bg-bgprimary text-primary font-medium py-2 px-4 rounded-md">Piancil</h1>
                        <h1 className=" bg-bgprimary text-primary font-medium py-2 px-4 rounded-md">Piancil</h1>
                        <h1 className=" bg-bgprimary text-primary font-medium py-2 px-4 rounded-md">Piancil</h1>
                    </div>
                </div>
                <div className="flex items-center ">
                    <h1 className=" font-medium text-primary mr-2">Chapter:</h1>
                    <div className='overflow-y-hidden flex w-full  space-x-[20px]'>
                        <div className="bg-primary text-white font-bold p-2 rounded-md">1</div>
                        <div className="bg-primary text-white font-bold p-2 rounded-md">1</div>
                        <div className="bg-primary text-white font-bold p-2 rounded-md">1</div>
                        <div className="bg-primary text-white font-bold p-2 rounded-md">1</div>
                        <div className="bg-primary text-white font-bold p-2 rounded-md">1</div>
                        <div className="bg-primary text-white font-bold p-2 rounded-md">1</div>
                        <div className="bg-primary text-white font-bold p-2 rounded-md">1</div>
                        <div className="bg-primary text-white font-bold p-2 rounded-md">1</div>
                        <div className="bg-primary text-white font-bold p-2 rounded-md">1</div>
                    </div>
                </div>
                <h1 className='w-full text-right text-primary font-semibold'>controbuiter: Name adjf adif aa oaf</h1>
            </div>
        </div >
    )
}
