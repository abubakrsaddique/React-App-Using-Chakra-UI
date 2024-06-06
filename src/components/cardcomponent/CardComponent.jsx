import React from 'react';
import { Box, Flex, Image, Heading } from '@chakra-ui/react';
import ImageSrc from '../../images/card2.png';

const CardComponent = () => {
  return (
    <Box marginTop="-60px" marginLeft="44%">
      <Flex justifyContent="center" gridTemplateColumns="repeat(4, minmax(0, 1fr))" gridGap="30px" marginRight="100px">
        <Box gridColumn="span 2 / span 2" display="flex" justifyContent="flex-end">
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
            <Heading as="h1" fontSize="20px" lineHeight="28px" fontWeight="500" paddingLeft="8px">
              72k+ Happy <br />
              Customers
            </Heading>
          </Box>
        </Box>
        <Box gridColumn="span 2 / span 2" display="flex" alignItems="center">
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
            <Heading as="h1" fontSize="20px" lineHeight="28px" fontWeight="500" paddingLeft="9px">
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
