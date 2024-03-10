import React, { useState,useContext  } from "react";
import { Box, Flex,InputRightElement, Input, Button, FormControl, FormLabel, Stack, Text,Center, InputGroup } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { AuthContext } from "../Context/AuthContextProvide";

const SignUpForm = () => {
  const {isAuth} = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const [data,setData] = useState({
    name:"",
    email:"",
    password:"",
    address:"",
    mobile:""
  })

  const {formData,setformData,handleUserLogin} = useContext(AuthContext)
  const toast = useToast()
    const handleLoginSubmit = (e)=>{
      handleUserLogin(e)
    }
  const [login, setLogin] = useState(isAuth)

  let checkRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[#@$%^&*!])(?=.{8})/

  const handleSubmit = async(e)=>{
    e.preventDefault()
    
    if(checkRegex.test(data.password)){
      console.log(data)
     await fetch("https://cheersapi.onrender.com/user/register"
     , {
        method : "POST",
        body : JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
          },
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
       if(res.msg === "User already exist, please login")
       {
        toast({
          title: 'User already exist',
          description: "User already exist, please login",
          status: 'error',
          duration: 1500,
          isClosable: true,
          position:"top"
        })
       }
     if (res.msg === "New user registered")
      {
        toast({
          title: 'Account created.',
          description: "We've created your account for you. Please Login",
          status: 'success',
          duration: 4500,
          isClosable: true,
          position:"top"
        })
        setLogin(true)
        //setTimeout(()=>{ nav("/login",{replace:true})},1000)
      }
    })
    }else{
          toast({
            title: 'Invalid Password',
            description: "Password length is minimum 8, it includes at least one Uppercase letter, special character & number",
            status: 'error',
            duration: 5500,
            isClosable: true,
            position:"top"
          })

        }
   // localStorage.setItem("user",JSON.stringify(data))
    // toast({
    //   title: 'Account created.',
    //   description: "We've created your account for you.",
    //   status: 'success',
    //   duration: 9000,
    //   isClosable: true,
    // })
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
          <InputGroup>
          <Input type={showPassword ? 'text' : 'password'} fontSize="2xl" onChange={(e)=> setformData({...formData, password:e.target.value})} required/>
          <InputRightElement h={'full'}>
          <Button 
            variant={'lightMode'}
            onClick={() =>
              setShowPassword((showPassword) => !showPassword)
            }>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
        </InputGroup>
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
          <InputGroup>
          <Input type={showPassword ? 'text' : 'password'} fontSize="2xl" onChange={(e)=> setData({...data, password:e.target.value})} required/>
          <InputRightElement h={'full'}>
          <Button 
            variant={'lightMode'}
            onClick={() =>
              setShowPassword((showPassword) => !showPassword)
            }>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
        </InputGroup>
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
