import React from "react";
import { Box, Flex, Heading, Text, Divider, Icon, Select, Button,Grid } from "@chakra-ui/react";
import { wineReducer, initState } from "../Reducer/WineReducer";
import { useEffect, useReducer, useState } from "react";
import Pagination from "../Components/Pagination";
import { getWine } from "../utils/api";
import WineCard from "../Components/WineCard";

const Wine = () => {
    const [state, dispatch] = useReducer(wineReducer,initState)
    
    const [numOfData, setNumof] = useState(4)
    const [sortOn, setSortOn] = useState('productPrice')
    const [sortBy, setSortBy] = useState("1")
    const [page, setPage] = useState(1) 
    const [pageNum, setPageNum] = useState(1)
  
    const handlePage= (num)=>{
      setPageNum(num)
      console.log(num)
    }
  
    const callgetRestaurants = async()=>{
      try {
        
        dispatch({
          type:"FETCH_LOADING"
        })
        let res = await getWine({pageNum,numOfData,sortOn,sortBy})
        let data = await (res.data)
        //let pages= await res.headers.get(`X-Total-Count`)
        let total = Math.floor(24/numOfData)
        console.log(res)
        setPage(total)
      dispatch({
        type:"FETCH_SUCCESS",
        payload:{
          data,
          total
        }
      })
        console.log(data)
      } catch (error) {
        dispatch({
          type:"FETCH_FAILURE"
        })
        console.log(error)
      }
      
    }
    useEffect(()=>{
      callgetRestaurants()
    },[numOfData,sortBy,sortOn,page,pageNum])
  
    if(state.loading){
      return <h1>Loading...</h1>
    }
    if(state.err){
      return <h1>Something went wrong...</h1>
    }
  return (
    <Box p="2rem">
      {/* Welcome Section */}
      <Flex justify="center" direction="column" alignItems="center" mb="2rem">
        <Heading as="h1" size="xl" textAlign="center">
        Wine Exploration Zone: 
        </Heading>
        <Text textAlign="center">Where Every Sip Tells a Story...</Text>
        <Divider my="1rem" />
        
      </Flex>

      {/* Select Option Section */}
      <Flex>
        {/* 30% Left Section */}
        <Box flex="1" p="1rem">
          <Select placeholder="Sort On" size="2xl" onChange={(e) => setSortOn(e.target.value)}>
          <option value='rating'>Rating</option>
          <option value='productPrice'>Price </option>
          </Select>
        <div style={{marginTop:"20px"}}>
            <Select placeholder="Sort By" size="2xl" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value='1'>Ascending</option>
              <option value='-1'>Descending</option>
            </Select>
        </div>
        </Box>

        {/* Product  Section */}
        <Box flex="3" p="1rem">
            {/* Product Cards */}
            <Grid
              templateColumns="repeat(2, 1fr)" 
              gap="2rem" 
              justifyContent="center" 
            > 
          {
            state.data.map((item)=>(
              <WineCard key={item.id} {...item} />
            ))
           }
           </Grid>
           </Box>
      </Flex>

      {/* Pagination Section */}
      <Flex justify="center" mt="2rem">
      <Pagination totalPage={page} handlePage={handlePage} />
      </Flex>
    </Box>
  );
};

export default Wine;

