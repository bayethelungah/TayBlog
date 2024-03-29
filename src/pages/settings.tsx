import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Nav from "./components/Nav";

const Settings: NextPage = () => {
  const user = useSession();
  const router = useRouter();

  if (user.status === "unauthenticated") {
    router.push("/login");
  }

  return (
    <section>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>{user.data?.user?.name}'s Settings</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center border p-10 rounded-3xl">
          <h1 className="text-2xl">Settings</h1>
          <div className="flex justify-center items-center flex-col">
            <p>Number of Posts: 0</p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Settings;
