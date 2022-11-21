import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Carousel from "../components/carousel";
export default function Home() {
  return (
    <>
      <Head>
        <title>Food App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className=" h-[10vh] flex align-center bg-orange-600">
        <div className="flex justify-center align-center  w-40 text-center flex-col ml-6 font-bold text-white bg-orange-500">
          FOODZILLA
        </div>
      </nav>
      <Carousel />
      <main></main>
    </>
  );
}
