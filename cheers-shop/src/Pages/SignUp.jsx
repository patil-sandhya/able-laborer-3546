import React from "react";
import { Box, Flex, Input, Button, FormControl, FormLabel, Stack, Text,Center } from "@chakra-ui/react";

const SignUpForm = () => {
  return (
    <Flex py="90px" px="70px">
      {/* Left Section - Form */}
      <Box flex="1" pr="70px">
      <h1>Sign Up</h1>
      <form>
      <Stack spacing={4}>
        <FormControl id="name">
          <FormLabel fontSize="2xl">Name</FormLabel>
          <Input type="text" fontSize="2xl" />
        </FormControl>
        <FormControl id="email">
          <FormLabel fontSize="2xl">Email</FormLabel>
          <Input type="email" fontSize="2xl" />
        </FormControl>
        <FormControl id="address">
          <FormLabel fontSize="2xl">Address</FormLabel>
          <Input type="text" fontSize="2xl" />
        </FormControl>
        <FormControl id="mobile">
          <FormLabel fontSize="2xl">Mobile No</FormLabel>
          <Input type="text" fontSize="2xl" />
        </FormControl>
        <FormControl id="password">
          <FormLabel fontSize="2xl">Password</FormLabel>
          <Input type="password" fontSize="2xl" />
        </FormControl>
        <Button colorScheme="teal" type="submit">
          Sign Up
        </Button>
      </Stack>
    </form>
      </Box>

      {/* Right Section - "Already have an account? Login" */}
      <Box flex="1" bg="gray.200">
      <Center h="100%">
        <Box textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" mb="2rem">
            Already have an account?
          </Text>
          <Button colorScheme="blue">Login</Button>
        </Box>
      </Center>
    </Box>
    </Flex>
  );
};

export default SignUpForm;
