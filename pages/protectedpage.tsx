import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Info from "../components/info";
import Menu from "../components/menu";

const ProtectedPage: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Fast Graduation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container mx-auto">
        <Image
          src="/fastgrad.svg"
          alt="fast graduation logo"
          width={471 / 2}
          height={243 / 2}
        />
      </header>

      <main className="container flex flex-col flex-grow px-3 mx-auto md:px-0">
        <Info />
        <section className="grid flex-grow grid-cols-2 gap-x-3 gap-y-5 mt-5 md:grid-cols-3 md:gap-x-4 md:gap-y-6">
          <Menu />
          <Menu />
          <Menu />
          <Menu />
          <Menu />
          <Menu />
        </section>
      </main>
      <p>test</p>
      <footer className="h-12 text-black bg-blue-900 md:h-24">www</footer>
    </div>
  );
};

export default ProtectedPage;
