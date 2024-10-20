import React from 'react';
import { Container, Box, Heading, Text, VStack, Link, List, ListItem, ListIcon } from '@chakra-ui/react';
import { DownloadIcon, CheckCircleIcon } from '@chakra-ui/icons';

function Resume() {
  return (
    <Container maxW="container.lg" mt="5rem">
      <VStack spacing={8} align="start" textAlign="left">
        
        {/* Heading */}
        <Heading as="h1" size="2xl" color="blue.700" mb="4" textAlign="center">
          Resume
        </Heading>

        {/* Download Resume Link */}
        <Box>
          <Text fontSize="lg" color="gray.700">
            Download my {' '}
            <Link href="src/assets/June Li_CV.pdf" download color="blue.500" fontWeight="bold" isExternal>
              Resume <DownloadIcon mx="2px" />
            </Link>
          </Text>
        </Box>

        {/* Proficiencies Section */}
        <Box>
          <Heading as="h2" size="lg" color="blue.600" mb="4">
            Proficiencies
          </Heading>

          <List spacing={3} fontSize="lg" color="gray.700">
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="blue.500" />
              HTML5, CSS3, JavaScript (ES6+)
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="blue.500" />
              React, Redux
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="blue.500" />
              Node.js, Express.js
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="blue.500" />
              MongoDB, MySQL
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="blue.500" />
              Git, GitHub
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="blue.500" />
              Webpack, Babel
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="blue.500" />
              Responsive Design, Flexbox, CSS Grid
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="blue.500" />
              RESTful APIs
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="blue.500" />
              Agile Development
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Container>
  );
}

export default Resume;