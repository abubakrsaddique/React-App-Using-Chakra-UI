import React from "react";
import { Box, Text, Image, Flex, keyframes } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
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
      <Box pb={{ base: "40px", md: "80px" }} w="100%" position="relative">
        <Box display={{ base: "none", md: "block" }} position="absolute" left="12%" top="4%">
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
          fontSize={{ base: "16px", md: "16px" }}
          lineHeight={{ base: "20px", md: "24px" }}
          textAlign="center"
          pt={{ base: "40px", md: "78px" }}
          fontWeight={{ base: "600", md: "500" }}
          mb={{ base: "8px", md: "16px" }}
          mr={{ md: "57px" }}
        >
          Trusted by 100+ Companies across the globe
        </Text>
        <Flex justifyContent="center" pt={{ base: "46px", md: "46px" }} ml="8%" mr="-645px" overflow="hidden" w="90%">
      <Marquee speed={50} gradient={false} pauseOnHover={true} direction="left">
        <Box mx={{ base: "10px", md: "15px" }}>
          <Image src={Google} alt="Google" height={{ base: "6vh", md: "auto" }} ml={{base:"16px" , md:"64px"}} mr={{base:"16px" , md:"64px"}}/>
        </Box>
        <Box mx={{ base: "10px", md: "15px" }}>
          <Image src={Amazon} alt="Amazon" height={{ base: "6vh", md: "auto" }} ml={{base:"16px" , md:"64px"}}  mr={{base:"16px" , md:"64px"}} />
        </Box>
        <Box mx={{ base: "10px", md: "15px" }}>
          <Image src={Logitech} alt="Logitech" height={{ base: "6vh", md: "auto" }}  ml={{base:"16px" , md:"64px"}} mr={{base:"16px" , md:"64px"}}/>
        </Box>
        <Box mx={{ base: "10px", md: "15px" }}>
          <Image src={Netflix} alt="Netflix" height={{ base: "6vh", md: "auto" }} ml={{base:"16px" , md:"64px"}} mr={{base:"16px" , md:"64px"}}/>
        </Box>
        <Box mx={{ base: "10px", md: "15px" }}>
          <Image src={Samsung} alt="Samsung" height={{ base: "6vh", md: "auto" }} ml={{base:"16px" , md:"64px"}} mr={{base:"16px" , md:"64px"}}/>
        </Box>
        <Box mx={{ base: "10px", md: "15px" }}>
          <Image src={Spotify} alt="Spotify" height={{ base: "6vh", md: "auto" }}ml={{base:"16px" , md:"64px"}}  mr={{base:"16px" , md:"64px"}}/>
        </Box>
      </Marquee>
    </Flex>
      </Box>
    </Box>
  );
};

export default MarqueeComponent;
