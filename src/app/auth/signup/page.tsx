'use client'
import React, { useState } from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation'
import Spinner from "@/app/components/spinner";

function Page() {
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('');
    const [error, seterror] = useState<string>('');
    const [loading, setloading] = React.useState<boolean>(false);
    const router = useRouter()

    const handleForm = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
setloading(true);
        const { result, error } = await signUp(email, password);
setloading(false);
        if (error) {
            const value = JSON.parse(JSON.stringify(error)).code
            seterror(value)
            return value
        }

        // else successful
        return router.push("/auth/login")
    }
    return (<div>
        <div className="w-96  mx-auto p-8 rounded shadow-lg text-center mt-11 ">
            <h1 className="text-3xl font-bold">Sign up <span>{loading?<Spinner/>:""}</span></h1>
            <form  onSubmit={handleForm} className="mt-10 text-left  text-xl ">
                <label  htmlFor="email">
                    <p>Email</p>
                    <input className="mt-1 w-full border-2 px-1 rounded" onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">
                    <p className="mt-5">Password</p>
                    <input className=" w-full mt-1 border-2 px-1 rounded" onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>
                <br />
                {error && <span className="text-red-600 text-sm">{error}</span>}
                <br />
                <button className="mt-5 border-2 p-2 text-sm rounded bg-slate-700 text-white" type="submit">Sign up</button>
            </form>
        </div>
    </div>);
}

export default Page;