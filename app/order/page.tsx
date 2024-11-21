"use client";
import React from "react";
import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useToast, Toast } from "@chakra-ui/react";
import { items, itemsL, itemsDinner } from "./items";
import ItemsView from "./ItemsView";
import Footer from "./Footer";
import FoodTabsPreggo from "./FoodTabsPreggo";

const Page = () => {
  const toast = useToast();
  const [selectedOptions, setSelectedOptions] = useState(items.map(() => ""));
  return (
    <ChakraProvider>
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

      <div>
        <Footer />
      </div>
    </ChakraProvider>
  );
};

export default Page;
