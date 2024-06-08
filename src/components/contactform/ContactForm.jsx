import React from "react";
import { Box, Button, Heading, Input, Textarea, VStack, Divider, Center } from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginLeft={{ base: "0", md: "47%" }} 
      marginTop={{ base: "65%", md: "-208px" }} 
    >
      <Box
        bg="white"
        borderRadius="30px"
        boxShadow="10px 30px 50px rgba(0, 0, 0, 0.05)"
        height="auto" 
        maxWidth="420px"
        width={{ base: "100%", md: "420px" }}
        padding="29px 20px"
      >
        <VStack spacing="20px">
          <Heading as="h1" fontSize="16px" color="rgb(58, 12, 163)" fontWeight="500" textAlign="center">
            Contact Us Now
          </Heading>
          <Center>
            <Divider width="344px" borderColor="rgb(58, 12, 163)" borderWidth="1px" />
          </Center>
          <Divider width="111%"/>
          <VStack spacing="15px" width="100%" mt="15px">
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required
              bg="hsla(0, 0%, 83%, 0.2)"
              border="none"
              borderRadius="20px"
              height="59px"
              paddingLeft="20px"
              paddingRight="25px"
              _focus={{ outline: "none" }}
            />
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required
              bg="hsla(0, 0%, 83%, 0.2)"
              border="none"
              borderRadius="20px"
              height="59px"
              paddingLeft="20px"
              paddingRight="25px"
              _focus={{ outline: "none" }}
            />
            <Textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              bg="hsla(0, 0%, 83%, 0.2)"
              border="none"
              borderRadius="20px"
              padding="25px 20px"
              resize="none"
              height="150px"
              _focus={{ outline: "none" }}
            />
            <Button
              type="submit"
              bg="rgb(58, 12, 163)"
              color="white"
              borderRadius="50px"
              fontSize="16px"
              fontWeight="500"
              height="60px"
              width="100%"
              _hover={{ bg: "#6d28d9" }}
            >
              Submit
            </Button>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default ContactForm;
