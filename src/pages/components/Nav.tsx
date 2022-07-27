import { motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";

function Nav() {
  const { data } = useSession();

  return (
    <nav className="fixed flex justify-around items-center top-0 left-0 w-screen h-14 mt-2 shadow ">
      <h1 className="text-2xl">
        <strong>TayBlog</strong>
      </h1>
      <div className="flex justify-center items-center gap-4">
        <motion.a
          href="/"
          className="text-xl duration-300  hover:cursor-pointer hover:text-cyan-800"
        >
          Home
        </motion.a>
        <motion.a
          href="/posts"
          className="text-xl duration-300  hover:cursor-pointer hover:text-cyan-800"
        >
          Posts
        </motion.a>
        {data == null && (
          <>
            <motion.a
              href="/login"
              className="text-xl duration-300  hover:cursor-pointer btn-outline p-1"
              style={{ padding: "5px" }}
            >
              Login
            </motion.a>
            <motion.a
              href="/register"
              className="text-xl duration-300  hover:cursor-pointer btn"
              style={{ padding: "5px" }}
            >
              Sign up
            </motion.a>
          </>
        )}
        {data && (
          <>
            <motion.a
              href="/settings"
              className="text-xl duration-300  hover:cursor-pointer btn-outline p-1"
              style={{ padding: "5px" }}
            >
              {data.user?.name}
            </motion.a>
            <motion.button
              className="text-xl duration-300  hover:cursor-pointer btn"
              style={{ padding: "5px" }}
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </motion.button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
