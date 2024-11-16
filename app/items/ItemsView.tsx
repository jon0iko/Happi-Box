'use client'
import React from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { items, itemsL } from './items';
import { Item, ItemL } from './items';
import {useState} from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Button } from "@chakra-ui/react"
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


const ItemsView = ({items}:any) => {
    const toast = useToast()
    const [selectedOptions, setSelectedOptions] = useState(
        items.map(() => '')
      );
  return (
    <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-4">Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item:any,index:any) => (
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
                            {item.options.map((option:any, optionIndex:any) => (
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
  )
}

export default ItemsView