import { Flex, IconButton, Text } from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <Flex 
      as="footer" 
      bg="white.300" 
      color="blue" 
      p="3" 
      justify="center" 
      align="center" 
      direction="column" 
      margin="50"
    >
      <Flex align="center">
        <IconButton
          as="a"
          href="https://github.com/Lijujujune/"
          aria-label="GitHub"
          icon={<FaGithub />}
          colorScheme="blue"
          mx="2"
          isRound
        />
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/june-l-61253310a/"
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          colorScheme="blue"
          mx="3"
          isRound
        />
        <IconButton
          as="a"
          href="https://www.facebook.com/"
          aria-label="Facebook"
          icon={<FaFacebook />}
          colorScheme="blue"
          mx="2"
          isRound
        />
      </Flex>
      <Text mt="2" fontSize="sm" textColor="navy" textAlign="center"> 
        2024 June L 🩵.
      </Text>
    </Flex>
  );
};

export default Footer;