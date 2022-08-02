import { motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";

function Nav() {
  const { data } = useSession();

  return (
    <nav className="fixed flex justify-around items-center top-0 left-0 w-screen h-14 mt-2  ">
      <motion.a
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring" }}
        href="/"
      >
        <h1 className="text-2xl font-bold">TayBlog</h1>
      </motion.a>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring" }}
        className="flex justify-center items-center gap-4"
      >
        <motion.a
          href="/showPosts"
          whileHover={{ cursor: "pointer", color: "#6c63ff" }}
          className="text-xl duration-100"
        >
          Posts
        </motion.a>
        <motion.a
          href="/createPost"
          whileHover={{ cursor: "pointer", color: "#6c63ff" }}
          className="text-xl duration-100"
        >
          Write
        </motion.a>
        {data == null && (
          <>
            <motion.a
              href="/login"
              className="text-xl duration-300  hover:cursor-pointer btn-outline p-1"
              style={{ padding: "5px" }}
              whileHover={{ color: "white" }}
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
      </motion.div>
    </nav>
  );
}

export default Nav;
