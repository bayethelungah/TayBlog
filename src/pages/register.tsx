import { NextPage } from "next";
import { signIn } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const Register: NextPage = () => {
  const router = useRouter();

  const handleRegister = (e: MouseEvent) => {
    e.preventDefault();
    signIn("github");
  };
  return (
    <section>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center items-center h-screen flex-col gap-2">
        <Link href="/" className="text-2xl font-semibold hover:cursor-pointer">
          TayBlog
        </Link>
        <form className="flex flex-col justify-center items-center p-20 border rounded-xl gap-3 shadow-lg">
          <h1 className="text-2xl">Register</h1>
          <button className="btn" onClick={(e) => handleRegister(e)}>
            Register With Github
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
