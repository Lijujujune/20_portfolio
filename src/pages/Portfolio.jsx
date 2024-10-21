import React from 'react';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Project from '../components/Project';

// Import images at the top
import JATEImage from '../assets/JATE.png';
import SoundSpiralImage from '../assets/Soundspiral.png';
import CinejournalImage from '../assets/Cinejournal.png';
import WeatherAppImage from '../assets/weatherapp.png';

function Portfolio() {
  const projects = [
    { title: 'PWA - Text Editor', image: JATEImage, repoLink: 'https://github.com/Lijujujune/19_text_editor', deployLink: 'https://one9-text-editor-1-30hb.onrender.com/' },
    { title: 'Sound Spiral', image: SoundSpiralImage, repoLink: 'https://github.com/Lijujujune/socialnetwork', deployLink: 'https://benjr546.github.io/sound-spiral/' },
    { title: 'Cinejournal', image: CinejournalImage, repoLink: 'https://github.com/kevinvongmany/cinejournal-webapp', deployLink: 'https://cinejournal-webapp.onrender.com/' },
    { title: 'Weather App', image: WeatherAppImage, repoLink: 'https://github.com/Lijujujune/weatherappLinks', deployLink: 'https://lijujujune.github.io/weatherapp/' },
  ];

  return (
    <Container maxW="container.lg" mt="5rem">
      <Heading as="h1" size="2xl" color="blue.700" mb="6">
        Portfolio
      </Heading>
      <SimpleGrid columns={[1, 2, 2, 4]} spacing={10}>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            repoLink={project.repoLink}
            deployLink={project.deployLink} // Corrected the prop name to be consistent
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Portfolio;