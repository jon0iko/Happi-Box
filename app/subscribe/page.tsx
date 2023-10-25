'use client'

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'

interface Props {
  children: React.ReactNode
}

function PriceWrapper(props: Props) {
  const { children } = props

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  )
}

export default function ThreeTierPricing() {
  return (
    <>
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Plans that fit your need
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
        Choose your subscription plan. Sit back, relax, and let Happi Box take care of your lunchtime adventures.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Daily
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                
              </Text>
              <Text fontSize="5xl" fontWeight="900">
              
              </Text>
              <Text fontSize="3xl" color="gray.500">
              Customized Pricing
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Breakfast
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Lunch
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Price varies based on selected items
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Get Started
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Weekly
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  ৳
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  2500
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /week
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Breakfast <br></br> (Parata, dal, vaji, suji, water)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Lunch <br></br> (Rice/polao, chicken/fish, beef, dal)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Enjoy a week of delicious meals for only 2500tk.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="red">
                  Get Started
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Monthly
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                ৳
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                8000
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Breakfast <br></br> (Parata, dal, vaji, suji, water)
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Lunch <br></br> (Rice/polao, chicken/fish, beef, dal)
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Get a whole month of culinary<br></br> delights for just 8000tk.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Get Started
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
    
    
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
      </>
  )
}