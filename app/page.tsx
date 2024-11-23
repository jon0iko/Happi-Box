"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import WavingMascot from "./WavingMascot";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bhojon Box - Delicious and Healthy Tiffin Delivery Service</title>
      </Head>

      <div className='flex-grow bg-[url("/bg.png")] bg-cover bg-center px-4 sm:px-6 lg:px-8 xl:px-28 py-5 min-h-screen'>
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logopng.png"
              alt="Happi Box Logo"
              width={160}
              height={40}
              className="w-32 sm:w-40 cursor-pointer"
            />
          </Link>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row absolute lg:relative top-0 right-32 lg:top-0 left-0 right-0 bg-black lg:bg-transparent z-50 lg:flex-1 text-center h-full`}
          >
            {["Home", "Order", "Subscriptions"].map((item, index) => (
              <li
                key={item}
                className="list-none lg:inline-block px-5 py-8 lg:py-0 top-32"
              >
                <Link
                  href={index === 0 ? "/" : `/${item.toLowerCase()}`}
                  className="px-2 hover:text-[#D3B27F]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-16 sm:mt-24 lg:mt-48 max-w-2xl relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight sm:leading-normal p-2">
            Delicious and Healthy<br></br>{" "}
            <span className="font-light">Tiffin Delivery Service</span>
          </h1>
          <p className="p-2 text-sm sm:text-base">
            Get freshly prepared, delicious and healthy home-cooked meals
            <br className="hidden sm:inline" /> delivered to your doorstep.
          </p>

          <div className="mt-6 sm:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/order"
              className="bg-[#d3b27f] rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-[#d3b27f] duration-300 hover:border border border-transparent text-black hover:text-white"
            >
              Order Now
            </Link>
            <Link
              href="/subscriptions"
              className="border-[#d3b27f] rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-[#d3b27f] duration-300 hover:bg-[#d3b27f] border border-transparent text-white hover:text-white"
            >
              Subscribe
            </Link>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 lg:absolute bottom-0 right-4 xl:right-20 w-full lg:w-1/2 xl:w-1/3 max-w-lg mx-auto">
          <Image
            src="/landing2.png"
            alt="Tiffin Box"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className='bg-[url("/demoo.jpg")] bg-cover bg-center'>
  <div className="text-white body-font px-4 sm:px-6 lg:px-8 xl:px-28 py-8 sm:py-12 lg:py-16">
    <div className="container mx-auto flex flex-col lg:flex-row items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Why Choose Bhojon Box{" "}
        </h1>
        <p className="mb-8 leading-relaxed">
          We provide a wide variety of home-cooked meals made from fresh
          and locally sourced ingredients. Our meals are not only
          delicious but also healthy, ensuring you get the nutrition you
          need.
        </p>
        <div className="flex justify-center">
          <a href="/subscriptions">
            <button className="bg-[#d3b27f] rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-yellow-100 duration-300 hover:border border border-transparent text-black hover:text-white">
              Subscribe Now
            </button>
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
  <div className="relative" style={{ paddingBottom: "56.25%" }}>
    <iframe
      className="absolute top-0 left-0 w-full h-full object-cover object-center rounded"
      src="https://www.youtube.com/embed/zFDp2Qs-zY4"
      title="Happi Box"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
      </div>
    </div>
  </div>
</div>

      <footer className="text-white body-font px-4 sm:px-6 lg:px-8 xl:px-28 py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <span className="text-3xl font-bold">Bhojon Box</span>
            <p className="mt-4 text-sm text-white-500 font-semibold">
              At Bhojon Box, we are passionate about providing delicious and
              nutritious meals to our customers. Our mission is to make healthy
              eating convenient and enjoyable.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap lg:pl-20 -mb-10 md:mt-0 mt-10 sm:flex-row">
            {[1, 2].map((_, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/4 mb-10 px-4">
                <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none">
                  {[
                    "First Link",
                    "Second Link",
                    "Third Link",
                    "Fourth Link",
                  ].map((link) => (
                    <li key={link} className="mb-2">
                      <a className="text-white-600 hover:text-white-800">
                        {link}
                      </a>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </footer>

      <div className="bg-[#edf2f7] py-4 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col sm:flex-row items-center">
          <p className="text-black text-sm text-center sm:text-left mb-4 sm:mb-0">
            © 2023 Bhojon Box. All rights reserved.
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            {[
              {
                name: "facebook",
                d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
              },
              {
                name: "twitter",
                d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
              },
              {
                name: "instagram",
                d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 21h9a3 3 0 003-3V6a3 3 0 00-3-3h-9a3 3 0 00-3 3v12a3 3 0 003 3z",
              },
              {
                name: "linkedin",
                d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 4a2 2 0 100-4 2 2 0 000 4z",
              },
            ].map((social) => (
              <a key={social.name} className="text-black ml-3 first:ml-0">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d={social.d}></path>
                </svg>
              </a>
            ))}
          </span>
        </div>
      </div>
    </main>
  );
}
