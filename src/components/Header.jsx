import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, HStack, Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      as="header"
      bgGradient="linear(to-r, blue.700, blue.400)"
      color="white"
      py="5"
      px="8"
      shadow="md"
      position="sticky"
      top="0"
      zIndex="1"
      borderRadius="30px"
    >
      <Flex justify="space-between" align="center" maxW="2000px" mx="auto">

        <Heading as="h1" size="lg" letterSpacing="wider" color="white">
          Hello the World!
          This is June 👩🏻‍💻
        </Heading>  

        {/* Navigation Links */}
        <HStack as="nav" spacing={8}>
          <Link to="/">
            <Button variant="link" color="white" fontSize="lg" _hover={{ color: 'blue.200' }}>
              About Me
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button variant="link" color="white" fontSize="lg" _hover={{ color: 'blue.200' }}>
              Portfolio
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="link" color="white" fontSize="lg" _hover={{ color: 'blue.200' }}>
              Contact
            </Button>
          </Link>
          <Link to="/resume">
            <Button variant="link" color="white" fontSize="lg" _hover={{ color: 'blue.200' }}>
              Resume
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;


