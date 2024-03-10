import React from 'react'
import { Box,Flex, Spacer, IconButton, useDisclosure, HStack, Link } from "@chakra-ui/react";
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
    width="full"
    padding="1rem"
    paddingLeft="2rem"
    paddingRight="2rem"    
    bg="rgb(119, 18, 88)"
    color="white"
    m="0px"
  
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
      src={Logo}      
      display={{ base: 'none', md: 'block' }}
      alt='Logo'
      onClick={handleLogo}
    />
      </HStack>
    </Box>
    <Spacer />
    {
      (isAuth) && <h2>Welcome {userName.name}</h2>
    }
    
    <Spacer />

    <Box display={{ base: isOpen ? "block" : "none", md: "block" }} m={0} fontSize="2xl" >
      <HStack spacing={4} >
        <Link href="/" _hover={{ fontWeight: 'bold',color:"rgb(119, 18, 88)", backgroundColor: 'white', textDecoration:"none", borderRadius:"5px"}} mr={1} p={2}>Home</Link>
        <Link href="/wine" _hover={{ fontWeight: 'bold',color:"rgb(119, 18, 88)", backgroundColor: 'white', textDecoration:"none", borderRadius:"5px"}} mr={1} p={2}>Wine</Link>
        <Link href="/cart" _hover={{ fontWeight: 'bold',color:"rgb(119, 18, 88)", backgroundColor: 'white', textDecoration:"none", borderRadius:"5px"}} mr={1} p={2}>Cart</Link>
        
        {
          (isAuth) ? <Link  _hover={{ fontWeight: 'bold',color:"rgb(119, 18, 88)", backgroundColor: 'white', textDecoration:"none", borderRadius:"5px"}} mr={1} p={2} href="/" onClick={handleLogout}>Logout</Link>:<Link  _hover={{ fontWeight: 'bold',color:"rgb(119, 18, 88)", backgroundColor: 'white', textDecoration:"none", borderRadius:"5px"}} mr={1} p={2} href="/sign-up">Login/SignUp</Link>
        }
      </HStack>
    </Box>
  </Flex>
    </>
  )
}

export default Navbar
