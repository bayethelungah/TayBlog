import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Nav({}: Props) {
  return (
    <nav className="fixed flex justify-around items-center top-0 left-0 w-screen h-10 mt-5">
      <h1 className="text-2xl">
        {" "}
        <strong>Blogg</strong>{" "}
      </h1>
      <div className="flex justify-center items-center gap-4">
        <motion.a className="text-xl duration-300  hover:cursor-pointer hover:text-cyan-800">
          Posts
        </motion.a>
        <motion.a className="text-xl duration-300  hover:cursor-pointer hover:text-cyan-800">
          Categories
        </motion.a>
        <motion.a className="text-xl duration-300  hover:cursor-pointer btn-outline">
          Login
        </motion.a>
        <motion.a
          href="/register"
          className="text-xl duration-300  hover:cursor-pointer btn"
        >
          Sign up
        </motion.a>
      </div>
    </nav>
  );
}

export default Nav;
