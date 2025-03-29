import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const ProjectCard = styled(motion.div)<{ theme: 'light' | 'dark' }>`
  background: ${props => props.theme === 'dark' ? '#1a1a1a' : '#ffffff'};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectTitle = styled.h3<{ theme: 'light' | 'dark' }>`
  font-size: 1.8rem;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#333'};
  margin: 0 0 1rem 0;
`;

const ProjectDescription = styled.p<{ theme: 'light' | 'dark' }>`
  color: ${props => props.theme === 'dark' ? '#cccccc' : '#666'};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div<{ theme: 'light' | 'dark' }>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span<{ theme: 'light' | 'dark' }>`
  background: ${props => props.theme === 'dark' ? '#2a2a2a' : '#f0f0f0'};
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#333'};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const ProjectSection = styled.div<{ theme: 'light' | 'dark' }>`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h4<{ theme: 'light' | 'dark' }>`
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#333'};
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ProjectLink = styled.a<{ theme: 'light' | 'dark' }>`
  color: ${props => props.theme === 'dark' ? '#66b3ff' : '#0066cc'};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const PageTitle = styled.h2<{ theme: 'light' | 'dark' }>`
  font-size: 2.5rem;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#333'};
  margin-bottom: 2rem;
`;

// Example projects data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Kubernetes Cluster Automation",
    description: "Automated the deployment and management of a production-grade Kubernetes cluster using Terraform and custom scripts. Implemented monitoring, logging, and backup solutions.",
    technologies: ["Kubernetes", "Terraform", "Docker", "Prometheus", "Grafana"],
    problem: "Manual cluster management was time-consuming and prone to human error.",
    solution: "Developed an infrastructure-as-code approach using Terraform to automate cluster deployment and management.",
    results: "Reduced deployment time by 80% and eliminated configuration drift.",
    links: [
      { text: "GitHub", url: "#" },
      { text: "Live Demo", url: "#" }
    ]
  },
  {
    id: 2,
    title: "CI/CD Pipeline Optimization",
    description: "Designed and implemented an efficient CI/CD pipeline using Azure DevOps, reducing build times and improving deployment reliability.",
    technologies: ["Azure DevOps", "Docker", "PowerShell", "YAML"],
    problem: "Slow build times and frequent deployment failures were impacting team productivity.",
    solution: "Implemented multi-stage builds, caching strategies, and automated testing.",
    results: "Build time reduced by 60% and deployment success rate increased to 99.9%.",
    links: [
      { text: "GitHub", url: "#" }
    ]
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
            
            <TechStack theme={theme}>
              {project.technologies.map((tech, index) => (
                <TechTag key={index} theme={theme}>{tech}</TechTag>
              ))}
            </TechStack>

            <ProjectSection theme={theme}>
              <SectionTitle theme={theme}>Problem</SectionTitle>
              <ProjectDescription theme={theme}>{project.problem}</ProjectDescription>
            </ProjectSection>

            <ProjectSection theme={theme}>
              <SectionTitle theme={theme}>Solution</SectionTitle>
              <ProjectDescription theme={theme}>{project.solution}</ProjectDescription>
            </ProjectSection>

            <ProjectSection theme={theme}>
              <SectionTitle theme={theme}>Results</SectionTitle>
              <ProjectDescription theme={theme}>{project.results}</ProjectDescription>
            </ProjectSection>

            {project.links.length > 0 && (
              <ProjectLinks>
                {project.links.map((link, index) => (
                  <ProjectLink key={index} href={link.url} theme={theme}>
                    {link.text} →
                  </ProjectLink>
                ))}
              </ProjectLinks>
            )}
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </div>
  );
};

export default Projects; 