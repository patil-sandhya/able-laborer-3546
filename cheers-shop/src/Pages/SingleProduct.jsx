import React from "react";
import { Box, Flex, Image, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate, useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useToast } from '@chakra-ui/react'

const SingleProduct = () => {
  let [productData,setData] = useState({})
  let navigateCart = useNavigate()
  const param = useParams()
  const toast = useToast()

  const handleCartData = ()=>{
    let cartData = JSON.parse(localStorage.getItem("cart")) || []
  let idData = JSON.parse(localStorage.getItem("idData")) || []
  if(idData.includes(productData.id)){ 
    toast({
      title: 'In Cart.',
      description: "Product is already added.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    navigateCart("/cart")
  }else{
    let newObj = {
      "id":productData.id,
      "price":productData.productPrice,
      "qty":1,
      "totalPrice":productData.productPrice
    }
    idData.push(productData.id)
    cartData.push(newObj)
    localStorage.setItem("cart", JSON.stringify(cartData))
    localStorage.setItem("idData", JSON.stringify(idData))

    toast({
      title: 'Added',
      description: "Product Added To Cart !",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    navigateCart("/cart")
  }
   
  }
  const getProducts = async (id)=>{
    try {
      let res = await fetch(`https://api-cheers-ltda.onrender.com/drinks/${id}`)
      let data = await res.json()
      console.log(data)
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getProducts(param.id)
  },[param.id])
  return (
    <Flex
      justify="center"
      align="center"
      minHeight="100vh"
      flexDirection={{ base: "column", md: "row" }}
      bg="rgb(249, 248, 251)"
    >
      {/* Left Section */}
      <Box flex="1" p="1rem" textAlign="center">
        <Image
          src={productData.imageUrlTwo} // Replace with the image source
          alt="Product Image"
          maxH="900px"
          mx="auto"
          mb="2rem"
          
        />
      </Box>

      {/* Right Section */}
      <Box flex="1" p="1rem">
        <Heading as="h2" size="lg" mb="1rem">
          {productData.productName}
        </Heading>
        <Text fontSize="xl" fontWeight="bold" mb="1rem">
          Price: {productData.productPrice}
        </Text>
        <Button mb="1rem" style={{height:"45px", fontSize:"15px", backgroundColor:"rgb(119, 18, 88)", color:"white"}} onClick={handleCartData}>
          Add to Cart
        </Button>
        <Text mb="1rem">Rating: {productData.rating}</Text>
        <Text mb="2rem">
          {productData.prodDesc}
        </Text>
      </Box>
    </Flex>
  );
};

export default SingleProduct;
