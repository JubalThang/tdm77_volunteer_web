import { Link } from "react-router-dom"

export const SignupAccount = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.email.value)
        e.target.reset()
    }
    // TODO: history push to home after successfully created an account

    return (
        <div className=" px-8 md:w-[80%] lg:w-1/2 m-auto">
            <h1 className=" text-center mt-8 font-bold text-2xl text-primary p-8">Please Create an account!</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" autoComplete="email" className="block border-b-2 border-primary w-full h-12 px-4 text-primary" placeholder="email address" required />
                <input type="password" name="password" className="block border-b-2 border-primary my-8 w-full h-12 px-4 text-primary" placeholder="password" required />
                <input type="password" name="confirm_password" className="block border-b-2 border-primary my-8 w-full h-12 px-4 text-primary" placeholder="confirm password" required />
                <input type="submit" className=" primary-btn w-full my-8 " value="Sign Up!" />
            </form>
            <div className="w-full text-right">
                <Link to='/' className=" underline text-primary">I have an account</Link>
            </div>
        </div>
    )
}
