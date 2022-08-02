/* eslint-disable react-hooks/rules-of-hooks */
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { ReactFragment } from "react";
import { prisma } from "../../server/db/client";
import { trpc } from "../../utils/trpc";
import Nav from "../components/Nav";

interface IParams extends ParsedUrlQuery {
  id: string;
}

type Props = {
  post: Post;
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

type Post = {
  body: string;
  author: string;
  id: string;
  title: string;
  createdAt: string;
};

type PostProps = {
  post: Post;
};

export async function getStaticPaths() {
  const users = await prisma.post.findMany();
  const paths = users.map((user) => {
    return {
      params: { id: user.title.replace(" ", ".") },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { id } = context.params as Params;
  const post = await prisma.post.findFirst({
    where: { title: id as string },
  });
  if (!post) return;

  return {
    props: {
      post: {
        body: post.body,
        title: post.title,
        id: post.id,
        author: post.author,
        createdAt: post.createdAt.toUTCString(),
      },
    },
  };
}

export default function Posts({ post }: PostProps) {
  if (!post) return;
  const deletePostMutation = trpc.useMutation("PostRouter.delete-post");
  const date = post.createdAt.split(" ").splice(0, 4).join(" ");
  const router = useRouter();
  const { data } = useSession();
  const handleDelete = (event: React.MouseEvent) => {
    event.preventDefault();
    deletePostMutation.mutate({ id: post.id });
    router.push("/showPosts");
  };

  return (
    <section>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main className="flex h-screen justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl primary-col">{post.author}</h2>
          <h1 className="text-4xl">{post.title}</h1>
          {post.author === data?.user?.name && (
            <button
              onClick={(event) => handleDelete(event)}
              className="btn bg-red-500 border-red-500 absolute top-2 right-2 hover:text-black p-1"
            >
              Delete
            </button>
          )}

          <p className="text-lg">{post.body}</p>
          <p className="text-lg">{date}</p>
        </div>
      </main>
    </section>
  );
}
