import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../firebaseConfig"

export const SignupAccount = () => {


    const [notMatch, setNotMatch] = useState(false)
    const [info, setInfo] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const confirm_password = e.target.confirm_password.value

        if (password === confirm_password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => navigate('/') )
                .catch(err => {
                    switch (err.code) {
                        case 'auth/weak-password':
                            setInfo('Passoword should be at least 6 characters!')
                            break;
                        case 'auth/email-already-exists':
                            setInfo('Email already exists!');
                            break;
                        default: setInfo(err.code)
                    }
                })

        } else {
            setNotMatch(true)
        }

        e.target.reset()
        console.log(info)
    }


    function handleOnFocus() {
        setNotMatch(false)
        setInfo()

    }

    // TODO: history push to home after successfully created an account

    return (
        <div className='h-[calc(100vh-80px)]'>
            {info && <p className={` w-full bg-red-300 p-5 text-center font-medium text-white`}>{info}</p>}
            <div className=" px-8 md:w-[60%] lg:w-1/2 xl:w-[40%] 2xl:w-1/3 m-auto">
                <h1 className=" text-center font-bold text-2xl text-primary p-8">Please Create an account!</h1>
                <form onSubmit={handleSubmit} onFocus={() => handleOnFocus()}>
                    <input type="email" name="email" autoComplete="email" className="my-input" placeholder="email address" required />
                    <input type="password" name="password" className="my-input" placeholder="password" required />
                    {notMatch && <p className="block text-red-500 font-mono px-1 text-sm">Password not match!</p>}
                    <input type="password" name="confirm_password" className="my-input" placeholder="confirm password" required />
                    {notMatch && <p className="block text-red-500 font-mono px-1 text-sm">Password not match!</p>}
                    <input type="submit" className=" primary-btn w-full my-8 " value="Sign Up!" />
                </form>
                <div className="w-full text-right">
                    <Link to='/' className=" underline text-primary">I have an account</Link>
                </div>
            </div>
        </div>
    )
}
