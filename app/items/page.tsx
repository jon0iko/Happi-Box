'use client'
import React from 'react'
import {useState} from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Button } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { useToast, Toast } from '@chakra-ui/react'
import footer from '../footer'


interface Item {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    options: string[];
    optionsWithPrices: object;
}

interface ItemL {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    options: string[];
}

const items: Item[] = [
    {
        id: 1,
        name: 'Paratha',
        price: 14.99,
        imageUrl: './Parathaa.PNG',
        options: ['With Oil', 'Without Oil','Plain Flour','Brown flour'],
        optionsWithPrices: {
            'With Oil': 14.99,
            'Without Oil': 12.99,
            'Plain Flour': 13.99,
            'Brown flour': 15.99,
        },
        
    },
    {
        id: 2,
        name: 'Roti',
        price: 14.99,
        imageUrl: 'Rotii.PNG',
        options: ['Brown Flour', 'White Flour'],
        optionsWithPrices: {
            'With Oil': 14.99,
            'Without Oil': 12.99,
        },
    },
    // Add more items as needed
    {
        id: 3,
        name: 'Mixed Vegetable',
        price: 39.99,
        imageUrl: 'Veg.PNG',
        options: ['Steamed', 'Vegetable Gravy'],
        optionsWithPrices: {
            'With Oil': 14.99,
            'Without Oil': 12.99,
        },
        
    },
    {
        id: 4,
        name: 'Daal',
        price: 49.99,
        imageUrl: 'Daal.PNG',
        options: ['Mughdaal Tarka', 'Bootdaal Tarka'],
        optionsWithPrices: {
            'With Oil': 14.99,
            'Without Oil': 12.99,
        },
    },
    {
        id: 5,
        name: 'Shuji',
        price: 35.00,
        imageUrl: 'shuji.png',
        options: ['With Sugar', 'Without Sugar','Dairy','Non Dairy'],
        optionsWithPrices: {
            'With Oil': 14.99,
            'Without Oil': 12.99,
        },
        
    },
    {
        id: 6,
        name: 'Kathi Rolls',
        price: 79.99,
        imageUrl: 'roll.PNG',
        options: ['Chicken Kathi', 'Beef Kathi','Vegetable Kathi','Paneer Kathi'],
        optionsWithPrices: {
            'With Oil': 14.99,
            'Without Oil': 12.99,
        },
        
    },
    {
        id: 7,
        name: 'Chicken Biryani',
        price: 140.00,
        imageUrl: 'biryani.PNG',
        options: ['None'],
        optionsWithPrices: {
            'With Oil': 14.99,
            'Without Oil': 12.99,
        },
    },
    {
        id: 8,
        name: 'Khichuri',
        price: 199.99,
        imageUrl: 'Khichuri.PNG',
        options: ['Beef Khichuri', 'Plain/Letka Kichuri'],
        optionsWithPrices: {
            'Beef Khichuri': 199.99, 'Plain/Letka Kichuri': 49.99,
        },
    },
];

const itemsL: ItemL[] = [
    {
        id: 1,
        name: 'Rice',
        price: 69.99,
        imageUrl: 'Rice.PNG',
        options: ['White Rice','Brown Rice'],
    },
    {
        id: 2,
        name: 'Polao',
        price: 99.99,
        imageUrl: 'Polao.PNG',
        options: ['With Oil','Without Oil'],
    },
    // Add more items as needed
    {
        id: 3,
        name: 'Biryani',
        price: 140.00,
        imageUrl: 'biryani.PNG',
        options: ['Chicken','Beef','Mutton'],
    },
    {
        id: 4,
        name: 'Beef Rezala',
        price: 350.00,
        imageUrl: 'bRejala.PNG',
        options: ['Spicy','Mildly Spicy'],
    },
    {
        id: 5,
        name: 'Chicken Roast',
        price: 200.00,
        imageUrl: 'roast.PNG',
        options: ['Broiler Chicken','Deshi Chicken'],
    },
    {
        id: 6,
        name: 'Bhortas',
        price: 20.00,
        imageUrl: 'vorta.PNG',
        options: ['Alu Bhorta','Daal Bhorta','Tomato Bhorta','Begun Bhorta'],
    },
    {
        id: 7,
        name: 'Bhaji',
        price: 59.99,
        imageUrl: 'bBhaji.PNG',
        options: ['Begun','Korola','Potol'],
    },
    {
        id: 8,
        name: 'Mixed Salad',
        price: 250.00,
        imageUrl: 'salad.PNG',
        options: ['Protein Salad','Cashewnut Salad','Regular Salad'],
    },
];

const Page = () => {
    const toast = useToast()
    const [selectedOptions, setSelectedOptions] = useState(
        items.map(() => '')
      );
    return (
        <ChakraProvider>
        <div className="container mx-auto">
        <Tabs isFitted={true} variant='soft-rounded' colorScheme='yellow'>
            <TabList>
                <Tab>Breakfast</Tab>
                <Tab>Lunch</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-4">Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item,index) => (
                    <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                        <div className="w-full h-64 overflow-hidden">
                        <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="object-cover h-full w-full"
                        />
                        </div>
                        <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                        <p className="text-green-600 font-semibold mt-2">৳{item.price.toFixed(2)}</p>
                        <div className='flex justify-between'>
                        <button onClick={() =>
                            toast({
                            title: 'Added to Cart.',
                            status: 'success',
                            duration: 2000,
                            isClosable: true,
                            })
                        } className="bg-blue-500 text-white py-2 px-4 rounded mt-2">Add to Cart</button>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            {selectedOptions[index] || 'Select an Option'}
                            </MenuButton>
                            <MenuList>
                            {item.options.map((option, optionIndex) => (
                                <MenuItem key={index}onClick={() => {
                                    const newSelectedOptions = [...selectedOptions];
                                    newSelectedOptions[index] = option;
                                    setSelectedOptions(newSelectedOptions);
                                }}>
                                    {option}
                                </MenuItem>
                            ))}
                            </MenuList>
                        </Menu>
                        </div>
                    </div>
                ))}
            </div>
        </div>
                </TabPanel>
                <TabPanel>
                <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-4">Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {itemsL.map((item,index) => (
                    <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                        <div className="w-full h-64 overflow-hidden">
                        <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="object-cover h-full w-full"
                        />
                        </div>
                        <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                        <p className="text-green-600 font-semibold mt-2">৳{item.price.toFixed(2)}</p>
                        <div className='flex justify-between'>
                        <button onClick={() =>
                            toast({
                            title: 'Added to Cart.',
                            status: 'success',
                            duration: 2000,
                            isClosable: true,
                            })
                        } className="bg-blue-500 text-white py-2 px-4 rounded mt-2">Add to Cart</button>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            {selectedOptions[index] || 'Select an Option'}
                            </MenuButton>
                            <MenuList>
                            {item.options.map((option, optionIndex) => (
                                <MenuItem key={index}onClick={() => {
                                const newSelectedOptions = [...selectedOptions];
                                newSelectedOptions[index] = option;
                                setSelectedOptions(newSelectedOptions);
                                }}>
                                    {option}
                                </MenuItem>
                            ))}
                            </MenuList>
                        </Menu>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            </TabPanel>
            </TabPanels>
        </Tabs>
        </div>
        
        

        <div className="container mx-auto p-4 bg-black">
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
    </div>
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
        

        </ChakraProvider>


        
    )
}

export default Page
