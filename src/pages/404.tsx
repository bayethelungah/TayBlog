import { NextPage } from "next";
import Head from "next/head";

const FourOFour: NextPage = () => {
  return (
    <section>
      <Head>
        <title>Uh Oh</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold">Uh Oh!</h1>
        <h1 className="font-bold">
          Looks like the pages you are looking for can not be found.
        </h1>
      </main>
    </section>
  );
};

export default FourOFour;
