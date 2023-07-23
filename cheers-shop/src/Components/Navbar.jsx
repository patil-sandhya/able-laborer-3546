import React, {useContext} from 'react'
import { Box,Link, Flex, Spacer, IconButton, useDisclosure, VStack, HStack, Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Image } from '@chakra-ui/react';
import { AuthContext } from '../Context/AuthContextProvide';
import Logo from '../Logo2.png'
const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const isAuth= localStorage.getItem("auth")
      let userName = JSON.parse(localStorage.getItem("user")) || []
    
      const handleLogout = ()=>{
        localStorage.removeItem("auth");
      }
  return (
    <>
    <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    padding="1rem"
    paddingLeft="2rem"
    paddingRight="2rem"    bg="rgb(119, 18, 88)"
    color="white"
  >
    <IconButton
      display={{ base: "block", md: "none" }}
      onClick={onToggle}
      icon={<HamburgerIcon />}
      aria-label="Toggle navigation"
      size="lg"
    />

    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <HStack
        spacing={4}
        alignItems="center"
        justify={{ base: "center", md: "flex-start" }}
      >
      <Image
      w="100%" h="70px" 
      objectFit='cover'
      src={Logo}      alt='Logo'
    />
      </HStack>
    </Box>
    <Spacer />
    {
      (isAuth) && <h1>Welcome {userName.name}</h1>
    }
    
    <Spacer />

    <Box display={{ base: isOpen ? "block" : "none", md: "block" }}>
      <HStack spacing={4}>
      {
        (isAuth) ? <a href="/" onClick={handleLogout}>Logout</a>:<a href="/sign-up">Login/Sign Up</a>
      }
        
        <a href="/">Home</a>
        <a href="/wine">Wine</a>
        <a href="/cart">Cart</a>
      </HStack>
    </Box>
  </Flex>
    </>
  )
}

export default Navbar
