import React from "react";
import { Box, Text, Image, Flex, keyframes } from "@chakra-ui/react";
import Google from "../../images/google.png";
import Amazon from "../../images/amazon.png";
import Logitech from "../../images/logitech.png";
import Netflix from "../../images/netflix.png";
import Samsung from "../../images/samsung.png";
import Spotify from "../../images/spotify.png";

const moveRightToLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MarqueeComponent = () => {
  return (
    <Box w="100%">
      <Box pb="80px" w="100%" position="relative">
        <Box position="absolute" left="15%" top="-12%">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="101"
            height="101"
            viewBox="0 0 101 101"
            fill="none"
          >
            <circle
              opacity="0.5"
              cx="50.3013"
              cy="50.3013"
              r="50"
              transform="rotate(-30 50.3013 50.3013)"
              fill="url(#paint0_linear_1_491)"
            ></circle>
            <defs>
              <linearGradient
                id="paint0_linear_1_491"
                x1="50.3013"
                y1="0.30127"
                x2="50.3013"
                y2="100.301"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4361EE"></stop>
                <stop offset="1" stopColor="#4361EE" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </Box>
        <Text
          color="gray.500"
          fontSize="16px"
          lineHeight="24px"
          textAlign="center"
          pt="78px"
          fontWeight="500"
          mb="16px"
          ml="330px"
        >
          Trusted by 100+ Companies across the globe
        </Text>
        <Flex justifyContent="center" pt="46px" ml="0%" overflow="hidden" w="134%">
          <Flex animation={`${moveRightToLeft} 20s linear infinite`}>
            <Box mx="15px">
              <Image src={Google} alt="" height="6vh" />
            </Box>
            <Box mx="15px">
              <Image src={Amazon} alt="" height="6vh" />
            </Box>
            <Box mx="15px">
              <Image src={Logitech} alt="" height="6vh" />
            </Box>
            <Box mx="15px">
              <Image src={Netflix} alt="" height="6vh" />
            </Box>
            <Box mx="15px">
              <Image src={Samsung} alt="" height="6vh" />
            </Box>
            <Box mx="15px">
              <Image src={Spotify} alt="" height="6vh" />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default MarqueeComponent;