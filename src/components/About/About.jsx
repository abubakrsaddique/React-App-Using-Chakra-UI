import React, { useEffect } from "react";
import { Box, Heading, Text, Flex, Image, Icon, keyframes } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCircle } from "react-icons/fa";

import RoundImage from "../../images/round.png";
import Image1 from "../../images/about1.png";
import Image2 from "../../images/about2.png";
import Image3 from "../../images/about3.png";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Box maxW="1280px" mx="auto">
      <Flex  mt={{ base: "135px", lg: "-810px" }} direction={{ base: "column", lg: "row" }} align="center" justify="center" gap="16px">
        {/* Left Side */}
        <Flex direction="column" align={{ base: "center", lg: "flex-start" }} flex="3" mt={{ base: "0", lg: "63%" }} >
          <Box w={{ base: "70%", lg: "75%" }} ml={{ lg: "100px" }} mr={{base :"40px"}}>
            <Heading color="blue.500" fontSize="20px" fontWeight="500" >WHO ARE WE</Heading>
            <Heading color="gray.800" fontSize={{ base: "40px", lg: "40px" }} fontWeight="600" lineHeight={{ base: "47px", lg: "47px" }} my="24px" >
              Assisting individuals in locating the appropriate real estate.
            </Heading>
            <Text color="gray.500" fontSize="16px" fontWeight="400" lineHeight="26px" >
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.
            </Text>

            {/* First Card */}
            <Box
              bg="white" borderRadius="30px" boxShadow="sm" mb="75px" maxW="400px" w={{base:"112%"}}
              _hover={{ boxShadow: "lg", transition: "0.5s" }}
              data-aos="fade-right"
              mx={{ base: "auto", lg: "0" }}
            >
              <Flex align="center" pb={{base:"20px" , lg:"16px"}} pl={{base:"20px" , lg:"24px"}} pt={{base:"20px" ,lg:"16px"}} pr={{base:"20px" ,lg:"24px"}} mt={{base : "20px" , lg:"46px"}}>
                <Icon as={FaCircle} boxSize="40px" color="blue.500" />
                <Box ml="16px">
                  <Heading fontSize="20px" fontWeight="500" color="blue.500">Donec porttitor euismod</Heading>
                  <Text fontSize="16px" color="gray.500">Nullam a lacinia ipsum, nec dignissim purus. Nulla</Text>
                </Box>
              </Flex>
            </Box>

            {/* Second Card */}
            <Box
              bg="white" borderRadius="30px" boxShadow="sm" mt={{ base: "-21%", lg: "-10%" }} maxW="400px" w={{base:"112%"}}
              _hover={{ boxShadow: "lg", transition: "0.5s" }}
              data-aos="fade-right"
              mx={{ base: "auto", lg: "0" }}
            >
              <Flex align="center" mb={{lg:"-25px"}} pb={{base:"20px" ,lg:"16px"}} pl={{base:"20px" , lg:"24px"}} pt={{base:"20px" ,lg:"16px"}} pr={{base:"20px" , lg:"24px"}}>
                <Icon as={FaCircle} boxSize="40px" color="blue.500" />
                <Box ml="16px">
                  <Heading fontSize="20px" fontWeight="500" color="blue.500">Donec porttitor euismod</Heading>
                  <Text fontSize="16px" color="gray.500">Nullam a lacinia ipsum, nec dignissim purus. Nulla</Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>

        {/* Right Side */}
        <Flex direction="column" align="center" flex="1" pb="55px" mt={{ base: "5px", lg: "219px" }} mr={{base:"0" , lg:"363px"}}>
          <Box position="relative" zIndex="1" mt={{ base: "20px", lg: "327%" }}>
            <Image
             marginLeft={{base :"3%" , lg:"60%"}}
             height={{base:"20vh" , lg:"auto"}}
              src={RoundImage}
              alt="Round"
              animation={`${spin} 20s linear infinite`}
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              
            />
          </Box>
          <Flex mt={{ base: "-40px", lg: "-120px" }} ml={{ base: "0", lg: "137%" }} width={{ base: "100%", lg: "285%" }} flexDirection={{ base: "row", lg: "row" }} align="center">
            <Box mr={{ base: "0", lg: "-10px" }} mb={{ base: "20px", lg: "0" }}>
              <Image
                src={Image1}
                alt="About1"
                width={{ base: "80%", lg: "317px" }}
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                mx="auto"
              />
            </Box>
            <Box>
              <Box  mt={{ base: "-65px",lg: "-68px" }} mb={{ base: "20px", lg: "0" }} data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <Image src={Image2} alt="About2" width={{ base: "80%", lg: "auto" }} />
              </Box>
              <Box mt={{ lg: "-18px" }} data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <Image src={Image3} alt="About3" width={{ base: "80%", lg: "auto" }}  />
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;
