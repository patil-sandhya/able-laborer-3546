import React, { useState,useContext  } from "react";
import { Box, Flex, Input, Button, FormControl, FormLabel, Stack, Text,Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../Context/AuthContextProvide";

const SignUpForm = () => {
  const {isAuth} = useContext(AuthContext)

  const [data,setData] = useState({
    name:"",
    email:"",
    password:"",
    address:"",
    mobile:""
  })

  const {formData,setformData,handleGetData} = useContext(AuthContext)
    const handleLoginSubmit = (e)=>{
        handleGetData(e)
    }
  const [login, setLogin] = useState(isAuth)

  const handleSubmit = (e)=>{
    e.preventDefault()
    //console.log(data)
    localStorage.setItem("user",JSON.stringify(data))
   
  }
  return (
    
    <Flex py="90px" px="70px">
    {
      (login)? <Box flex="1" pr="70px" marginBottom="200px">
      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit}>
      <Stack spacing={4}>
        <FormControl id="email">
          <FormLabel fontSize="2xl">Email</FormLabel>
          <Input type="email" fontSize="2xl" onChange={(e)=> setformData({...formData, email:e.target.value})} required/>
        </FormControl>
        <FormControl id="password">
          <FormLabel fontSize="2xl">Password</FormLabel>
          <Input type="password" fontSize="2xl" onChange={(e)=> setformData({...formData, password:e.target.value})} required/>
        </FormControl>
        <Button type="submit" style={{height:"45px", fontSize:"15px", backgroundColor:"rgb(119, 18, 88)", color:"white"}}>
          Login
        </Button>
      </Stack>
    </form>
      </Box>:
      <Box flex="1" pr="70px">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <FormControl id="name">
          <FormLabel fontSize="2xl">Name</FormLabel>
          <Input type="text" fontSize="2xl" onChange={(e)=> setData({...data, name:e.target.value})} required/>
        </FormControl>
        <FormControl id="email">
          <FormLabel fontSize="2xl">Email</FormLabel>
          <Input type="email" fontSize="2xl" onChange={(e)=> setData({...data, email:e.target.value})} required/>
        </FormControl>
        <FormControl id="address">
          <FormLabel fontSize="2xl">Address</FormLabel>
          <Input type="text" fontSize="2xl" onChange={(e)=> setData({...data, address:e.target.value})} required/>
        </FormControl>
        <FormControl id="mobile">
          <FormLabel fontSize="2xl">Mobile No</FormLabel>
          <Input type="text" fontSize="2xl" onChange={(e)=> setData({...data, mobile:e.target.value})} required />
        </FormControl>
        <FormControl id="password">
          <FormLabel fontSize="2xl">Password</FormLabel>
          <Input type="password" fontSize="2xl" onChange={(e)=> setData({...data, password:e.target.value})} required/>
        </FormControl>
        <Button type="submit" style={{height:"45px", fontSize:"15px", backgroundColor:"rgb(119, 18, 88)", color:"white"}}>
          Sign Up
        </Button>
      </Stack>
    </form>
      </Box>
    }
      {/* Left Section - Form */}
      

      {/* Right Section - "Already have an account? Login" */}
      <Box flex="1" bg="rgb(249, 248, 251)">
      <Center h="100%">
        <Box textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" mb="2rem">
           {
            (login)? "Create new account?": "Already have an account?"
           } 
          </Text>
          <Button onClick={()=> setLogin(!login)} style={{backgroundColor:"rgb(119, 18, 88)", color:"white"}} colorScheme="blue" size="lg">
          {
            (login)? "Sign Up": "Login"
           }
          </Button>
        </Box>
      </Center>
    </Box>
    </Flex>
  );
};

export default SignUpForm;
