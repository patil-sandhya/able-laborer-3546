import React from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import Product from "./Product";
const Home = () => {
  return (
    <>
    <Flex
      id="top"
      bg="rgb(249, 248, 251)" 
      color="black"
      py={{ base: "4rem", lg: "4rem", xl: "4rem" }}
      margin="20px"
      flexDirection={{ base: "column", lg: "row" }}
    >
      {/* Left Section */}
      <Box
        flex={{ base: "1", lg: "1", xl: "1" }}
        width={{ base: "100%", lg: "50%", xl: "50%" }}
        mb={{ base: "2rem", lg: "0", xl: "0" }}
        order={{ base: 2, lg: 1 }}
      >
        <Image src="https://cannonriverwinery.com/wp-content/uploads/2014/08/Gunflint-Red.jpg" alt="Your Alt Text" w="70%" h="650px" paddingLeft="4rem" />
      </Box>

      {/* Right Section */}
      <Box
        flex={{ base: "1", lg: "1", xl: "1" }}
        width={{ base: "100%", lg: "50%", xl: "50%" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign={{ base: "center", lg: "left" }}
        order={{ base: 1, lg: 2 }}
        p={{ base: "1rem", lg: "2rem" }}
      >
        <Box textAlign="center">
          <Text fontSize={{ base: "2xl", lg: "3xl" }} fontWeight="bold" mb="1rem">
           <h1> Welcome to our Cheers! Shop </h1>
          </Text>
          <Text fontSize={{ base: "lg", lg: "2xl" }}>
          We bring you a delightful collection of exquisite wines from around the world. Step into the world of rich flavors and captivating aromas as you explore our carefully curated selection of reds, whites, rosés, and more. Whether you're an experienced connoisseur or a budding enthusiast, our expert sommeliers are here to guide you through a memorable wine-tasting journey. Discover the perfect accompaniment for your special occasions or simply indulge in the joy of savoring the finest blends. Join us in celebrating the art of winemaking, where every bottle tells a unique story, and every sip leaves an indelible impression. Cheers to an unforgettable experience at our Cheers! Shop.
          </Text>
        </Box>
      </Box>
    </Flex>
    <Product />
    </>
  );
};

export default Home;
