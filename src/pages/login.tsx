type Props = {};
import { trpc } from "../utils/trpc";

const login = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col justify-center items-center p-20 border rounded-xl gap-3 shadow-lg">
        <h1 className="text-2xl">Login</h1>
        <input
          className="border rounded-3xl p-3"
          type="text"
          placeholder="Full Name"
        />
        <input
          className="border rounded-3xl p-3"
          type="text"
          placeholder="Username"
        />
        <input
          className="border rounded-3xl p-3"
          type="email"
          placeholder="Email"
        />
        <input
          className="border rounded-3xl p-3"
          type="password"
          placeholder="Password"
        />
        <button className="btn mt-2">Create Account</button>
        <a href="/register" className=" text-cyan-600">
          Dont Have an account?
        </a>
      </form>
    </div>
  );
};

export default login;
