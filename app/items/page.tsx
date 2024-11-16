"use client";
import React from "react";
import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useToast, Toast } from "@chakra-ui/react";
import { items, itemsL, itemsDinner, itemsPreggo } from "./items";
import ItemsView from "./ItemsView";
import Footer from "./Footer";

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
            <Tab>Dinner</Tab>
            <Tab>Preggo plates</Tab>
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
              <ItemsView items={itemsPreggo} />
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
