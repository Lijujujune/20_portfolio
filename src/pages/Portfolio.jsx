import React from 'react';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    { title: 'PWA - Text Editor', image: 'src/assets/JATE.png', repoLink: 'https://github.com/Lijujujune/19_text_editor', deploylink:'https://one9-text-editor-1-30hb.onrender.com/' },
    { title: 'Sound Spiral', image: 'src/assets/Soundspiral.png', repoLink: 'https://github.com/Lijujujune/socialnetwork', deploylink: 'https://benjr546.github.io/sound-spiral/'  },
    { title: 'Cinejournal', image: 'src/assets/Cinejournal.png', repoLink: 'https://github.com/kevinvongmany/cinejournal-webapp', deploylink: 'https://cinejournal-webapp.onrender.com/' },
    { title: 'Weather App', image: 'src/assets/weatherapp.png', repoLink: 'https://github.com/Lijujujune/weatherappLinks', deploylink: 'https://lijujujune.github.io/weatherapp/' },
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
            deploylink={project.deploylink}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Portfolio;