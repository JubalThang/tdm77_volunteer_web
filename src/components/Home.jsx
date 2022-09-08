import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function Home() {
    const { currentUser, users } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        !currentUser && navigate('/')
    }, [currentUser, navigate])

    return (
        <div className="text-center text-primary">
            <h1 className="font-bold text-xl py-5">Lungdam ei nong Sign Up!</h1>
            <div className="px-4">
                <div className="border border-green-400 max-w-max mx-auto rounded">
                    <p className='inline-flex px-4 py-2 text-[14px] font-medium'>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg> */}
                        Mabaan ding pen na email ah na check sak in maw.</p>
                </div>
            </div>
            <h1 className="p-4 font-bold">Volunteer hong ki hel thei teng.</h1>
            {
                users.map(user => (
                    <div key={user.uid} className="mx-4 px-2 md:px-10 md:w-[60%] md:mx-auto py-4 mt-4 rounded-lg border space-y-3 shadow">
                        <div className="flex items-center">
                            <h1 className=" font-medium text-primary mr-3">Book(s):</h1>
                            <div className="flex space-x-4 w-full overflow-y-hidden">
                                {user.books && user.books.map(book => (<h1 key={book.uid} className=" bg-bgprimary text-primary font-medium py-1 px-4 rounded-md whitespace-nowrap">{book.name}</h1>))}
                            </div>
                        </div>
                        <h1 className='w-full text-right text-primary font-semibold'><span className="text-sm font-mono text-secondary mr-2">contributor:</span>{user.username}</h1>
                    </div>
                ))
            }
        </div >
    )
}
