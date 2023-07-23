import React from 'react'
import { Box,Flex, Spacer, IconButton, useDisclosure, HStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Image } from '@chakra-ui/react';
import Logo from '../Logo2.png'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const isAuth= localStorage.getItem("auth")
      let userName = JSON.parse(localStorage.getItem("user")) || []
      const navigateHome = useNavigate()
      const handleLogo = ()=>{
        navigateHome("/")
      }

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
      onClick={handleLogo}
    />
      </HStack>
    </Box>
    <Spacer />
    {
      (isAuth) && <h2>Welcome {userName.name}</h2>
    }
    
    <Spacer />

    <Box display={{ base: isOpen ? "block" : "none", md: "block" }} fontSize="2xl">
      <HStack spacing={4}>
        <a href="/" >Home</a>
        <a href="/wine">Wine</a>
        <a href="/cart">Cart</a>
        {
          (isAuth) ? <a href="/" onClick={handleLogout}>Logout</a>:<a href="/sign-up">Login/SignUp</a>
        }
      </HStack>
    </Box>
  </Flex>
    </>
  )
}

export default Navbar
