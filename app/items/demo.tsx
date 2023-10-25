'use client'

import React, { useState } from 'react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"

interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

// Sample list of items
const items: Item[] = [
    {
        id: 1,
        name: 'Item 1',
        description: 'Description for Item 1',
        price: 10.99,
        imageUrl: 'item1.jpg',
    },
    {
        id: 2,
        name: 'Item 2',
        description: 'Description for Item 2',
        price: 15.99,
        imageUrl: 'item2.jpg',
    },
    // Add more items as needed
];


const page = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-4">Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                        <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="object-contain h-32 w-full"
                        />
                        <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                        <p className="text-green-600 font-semibold mt-2">${item.price.toFixed(2)}</p>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page