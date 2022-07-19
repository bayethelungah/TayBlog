import { useState } from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../context/state";

type Props = {};

function Nav({}: Props) {
  const { getUserInfo, logout } = useAppContext();

  console.log(getUserInfo());

  return (
    <nav className="fixed flex justify-around items-center top-0 left-0 w-screen h-14 mt-2 shadow-lg ">
      <h1 className="text-2xl">
        {" "}
        <strong>TayBlog</strong>{" "}
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
        {getUserInfo() == null && (
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
        {getUserInfo() !== null && (
          <>
            <motion.button className="text-xl duration-300  hover:cursor-pointer btn-outline">
              {getUserInfo()?.username}
            </motion.button>
            <motion.button
              onClick={() => logout()}
              className="text-xl duration-300  hover:cursor-pointer btn"
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
