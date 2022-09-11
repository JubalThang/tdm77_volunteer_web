import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Topbar({ currentUser }) {

    const { logout } = useAuth()
    async function handleLogOut() {
        try {
            await logout()
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className={` w-screen h-14 md:h-20 bg-primary text-xl flex ${currentUser ? 'justify-between' : 'justify-center'} items-center px-5 md:px-10 `} >
            <Link to='/'> <h1 className=" md:hidden font-bold text-md text-white w-full tracking-widest">TDM77</h1> <h1 className="hidden md:block font-bold text-md md:text-2xl w-full text-white tracking-widest">TEDIM LAISIANGTHO VOLUNTEER</h1></Link>
            {
                currentUser && <>
                    <div className="hidden lg:flex items-center font-bold space-x-5 text-white capitalize">
                        {/* <NavLink to='/home'><h1>home</h1></NavLink> */}
                        <h1>{currentUser.username}</h1>
                        <button className="uppercase px-4 py-2 border-secondary border font-light rounded text-white hover:text-secondary" onClick={() => handleLogOut()}>Log Out</button>
                    </div>
                    <h1 className="md:hidden text-white text-md">{currentUser.username}</h1>
                    <div className='lg:hidden'>
                        <button className="uppercase px-2 py-1 md:px-4 md:py-2 border text-sm md:text-xl rounded text-white " onClick={() => handleLogOut()}>Log Out</button>
                    </div>
                </>
            }
        </div>
    )
}
