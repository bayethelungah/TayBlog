import React, { useState } from "react";
import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";
import Head from "next/head";

type Props = {};

type RegisterArgs = {
  username: string;
  email: string;
  password: string;
  fullName: string;
  e: React.MouseEvent<Element, globalThis.MouseEvent>;
};

const register = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const createUserMutation = trpc.useMutation("UserRouter.create-user");
  const router = useRouter();

  const handleRegister = ({
    e,
    password,
    fullName,
    username,
    email,
  }: RegisterArgs) => {
    e.preventDefault();
    createUserMutation.mutate({ username, email, password, fullName });
    if (createUserMutation.error) {
      console.error(createUserMutation.error.message);
      return;
    }
    router.push("/login");
  };

  return (
    <section>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center items-center h-screen flex-col gap-2">
        <a href="/" className="text-2xl font-semibold hover:cursor-pointer">
          TayBlog
        </a>
        <form className="flex flex-col justify-center items-center p-20 border rounded-xl gap-3 shadow-lg">
          <h1 className="text-2xl">Register</h1>
          <input
            className="border rounded-3xl p-3"
            type="text"
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            className="border rounded-3xl p-3"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border rounded-3xl p-3"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border rounded-3xl p-3"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={(e) =>
              handleRegister({ e, password, fullName, username, email })
            }
            className="btn mt-2"
          >
            Login
          </button>
          <a href="/login" className=" text-cyan-600">
            Aready Have An Account?
          </a>
        </form>
      </div>
    </section>
  );
};

export default register;
