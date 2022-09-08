import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../firebaseConfig"
import { MyInput } from "./MyInput"

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
            <div className=" px-8 md:w-[60%] lg:w-1/2 xl:w-[40%] 2xl:w-1/3 m-auto pt-10 textarea-height w-full text-center">
                <h1 className=" text-center font-bold text-2xl text-primary p-8">Log In!</h1>
                <form onSubmit={handleSubmit} onFocus={() => handleOnFocus()}>
                    <MyInput type="email" name="email" placeholder="email" required={true} />
                    <MyInput type="password" name="password" placeholder="password" required={true} />
                    <input type="submit" className=" primary-btn max-w-max my-8 " value="Log In!" />
                </form>
                <div className="w-full text-right">
                    <Link to='signup' className=" underline text-primary">Account nei nailo</Link>
                </div>
            </div>
        </div>
    )
}