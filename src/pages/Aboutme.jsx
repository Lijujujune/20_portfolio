import React from 'react';
import { Container, Box, Image, Text, Heading, VStack } from '@chakra-ui/react';
import dogProfile from '../assets/dogprofile.png'; // Ensure the path is correct

function AboutMe() {
  return (
    <Container maxW="container.lg" mt="5rem">
      <VStack spacing={8} align="center" textAlign="center">
        <Heading as="h1" size="2xl" color="blue.700">
          About Me
        </Heading>
        
        <Image
          borderRadius="full"
          boxSize="200px"
          src={dogProfile} // Use the imported image here
          alt="Developer's Avatar"
          boxShadow="lg"
        />

        {/* Bio Text */}
        <Box maxW="700px">
          <Text fontSize="xl" color="gray.700">
            Hello! I’m a passionate full-stack web developer with experience in building dynamic and responsive web applications. 
            I enjoy solving complex problems with clean, efficient code and creating user-friendly digital experiences.
            <br />
            <br />
            I'm proficient in JavaScript, React, Node.js, and I love learning about new technologies. When I'm not coding, 
            you'll find me exploring nature or playing with my dog!
          </Text>
        </Box>
      </VStack>
    </Container>
  );
}

export default AboutMe;