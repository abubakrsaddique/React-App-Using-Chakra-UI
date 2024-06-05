import React from "react";
import { Box, Flex, Button, Text, Image, Icon, Link } from "@chakra-ui/react";
import { MdAccountCircle, MdAdd } from "react-icons/md";
import Rezila from "../../images/rezila.png";

function Navbar() {
  return (
    <Box as="nav" position="absolute" mt="5%"  w="100%">
      <Flex justify="space-between" align="center" w="100%">
        <Flex align="center" ml="50px">
          <Button variant="ghost" fontSize="16px" fontWeight="500">
            Home
          </Button>
          <Button variant="ghost" fontSize="16px" fontWeight="500">
            About
          </Button>
          <Button variant="ghost" fontSize="16px" fontWeight="500">
            Listings
          </Button>
          <Button variant="ghost" fontSize="16px" fontWeight="500">
            Services
          </Button>
          <Button variant="ghost" fontSize="16px" fontWeight="500">
            Blogs
          </Button>
        </Flex>
        <Flex justify="center" align="center" mr="15%">
          <Image src={Rezila} maxW="90%" />
        </Flex>
        <Flex align="center" mr="5%">
          <Flex align="center" mr={6}>
            <Icon as={MdAccountCircle} w={7} h={7} />
            <Text ml={2} fontSize="15px" fontWeight="500">
              Login/Register
            </Text>
          </Flex>
          <button
      style={{
        background: "var(--Primary-Colour, #3A0CA3)",
        borderRadius: "50px",
        padding: "10px 26px",
        display: "flex",
        alignItems: "center", 
      }}
    >
      <Flex alignItems="center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clipPath="url(#clip0_19_3)">
            <path
              d="M19.7625 7.6376L10.3875 0.137598C10.2766 0.0488457 10.1389 0.000488281 9.99686 0.000488281C9.85486 0.000488281 9.71709 0.0488457 9.60624 0.137598L0.23124 7.6376C0.130102 7.71874 0.0567036 7.82932 0.0212132 7.95403C-0.0142772 8.07874 -0.0101023 8.2114 0.0331596 8.33364C0.0764215 8.45587 0.156628 8.56162 0.262668 8.63624C0.368707 8.71086 0.495329 8.75065 0.62499 8.7501H1.87499V19.3751C1.87499 19.5409 1.94084 19.6998 2.05805 19.817C2.17526 19.9342 2.33423 20.0001 2.49999 20.0001H15V18.7501H12.5V13.1251C12.5 12.9593 12.4341 12.8004 12.3169 12.6832C12.1997 12.5659 12.0408 12.5001 11.875 12.5001H8.12499C7.95923 12.5001 7.80026 12.5659 7.68305 12.6832C7.56584 12.8004 7.49999 12.9593 7.49999 13.1251V18.7501H3.12499V8.7501H13.75V7.5001H2.40624L9.99999 1.4251L17.5937 7.5001H17.5C17.3342 7.5001 17.1753 7.56595 17.058 7.68316C16.9408 7.80037 16.875 7.95934 16.875 8.1251V11.8751H18.125V8.7501H19.375C19.5041 8.74935 19.6298 8.70863 19.7349 8.63353C19.8399 8.55843 19.9191 8.45263 19.9616 8.33069C20.0041 8.20875 20.0077 8.07664 19.9721 7.95253C19.9364 7.82842 19.8632 7.7184 19.7625 7.6376ZM8.74999 13.7501H11.25V18.7501H8.74999V13.7501Z"
              fill="white"
            ></path>
            <path
              d="M15.625 16.6188L14.8187 15.8125L13.9375 16.6937L15.1875 17.9437C15.3046 18.0602 15.463 18.1255 15.6281 18.1255C15.7932 18.1255 15.9516 18.0602 16.0687 17.9437L19.8187 14.1937L18.9375 13.3125L15.625 16.6188Z"
              fill="white"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_19_3">
              <rect width="20" height="20" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        <Text fontSize="16px" ml="10px" color="white">
          Add Listing
        </Text>
      </Flex>
    </button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
