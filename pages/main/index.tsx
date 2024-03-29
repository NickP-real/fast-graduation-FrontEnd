import { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
import React from "react";
// import Info from "components/info";
// import MenuPanel from "components/menu_panel";

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: "/main/student/profile",
      permanent: false,
    },
  };
};

const Home: NextPage = () => {
  return <></>;
};

// return (
//   <div className="flex h-screen flex-col">
//     <Head>
//       <title>Fast Graduation</title>
//       <meta name="description" content="Generated by create next app" />
//       <link rel="icon" href="/favicon.ico" />
//     </Head>

//     <div className="gradient z-[1] h-[5%] blur-sm"></div>
//     <header className="container mx-auto">
//       <Image
//         src="/fastgrad.svg"
//         alt="fast graduate logo"
//         width={471 / 2}
//         height={180 / 2}
//         objectFit="cover"
//       />
//     </header>

//     <ul className="fast-text container mx-auto flex justify-end gap-x-1 px-3 md:gap-x-2 md:px-0">
//       <li>นักศึกษา</li>|<li>อาจารย์</li>
//     </ul>

//     <main className="mt-3 flex flex-grow flex-col px-3 md:px-0">
//       <Info />
//       <MenuPanel />
//     </main>

//   </div>
// );

export default Home;
