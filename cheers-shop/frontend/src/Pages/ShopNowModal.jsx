import React from 'react'
import { useToast } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const ShopNowModal = ({ isOpen, onClose, total, item }) => {
    let data = JSON.parse(localStorage.getItem("user"))||[]
    const toast = useToast()
    const navigateHome = useNavigate()
    const handleshopNow = ()=>{
        toast({
            title: 'Thank You!',
            description: "Your order if confirm",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        navigateHome("/")
    }

    return (
        <>
          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Order Details</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>Name: {data.name}</p>
                <p>Address: {data.address}</p>
                <p>Email: {data.email}</p>
                <p>Mobile: {data.mobile}</p>
                <p>Total : {total}</p>
                <p>Items : {item}</p>
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant='ghost' onClick={handleshopNow}>Shop Now</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}

export default ShopNowModal
