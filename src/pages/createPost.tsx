import Head from "next/head";
import { useSession } from "next-auth/react";
import Nav from "./components/Nav";
import { trpc } from "../utils/trpc";
import { useState } from "react";

const createPost = () => {
  const { data } = useSession();
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  const createPostMutation = trpc.useMutation("PostRouter.create-post");

  const handleCreatePost = () => {
    if (!data) return;
    if (!data.user) return;
    if (!data.user.name) return;
    createPostMutation.mutate({
      body,
      title,
      author: data.user.name?.toString(),
      User: data.user,
    });
  };

  if (!data) {
    return (
      <section className="h-screen flex justify-center items-center">
        <Head>
          <title>Create Post</title>
          <meta name="description" content="Generated by create-t3-app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <main className="h-full flex justify-center items-center ">
          <div className="flex flex-col">
            <h1 className="text-2xl">You Need to login to Create Posts</h1>
            <a href="/login" className="btn">
              Login
            </a>
          </div>
        </main>
      </section>
    );
  }

  return (
    <section className="h-screen flex justify-center items-center">
      <Head>
        <title>Create Post</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="h-full flex justify-center items-center ">
        <form className="flex justify-center items-center p-10 shadow-xl border flex-col gap-3 rounded-2xl">
          <label className="text-2xl">Write Whatever</label>
          <input
            type="text"
            className="border rounded p-1"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="border"
            rows={5}
            cols={60}
            onChange={(e) => setBody(e.target.value)}
          />
          <button className="btn" onClick={() => handleCreatePost()}>
            Post
          </button>
        </form>
      </main>
    </section>
  );
};

export default createPost;
