import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


export default function Topbar({ currentUser }) {
    const { logout } = useAuth()
    function handleLogOut() {
       logout()
    }
    return (
        <div className={` w-screen h-20 bg-primary flex ${currentUser ? 'justify-between' : 'justify-center'} items-center px-5 md:px-10 `} >
            <Link to='/'> <h1 className=" md:hidden font-bold text-md text-2xl text-white w-full">TDM77</h1> <h1 className="hidden md:block font-bold text-md md:text-2xl w-full text-white">TEDIM LAISIANGTHO VOLUNTEER</h1></Link>
            {
                currentUser && <>
                    <div className="hidden lg:flex items-center font-bold space-x-5 text-white uppercase">
                        {/* <NavLink to='/home'><h1>home</h1></NavLink> */}
                        <h1>{currentUser.email}</h1>
                        <button className="uppercase px-4 py-2 bg-secondary rounded hover:bg-red-400 text-primary hover:text-white" onClick={() => handleLogOut()}>Log Out</button>
                    </div>
                    <div className='lg:hidden'>
                        <button className="uppercase px-4 py-2 border rounded text-white font-bold" onClick={() => handleLogOut()}>Log Out</button>
                    </div>
                </>
            }
        </div>
    )
}
