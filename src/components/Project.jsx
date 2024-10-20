import { Box, Image, Text, Link, VStack, Icon } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import { FaExternalLinkAlt } from 'react-icons/fa';

const Project = ({ title, image, repoLink, deploylink }) => {
  return (
    <Box
      bg="white"
      borderRadius="md"
      boxShadow="lg" 
      p="6" 
      transition="transform 0.3s, box-shadow 0.3s" 
      _hover={{
        transform: 'translateY(-5px)', 
        boxShadow: 'xl', 
      }}
      borderWidth="1px" 
      borderColor="gray.200" 
      height="300px" // Fixed height for consistent card size
    >
      <Image
        src={image}
        alt={`${title} screenshot`}
        borderRadius="md"
        objectFit="cover" 
        mb="4" 
        width="100%" // Full width of the box
        height="150px" // Fixed height for the image
        fallbackSrc="https://via.placeholder.com/300" 
      />
      <VStack align="start" spacing={2} mb="4"> 
        <Text fontSize="lg" fontWeight="bold" color="blue.700">
          {title}
        </Text>
      </VStack>
      <Link href={repoLink} isExternal>
        <Icon as={FaGithub} boxSize={6} color="blue.500" margin="3" />
      </Link>

      <Link href={deploylink} isExternal>
       <Icon as={FaExternalLinkAlt} boxSize={5} color="blue.500" margin="3"  />
      </Link>

    </Box>
  );
};

export default Project;
