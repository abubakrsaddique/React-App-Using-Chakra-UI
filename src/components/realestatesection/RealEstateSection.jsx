import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import MySwiperComponent from "../myswipercomponent/MySwiperComponent";
import ContactForm from "../contactform/ContactForm";

const RealEstateSection = () => {
  return (
    <Box
      bgGradient="linear(180deg, rgba(76, 201, 240, 0), rgba(67, 97, 238, 0.3))"
      borderRadius="0 0 800px 800px"
      height={{ base: "800px", md: "760px" }} 
      width={{ base: "100%", md: "100%" }} 
      padding="0"
      margin="0"
    >
     <Box
  marginTop={{ base: "100px", md: "200px" }} 
  marginLeft={{ base: "25px", md: "85px" }} 
  width={{ base: "90%", md: "40%" }} 
>
  <VStack align="start" spacing="20px">
    <Heading as="h1" color="#4361ee" fontSize={{ base: "19px", md: "19px" }} fontWeight="500" letterSpacing="2.91px">
      REAL ESTATE
    </Heading>
    <Heading as="h2" color="#0b090a" fontSize={{ base: "57px", md: "57.3px" }} fontWeight="600" lineHeight={{ base: "65px", md: "65px" }}>
      Find a perfect home you love..!
    </Heading>
    <Text fontSize={{ base: "16px", md: "16px" }} width="100%">
      Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.
    </Text>
  </VStack>
</Box>

      <Box>
        <MySwiperComponent />
      </Box>
      <Box>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default RealEstateSection;
