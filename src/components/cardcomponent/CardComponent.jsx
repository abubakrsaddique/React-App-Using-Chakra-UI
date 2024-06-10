import React from 'react';
import { Box, Flex, Image, Heading } from '@chakra-ui/react';
import ImageSrc from '../../images/card2.png';

const CardComponent = () => {
  return (
    <Box marginTop={{ base: "0px", md: "-57px" }} marginLeft={{ base: "75px", md: "45%" }} >
      <Flex flexDirection={{ base: "column", md: "row" }} justifyContent="center" gridGap="50px" marginRight={{ base: "62px", md: "100px" }} marginTop={{base: "103%" , md:"0"}}>
        <Box width={{ base: "100%", md: "auto" }} gridColumn={{ base: "span 4", md: "span 2" }} display="flex" justifyContent="center">
          <Box
            background="white"
            borderRadius="50px"
            boxShadow="10px 30px 50px 0 rgba(0, 0, 0, 0.05)"
            flexShrink="0"
            height="100px"
            paddingLeft="24px"
            paddingRight="24px"
            alignItems="center"
            display="flex"
            data-aos="fade-right"
          >
            <Heading as="h1" fontSize={{ base: "16px", md: "20px" }} lineHeight={{ base: "24px", md: "28px" }} fontWeight="500" paddingLeft="8px">
              72k+ Happy <br />
              Customers
            </Heading>
          </Box>
        </Box>
        <Box mt={{base:"-20px" , md:"auto"}} width={{ base: "100%", md: "auto" }} gridColumn={{ base: "span 4", md: "span 2" }} display="flex" justifyContent="center">
          <Box
            background="white"
            borderRadius="50px"
            boxShadow="10px 30px 50px 0 rgba(0, 0, 0, 0.05)"
            flexShrink="0"
            height="100px"
            paddingLeft="24px"
            paddingRight="24px"
            display="flex"
            alignItems="center"
            data-aos="fade-left"
          >
            <Image src={ImageSrc} height="auto" maxWidth="100%" />
            <Heading as="h1" fontSize={{ base: "16px", md: "20px" }} lineHeight={{ base: "24px", md: "28px" }} fontWeight="500" paddingLeft="9px">
              200+ New <br />
              Listings Everyday!
            </Heading>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default CardComponent;
