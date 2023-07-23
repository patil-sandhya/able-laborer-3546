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
    const [sortOn, setSortOn] = useState('Productprice')
    const [sortBy, setSortBy] = useState("asc")
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
        let pages= await res.headers.get(`X-Total-Count`)
        let total = Math.floor(pages/numOfData)
        console.log(total)
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
          Welcome to cheers
        </Heading>
        <Text textAlign="center">This is the paragraph with some content.</Text>
        <Divider my="1rem" />
        
      </Flex>

      {/* Select Option and Data Section */}
      <Flex>
        {/* 30% Left Section */}
        <Box flex="1" p="1rem">
          <Select placeholder="Sort On" size="2xl" onChange={(e) => setSortOn(e.target.value)}>
          <option value='rating'>Rating</option>
          <option value='productPrice'>Price Starts From</option>
          </Select>
        <div style={{marginTop:"20px"}}>
            <Select placeholder="Sort By" size="2xl" onChange={(e) => setSortBy(e.target.value)}>
            <option value='asc'>Ascending</option>
              <option value='desc'>Descending</option>
            </Select>
        </div>
        </Box>

        {/* 70% Right Section */}
        <Box flex="3" p="1rem">
            {/* Product Cards */}
            <Grid
              templateColumns="repeat(2, 1fr)" // Display two cards in a row
              gap="2rem" // Add some gap between the cards
              justifyContent="center" // Center the cards horizontally
            > 
          {
            state.data.map((item)=>(
              <WineCard key={item.id} {...item} />
            ))
           }
           </Grid>
           </Box>
      </Flex>

      {/* Rounded Button Section */}
      <Flex justify="center" mt="2rem">
      <Pagination totalPage={page} handlePage={handlePage} />
      </Flex>
    </Box>
  );
};

export default Wine;

