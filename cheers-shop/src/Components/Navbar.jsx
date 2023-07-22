import React from 'react'
import { Box,Link, Flex, Spacer, IconButton, useDisclosure, VStack, HStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Image } from '@chakra-ui/react';
import Logo from '../Logo2.png'
const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
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
    <h1>Welcome</h1>
    <Spacer />

    <Box display={{ base: isOpen ? "block" : "none", md: "block" }}>
      <HStack spacing={4}>
        <a href="#">Login</a>
        <a href="/sign-up">Sign Up</a>
        <a href="/">Home</a>
        <a href="/wine">Wine</a>
        <a href="#">Cart</a>
        <a href="#">Contact</a>
      </HStack>
    </Box>
  </Flex>
    </>
  )
}

export default Navbar
