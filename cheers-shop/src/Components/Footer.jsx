import React from "react";
import { Box, Flex, Text, Link, Icon} from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <>
    <Box bg="gray.800" color="white" py="50px">
      <Flex justify="space-between" maxW="1200px" mx="auto" px="20px">
        {/* Section 1 */}
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb="1rem">
           Address
          </Text>
          <Text>
          Cheers! Shop, Delhi <br></br>
          Gat 36/2, Naraina Village, Delhi 422222
          </Text>
        </Box>

        {/* Section 2 */}
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb="1rem">
            Section 2
          </Text>
         
        </Box>

        {/* Section 3 */}
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb="1rem">
            Section 3
          </Text>
          <Text>
            Content for section 3 goes here.
          </Text>
        </Box>

        {/* Section 4 */}
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb="1rem">
          Cheers! Shop © 2023. All rights reserved.
          </Text>
          
        </Box>
      </Flex>
    </Box>
    </>
  );
};

export default Footer;
