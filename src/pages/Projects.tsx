import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const ProjectCard = styled(motion.div)<{ theme: 'light' | 'dark' }>`
  background: ${props => props.theme === 'dark' ? '#1a1a1a' : '#ffffff'};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
`;

const ProjectTitle = styled.h3<{ theme: 'light' | 'dark' }>`
  font-size: 1.5rem;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#333'};
  margin: 0 0 1rem 0;
`;

const ProjectDescription = styled.p<{ theme: 'light' | 'dark' }>`
  color: ${props => props.theme === 'dark' ? '#cccccc' : '#666'};
  line-height: 1.6;
`;

const ProjectLink = styled.a<{ theme: 'light' | 'dark' }>`
  color: ${props => props.theme === 'dark' ? '#66b3ff' : '#0066cc'};
  text-decoration: none;
  display: inline-block;
  margin-top: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const PageTitle = styled.h2<{ theme: 'light' | 'dark' }>`
  font-size: 2.5rem;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#333'};
  margin-bottom: 2rem;
`;

// Example projects data - you can replace this with your actual projects
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of your first project and what technologies you used.",
    link: "#"
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description of your second project highlighting your key achievements.",
    link: "#"
  },
  {
    id: 3,
    title: "Project Three",
    description: "Overview of another significant project in your portfolio.",
    link: "#"
  }
];

const Projects = () => {
  const { theme } = useTheme();

  return (
    <div>
      <PageTitle theme={theme}>My Projects</PageTitle>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            theme={theme}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectTitle theme={theme}>{project.title}</ProjectTitle>
            <ProjectDescription theme={theme}>{project.description}</ProjectDescription>
            <ProjectLink href={project.link} theme={theme}>Learn More →</ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </div>
  );
};

export default Projects; 