import { Card,CardBody,Image,Stack,Heading,Link,Text,Button,VStack,HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function WineCard({productName,
  rating,
  productCode,
  productDescription,
  productImageHref,
  redWine,
  roseWine,
  southAfrica,
  italy,
  initials,
  imgFluidSrc2,
  imgFluidSrc3,
  imgFluidSrc4,
  imgFluidSrc5,
  id,}) {
    console.log(productName)
const handleDelete = ()=>{
  console.log("dd")
}
  return (
    <Card maxW="sm" m={4} data-testid="restaurant-card">
      <CardBody>
        <VStack align="stretch">
          {/* Add Image here */}
          <Image src={productImageHref} alt='img' />
          <Stack mt="6" spacing="3">
          <Heading as='h4' size='md'> Name : {productName}
        </Heading>
        <Text>Type : {redWine}</Text>
        <Text>Rating : {rating}</Text>
        <Text>Number of votes : {}</Text>
        <Text>Price Starts From : {}</Text>

            {/* Add Heading and Text tags here */}
            <HStack spacing="6">
              {/* Add EDIT Link and DELETE Button here */}
              <Link as={RouterLink} to={`/edit-restaurant/${id}`}>
              <Button>EDIT</Button>
              </Link>
              <Button onClick={handleDelete}>DELETE</Button>
            </HStack>
          </Stack>
        </VStack>
      </CardBody>
    </Card>
  );
}

export default WineCard;

