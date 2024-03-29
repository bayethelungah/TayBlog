import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { trpc } from "../utils/trpc";

type loginArgs = {
  e: React.MouseEvent<Element, globalThis.MouseEvent>;
  email: string;
  password: string;
};

const Login: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const { status } = useSession();
  const router = useRouter();

  if (status == "authenticated") {
    router.push("/showPosts");
  }

  const handleLogin = (e: any) => {
    e.preventDefault();
    signIn("github");
  };

  return (
    <section>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center items-center h-screen gap-2">
        <Link href="/" className="text-2xl font-semibold hover:cursor-pointer">
          TayBlog
        </Link>
        <form className="flex flex-col justify-center items-center p-20 border rounded-xl gap-3 shadow-lg">
          <h1 className="text-2xl">Login</h1>

          {loginError && (
            <>
              <div className="flex justify-center items-center bg-red-400 p-1 rounded-3xl w-full">
                <p className=" text-teal-50">{loginError}</p>
              </div>
            </>
          )}

          <button onClick={(e) => handleLogin(e)} className="btn mt-2">
            Sign In With Github
          </button>

          <Link href="/register" className=" text-cyan-600">
            Dont Have an account?
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Login;
