import Image from 'next/image'
import Head from 'next/head'


export default function Home() {
  return (
    <main>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <div className='container min-h-screen bg-[url("/bg.png")] bg-cover bg-center px-28 py-5'>
        <nav className='flex items-center'>
          <a href='/'><img src="/logopng.png" className='w-40 cursor-pointer'></img></a>
          <ul className='flex-1 text-center'>
            <li className='list-none inline-block px-5'><a href='/' className='px-2'>Home</a></li>
            <li className='list-none inline-block px-5'><a href='/items' className='px-2'>Order</a></li>
            <li className='list-none inline-block px-5'><a href='/subscribe' className='px-2'>Subscriptions</a></li>
          </ul>
        </nav>

        <div className='mt-48 max-w-2xl relative'>
          <h1 className='text-6xl font-semibold leading-normal'>Delicious and Healthy<br></br> <span className='font-light'>Tiffin Delivery Service</span>
          </h1>
          <p>Get freshly prepared, delicious and healthy home-cooked meals<br></br> delivered to your doorstep.</p>

          <div className='mt-10 '>
            <a href="/items" className='bg-[#d3b27f] rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-[#d3b27f] duration-300 hover:border border border-transparent text-black hover:text-white'>Order Now</a>
            <a href="/subscribe" className='border-[#d3b27f] rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-[#d3b27f] duration-300 hover:bg-[#d3b27f] border border-transparent text-white hover:text-white'>Subscribe</a>
          </div>
        </div>
        <img src='/landing2.png' className='w-full xl:w-1/3 xl:absolute bottom-0 right-20'></img>

      </div>

      <div className='container bg-[url("/demoo.jpg")] bg-cover bg-center'>
      <div className="text-white body-font  px-28 py-5 ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Why Choose Happi Box </h1>
            <p className="mb-8 leading-relaxed">We provide a wide variety of home-cooked meals made from fresh and locally sourced ingredients. Our meals are not only delicious but also healthy, ensuring you get the nutrition you need.</p>
            <div className="flex justify-center">
              <button className='bg-[#d3b27f] rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-yellow-100 duration-300 hover:border border border-transparent text-black hover:text-white'>Subscribe Now</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/zFDp2Qs-zY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='object-cover object-center rounded' allowfullscreen></iframe>
          </div>
        </div>
      </div>
      </div>

      <footer className="text-white body-font px-28 py-5">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            </a>
            <span className="ml-3 text-3xl font-bold">Happi Box</span>
            <p className="mt-4 text-sm text-white-500 font-semibold">At Happi Box, we are passionate about providing delicious and nutritious meals to our customers. Our mission is to make healthy eating convenient and enjoyable.</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white-600 hover:text-white-800">First Link</a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">Second Link</a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">Third Link</a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white-600 hover:text-white-800">First Link</a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">Second Link</a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">Third Link</a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white-600 hover:text-white-800">First Link</a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">Second Link</a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">Third Link</a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white-600 hover:text-white-800">First Link</a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">Second Link</a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">Third Link</a>
                </li>
                <li>
                  <a className="text-white-600 hover:text-white-800">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#edf2f7]">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-black text-sm text-center sm:text-left">© 2023 HappiBox. All rights reserved.
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-black">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-black">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-black">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-black">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </main>
  )
}
