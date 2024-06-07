// About.jsx
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
    <Box maxW="852px" mx="auto">
      <Flex direction={{ base: "column", lg: "row" }} mt="-495px" align="center" justify="center" gap="16px">
        {/* Left Side */}
        <Flex direction="column" align="center" flex="3" mt="63%">
          <Box w="75%" mr="66px">
            <Heading color="blue.500" fontSize="20px" fontWeight="500">WHO ARE WE</Heading>
            <Heading color="gray.800" fontSize="40px" fontWeight="600" lineHeight="47px" my="24px">
              Assisting individuals in locating the appropriate real estate.
            </Heading>
            <Text color="gray.500" fontSize="18px" lineHeight="26px">
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.
            </Text>

            {/* First Card */}
            <Box
              bg="white" borderRadius="30px" boxShadow="sm" mb="75px" maxW="400px"
              _hover={{ boxShadow: "lg", transition: "0.5s" }}
              data-aos="fade-right"
            >
              <Flex align="center" p="24px" mt="24px">
                <Icon as={FaCircle} boxSize="40px" color="blue.500" />
                <Box ml="16px">
                  <Heading fontSize="20px" fontWeight="500" color="blue.500">Donec porttitor euismod</Heading>
                  <Text fontSize="16px" color="gray.500">Nullam a lacinia ipsum, nec dignissim purus. Nulla</Text>
                </Box>
              </Flex>
            </Box>

            {/* Second Card */}
            <Box
              bg="white" borderRadius="30px" boxShadow="sm" mt="-10%" maxW="400px"
              _hover={{ boxShadow: "lg", transition: "0.5s" }}
              data-aos="fade-right"
            >
              <Flex align="center" p="24px">
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
        <Flex direction="column" align="center" flex="1" pb="55px">
          <Box position="relative" zIndex="1" mt="327%" >
            <Image
              marginLeft="60%"
              src={RoundImage}
              alt="Round"
              animation={`${spin} 20s linear infinite`}
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            />
          </Box>
          <Flex mt="-120px" ml="137%" width="285%">
            <Box mr="-10px">
              <Image
                src={Image1}
                alt="About1"
                width="317px"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              />
            </Box>
            <Box>
              <Box marginTop="-37px" data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <Image src={Image2} alt="About2" />
              </Box>
              <Box marginTop="-14px" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <Image src={Image3} alt="About3" />
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;
