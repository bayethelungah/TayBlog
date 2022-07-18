import { useState } from "react";
import { trpc } from "../utils/trpc";

type Props = {};

const register = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const createUserMutation = trpc.useMutation("UserRouter.create-user");

  const handleRegister = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col justify-center items-center p-20 border rounded-xl gap-3 shadow-lg">
        <h1 className="text-2xl">Login</h1>
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
        <button onClick={(e) => handleRegister(e)} className="btn mt-2">
          Login
        </button>
        <a href="/register" className=" text-cyan-600">
          Dont Have an account?
        </a>
      </form>
    </div>
  );
};

export default register;
