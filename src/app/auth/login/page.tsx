"use client";
import React, { useContext, useState } from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import Spinner from "@/app/components/spinner";

function Page() {
  const [email, setEmail] = React.useState<string>("");
  const [loading, setloading] = useState<boolean>(false);
  const [error, seterror] = useState<string>('');
  const { setUser } = useContext(AuthContext)
  const [password, setPassword] = React.useState<string>("");
  const router = useRouter();

  const handleForm = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setloading(true);
    const { result, error } = await signIn(email, password);

    setloading(false);
    if (error) {
      seterror(error.message);
      return console.log(error.message);
    }

    // else successful
    setUser(result?.user?.email);
    return router.push("/");
  };
  return (
    <div className="w-96 mx-auto p-8 rounded shadow-lg text-center mt-11 ">

      <h1 className="text-3xl font-bold">Login <span>{loading?<Spinner/>:""}</span></h1>
      <form onSubmit={handleForm} className="mt-10 text-left text-xl ">
        <label htmlFor="email">
          <p>Email</p>
          <input
            className="w-full mt-1 border-2 px-1 rounded"
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
          />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input
            className=" w-full mt-1 border-2 px-1 rounded"
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </label>
        <br />
        {error && <span className="text-red-600 text-sm">{error}</span>}
        <br />
        <div className="flex justify-between item-center">
          <button
            className="mt-5 border-2 p-2 text-sm rounded bg-slate-700 text-white"
            type="submit"
          >
            Login
          </button>
          
          <Link className="mt-5 underline p-2 text-sm text-blue text-left" href={"/auth/signup"}>
            or signup
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Page;
