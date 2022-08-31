import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../firebaseConfig"
import { Footer } from "./Footer"

export const LgoinPage = () => {
    const [info, setInfo] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
            .then(() => navigate('/'))
            .catch(err => {
                switch (err.code) {
                    case 'auth/user-not-found':
                        setInfo('User not Found!')
                        break;
                    case 'auth/wrong-password':
                        setInfo('Invalid credentials!');
                        break;
                    default: setInfo(err.code)
                }
            })

        e.target.reset()
    }


    function handleOnFocus() {
        setInfo()

    }

    return (
        <div className='flex flex-col justify-between h-full'>
            {info && <p className={` w-full bg-red-300 p-5 text-center font-medium text-white`}>{info}</p>}
            <div className=" px-8 md:w-[60%] lg:w-1/2 xl:w-[40%] 2xl:w-1/3 m-auto pt-10 textarea-height w-full">
                <h1 className=" text-center font-bold text-2xl text-primary p-8">Please Log In</h1>
                <form onSubmit={handleSubmit} onFocus={() => handleOnFocus()}>
                    <input type="email" name="email" autoComplete="email" className="my-input" placeholder="email address" required />
                    <input type="password" name="password" className="my-input sm:border-b" placeholder="password" required />
                    <input type="submit" className=" primary-btn w-full my-8 " value="Log In!" />
                </form>
                <div className="w-full text-right">
                    <Link to='signup' className=" underline text-primary">I don't have an account yet</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}