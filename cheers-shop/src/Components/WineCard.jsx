import { Card,CardBody,Image,Stack,Heading,Link,Text,Button,VStack,HStack } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
function WineCard({productName,
  rating,
  imageUrlTwo,
  iconNamesTw,
  productPrice,
  productCode,
  imageUrlThr,
  id,}) {
    //console.log(imageUrlTwo)
    const toast = useToast()
const handleCartData = ()=>{
  let cartData = JSON.parse(localStorage.getItem("cart")) || []
  let idData = JSON.parse(localStorage.getItem("idData")) || []
  if(idData.includes(id)){ 
    toast({
      title: 'In Cart.',
      description: "Product is already added.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }else{
    let newObj = {
      "id":id,
      "price":productPrice,
      "qty":1,
      "totalPrice":productPrice
    }
    idData.push(id)
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
  }
 
}

const navigateSingleProduct = useNavigate()
const handleRedirect = ()=>{

  navigateSingleProduct(`/one-product/${id}`)
}
  return (
    <Card maxW="lg" m={4} data-testid="restaurant-card">
      <CardBody>
        <VStack align="stretch">
          {/* Add Image here */}
          <Image style={{height:"400px"}} src={imageUrlTwo} alt='img' onClick={handleRedirect}/>
          <Stack mt="6" spacing="3">
          <Heading as='h4' size='md'> Name : {productName}
        </Heading>
        <Text>Product Code : {productCode}</Text>
        <Text>Rating : {rating}</Text>
        <Text>Icon Name : {iconNamesTw} <Image src={imageUrlThr} style={{marginLeft:"120px"}} alt='img' /></Text>
        <Text>Price : {productPrice}</Text>

            {/* Add Heading and Text tags here */}
            <HStack spacing="6">
              {/* Add EDIT Link and DELETE Button here */}
             
              <Button  style={{height:"45px", fontSize:"15px", backgroundColor:"rgb(119, 18, 88)", color:"white", marginLeft:"100px"}} onClick={handleCartData}>Add To Cart</Button>
            </HStack>
          </Stack>
        </VStack>
      </CardBody>
    </Card>
  );
}

export default WineCard;

