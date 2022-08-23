import { Link, NavLink } from "react-router-dom";


export default function Topbar({ currentUser }) {
    return (
        <div className={` w-screen h-20 bg-primary flex ${currentUser ? 'justify-between' : 'justify-center'} items-center px-5 `} >
            <Link to='/home'> <h1 className=" md:hidden font-bold text-md md:text-2xl text-white w-full">TDM77</h1> <h1 className="hidden md:block font-bold text-md md:text-2xl w-full text-white">TEDIM LAISIANGTHO VOLUNTEER</h1></Link>
            {
                currentUser && <>
                    <div className="hidden lg:flex space-x-5 text-white uppercase">
                       <NavLink to='/home'><h1>home</h1></NavLink>
                        <NavLink to='/write'><h1>Write</h1></NavLink>
                        <h1>UserName</h1>
                        <h1>Log Out</h1>
                    </div>
                    <div className='lg:hidden'>
                        JOK
                    </div>
                </>
            }
        </div>
    )
}
