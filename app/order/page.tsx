"use client";
import React from "react";
import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useToast, Toast } from "@chakra-ui/react";
import { items, itemsL, itemsDinner } from "./items";
import ItemsView from "./ItemsView";
import FoodTabsPreggo from "./FoodTabsPreggo";
import Footer from "./Footer";


const Page = () => {
  const toast = useToast();
  const [selectedOptions, setSelectedOptions] = useState(items.map(() => ""));
  return (
    <div>
      <div className="container mx-auto">
        <Tabs isFitted={true} variant="soft-rounded" colorScheme="yellow">
          <TabList>
            <Tab>Breakfast</Tab>
            <Tab>Lunch</Tab>
            <Tab>Fit Feasts</Tab>
            <Tab>Mama meals</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ItemsView items={items} />
            </TabPanel>
            <TabPanel>
              <ItemsView items={itemsL} />
            </TabPanel>
            <TabPanel>
              <ItemsView items={itemsDinner} />
            </TabPanel>
            <TabPanel>
              <FoodTabsPreggo />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <footer className="text-white bg-black body-font px-4 sm:px-6 lg:px-8 xl:px-28 py-12 sm:py-16 lg:py-24">
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
    </div>
  );
};

export default Page;
