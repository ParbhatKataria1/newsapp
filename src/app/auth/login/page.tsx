"use client";
import React from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";

function Page() {
  const [email, setEmail] = React.useState<String>("");
  const { setUser } = useAuthContext()
  const [password, setPassword] = React.useState<String>("");
  const router = useRouter();

  const handleForm = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    setUser(result?.user?.email);
    return router.push("/");
  };
  return (
    <div className="w-96 mx-auto p-8 rounded shadow-lg text-center mt-11 ">
      <h1 className="text-3xl font-bold">Login</h1>
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
        <div className="flex justify-between item-center">
          <button
            className="mt-5 border-2 p-2 text-sm rounded bg-slate-700 text-white"
            type="submit"
          >
            Sign up
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
