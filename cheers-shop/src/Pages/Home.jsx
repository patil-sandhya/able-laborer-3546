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
            Welcome to our Restaurant
          </Text>
          <Text fontSize={{ base: "lg", lg: "xl" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            lobortis lorem, eu tincidunt elit. Duis volutpat lectus id ipsum
            tempor, nec euismod elit sollicitudin. In fermentum fringilla dolor,
            ac consectetur urna varius in. Cras venenatis, nunc sit amet
            facilisis mattis, nisi massa vehicula arcu, in consequat purus ex in
            felis.
          </Text>
        </Box>
      </Box>
    </Flex>
    <Product />
    </>
  );
};

export default Home;
