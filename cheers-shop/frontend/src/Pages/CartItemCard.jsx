import React, { useState, useEffect } from 'react'
import { Card,CardBody,Image,Stack,Heading,Text,Button,HStack } from "@chakra-ui/react";

const CartItemCard = (props) => {
    //console.log(props.id, "*********")
    const [productData,setData ]= useState({})
   

    const getProducts = async (id)=>{
        try {
          let res = await fetch(`https://api-cheers-ltda.onrender.com/drinks/${id}`)
          let data = await res.json()
          //console.log(data)
          setData(data)
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(()=>{
        getProducts(props.id)
        //props.setTotalFun(qtyData[props.id]*productData.productPrice)
      },[])
      
     
  return (
    <>
    <Card maxW="2xl" m={4} data-testid="restaurant-card">
    <CardBody>
      <HStack align="stretch">
        {/* Add Image here */}
        <Image style={{height:"400px"}} src={productData.imageUrlTwo} alt='img'/>
        <Stack mt="6" spacing="3">
        <Heading as='h4' size='md'>{productData.productName}
      </Heading>
      <Text>Price : {productData.productPrice}</Text>
      <p>Qty: {props.qty}</p>
          {/* Add Heading and Text tags here */}
          <HStack spacing="6">
            {/* Add EDIT Link and DELETE Button here */}
           
            <Button onClick={()=> props.handleQty(props.id,1)}  style={{height:"30px", fontSize:"15px", backgroundColor:"rgb(119, 18, 88)", color:"white"}} >+</Button>
            <Button onClick={()=> props.handleQty(props.id,-1)} style={{height:"30px", fontSize:"15px", backgroundColor:"rgb(119, 18, 88)", color:"white"}} isDisabled={props.qty <= 1}>-</Button>
            <Button onClick={()=> props.handleDelete(props.id)}  style={{height:"30px", fontSize:"15px", backgroundColor:"rgb(119, 18, 88)", color:"white"}} >Delete</Button>
          </HStack>
        </Stack>
      </HStack>
    </CardBody>
  </Card>
    </>
  )
}

export default CartItemCard
