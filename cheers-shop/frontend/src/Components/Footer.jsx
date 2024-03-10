import React from "react";
import { Box, Flex, Text, Link, Icon} from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <>
    <Box bg="rgb(85, 21, 72)" color="white" py="50px">
      <Flex justify="space-between" maxW="1200px" mx="auto" px="20px">
        {/* Address Section  */}
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb="1rem">
           Address
          </Text>
          <Text>
          Cheers! Shop, Delhi <br></br>
          Gat 36/2, Naraina Village, Delhi 422222
          </Text>
        </Box>

        {/* Company Section  */}
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb="1rem">
          Company
          </Text>
          
          <p><a href="projects.html">Our Work</a></p>
          <p><a href="">Community</a></p>
          <p><a href="">Career</a></p>
        </Box>

        {/* Follow Section  */}
        <Box>
          <Text fontSize="2xl" fontWeight="bold"  mb="2rem">
          Follow Us
          </Text>
          <p><a href="https://www.instagram.com/">Instagram</a></p>
          <p><a href="https://twitter.com/">Twitter</a></p>
        </Box>

        {/*Rights Section  */}
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb="1rem">
          Cheers! Shop © 2024. All rights reserved.
          </Text>
          
        </Box>
      </Flex>
    </Box>
    </>
  );
};

export default Footer;
