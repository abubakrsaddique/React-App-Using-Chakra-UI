import React from 'react';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import "./header.css";

const Header = () => {
  return (
    <Box bg="#3a0ca3" color="white" p={2} position="absolute" top={0} left={0} w="100%">
      <Flex justify="space-between" align="center">
        <Flex align="center">
          <Icon as={MdLocationOn} w={5} h={5} ml="55px"/>
          <Text ml={1} fontSize="14px">Rezilla, 18 Grattan St, Brooklyn</Text>
        </Flex>

        <Flex align="center"  mr="50px">
          <Flex align="center" >
            <Icon as={MdPhone} w={5} h={5} />
            <Text ml="10px" fontSize="14px">+1 206-214-229</Text>
          </Flex>
          <Flex align="center" ml={4} mr={4}>
            <Icon as={MdEmail} w={5} h={5} />
            <Text ml="10px" fontSize="14px">support@rezilla.com</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
