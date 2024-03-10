import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Button, useEditable } from "@chakra-ui/react";
import CartItemCard from './CartItemCard';
import ShopNowModal from './ShopNowModal';

const Cart = () => {
    let data = JSON.parse(localStorage.getItem("cart"))|| []
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [dataChange, setDataChange ] = useState(false)
    let initTotal = 0
    function totalBill(){
      if(data.length > 0){
        for(let i=0; i<data.length; i++){
          initTotal+=data[i].qty * data[i].price
        }
      }
      setTotal(initTotal)
    }
    
    //console.log(initTotal)
    let [total, setTotal] = useState(0)
    const handleDelete = (id)=>{
      let res = data.filter((item)=>{
        return item.id != id
      })
      console.log("dlt",res)
      data=res
        setDataChange(!dataChange)
        localStorage.setItem("cart",JSON.stringify(data))
    }
    const handleQty = (id,val)=>{
     // console.log(id,val)
      
        let res = data.map((item)=>{
          if (item.id === id) {
            return { ...item, qty: item.qty + (val), totalPrice: item.price * (item.qty + val) };
          }
          return item;
        })
        data=res
        setDataChange(!dataChange)
        localStorage.setItem("cart",JSON.stringify(data))
        //console.log("res", res)
    }
    useEffect(()=>{
      totalBill()
    },[data,dataChange])

    const shopNow = ()=>{
      setIsModalOpen(true);
    }
    const onCloseModal = () => {
      setIsModalOpen(false);
    };
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
          <h3 style={{marginLeft:"1px"}}>Cart | {data.length}</h3>
            {
              data.map((item)=>(
                  <CartItemCard handleDelete={handleDelete} handleQty={handleQty} qty={item.qty} key={item.id} id={item.id}/>
              ))
            }
          </Box>
    
          {/* Right Section */}
          <Box flex="1" p="1rem">
          <Flex
              justify="flex-start" 
              alignItems="flex-start" 
              flexDirection="column"
          ><Text fontSize="3xl" fontWeight="bold" mb="1rem">
          Price Details 
      </Text>
              <Text fontSize="3xl" fontWeight="bold" mb="1rem">
                  Total Product Price - <Box as="span" display="inline-block" minW="50px" /> {total}
              </Text>
              <Box borderBottom="1px solid black" width="80%" my="0.5rem" />
              <Text fontSize="3xl" fontWeight="bold" mb="1rem">
              Order Total - <Box as="span" display="inline-block" minW="50px" /> {total}
          </Text>
              <Button  style={{height:"45px", fontSize:"15px", backgroundColor:"rgb(119, 18, 88)", color:"white", marginLeft:"100px"}} onClick={shopNow}>Continue</Button>
              <ShopNowModal isOpen={isModalOpen} total={total} item={data.length} onClose={onCloseModal} />
              
          </Flex>
      </Box>
      
        </Flex>
      );
}

export default Cart
