import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled(motion.section)<{ theme: 'light' | 'dark' }>`
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: ${props => props.theme === 'dark' ? '#1a1a1a' : '#ffffff'};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2<{ theme: 'light' | 'dark' }>`
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#333'};
  margin-bottom: 1.5rem;
  font-size: 2rem;
`;

const SectionContent = styled.div<{ theme: 'light' | 'dark' }>`
  color: ${props => props.theme === 'dark' ? '#cccccc' : '#666'};
  line-height: 1.8;
  font-size: 1.1rem;
`;

const SubSection = styled.div`
  margin-bottom: 2rem;
`;

const SubTitle = styled.h3<{ theme: 'light' | 'dark' }>`
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#333'};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const About = () => {
  const { theme } = useTheme();

  return (
    <AboutContainer>
      <Section
        theme={theme}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle theme={theme}>About Me</SectionTitle>
        <SectionContent theme={theme}>
          <p>
            My name is Matt and I'm a DevOps Engineer with a great love for all things tech. 
            From my earliest years I've sought to learn as much as possible about the systems 
            and services that seem to shape life in the 20th century. Given this fascination 
            with technology it only seemed to make sense for me to pursue a career in IT. 
            I'm truly blessed that each day I get to wake up and work in such a fast paced 
            and interesting field.
          </p>
        </SectionContent>
      </Section>

      <Section
        theme={theme}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SectionTitle theme={theme}>Education</SectionTitle>
        <SectionContent theme={theme}>
          <ul>
            <li>M.S. Computer Science (In Progress); Georgia Institute of Technology (Atlanta, GA)</li>
            <li>Computer Science; Purdue University (Fort Wayne, IN)</li>
            <li>Biology; Indiana University (Bloomington, IN)</li>
          </ul>
        </SectionContent>
      </Section>

      <Section
        theme={theme}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <SectionTitle theme={theme}>Experience</SectionTitle>
        <SectionContent theme={theme}>
          <SubSection>
            <SubTitle theme={theme}>Associate DevOps Engineer at Mesh Systems</SubTitle>
            <p>
              As an associate DevOps Engineer for Mesh Systems, I worked primarily with Azure 
              and Azure DevOps, writing IAC with Bicep/Terraform and building CI/CD pipelines. 
              I also spent time scripting out solutions in Powershell and Bash as well as 
              collaborating with development and product team members to help deliver features 
              to our clients.
            </p>
          </SubSection>

          <SubSection>
            <SubTitle theme={theme}>IT Project Engineer at Bradford-Scott Data Corp (Sharetec)</SubTitle>
            <p>
              As an IT Projects Engineer, I worked as an IT specialist working to deploy our 
              hosted core banking solution for our customers. This entailed a great deal of 
              work with Hypervisors, Linux (RedHat/CentOS), Windows, and Networking. I also 
              worked to script out repetitive tasks in either bash or powershell as necessary.
            </p>
          </SubSection>
        </SectionContent>
      </Section>

      <Section
        theme={theme}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SectionTitle theme={theme}>Technical Experience</SectionTitle>
        <SectionContent theme={theme}>
          <SubSection>
            <SubTitle theme={theme}>Homelab</SubTitle>
            <p>
              I maintain a sophisticated homelab environment featuring enterprise-grade networking equipment,
              virtualization with Proxmox, and a production-ready Kubernetes cluster. My infrastructure includes
              a robust Docker environment managed through Portainer, hosting various services including Pi-hole
              and Unbound for DNS management, Plex media server, and a redundant NAS solution for data storage.
              I've automated the entire Kubernetes cluster deployment process using Terraform, allowing for
              efficient infrastructure management and experimentation with cloud-native technologies.
            </p>
          </SubSection>

          <SubSection>
            <SubTitle theme={theme}>Programming Languages/DevOps Tools</SubTitle>
            <ul>
              <li><strong>C# and Dotnet:</strong> Good understanding of the C# library and the dotnet framework</li>
              <li><strong>Python:</strong> Used for side projects and automation</li>
              <li><strong>Bash:</strong> Used extensively for Linux environment automation</li>
              <li><strong>Powershell:</strong> Used for Windows automation and Azure/Azure DevOps reporting</li>
              <li><strong>Terraform and Bicep:</strong> Used for infrastructure as code</li>
              <li><strong>Microsoft Azure:</strong> Primary cloud platform</li>
              <li><strong>Azure Pipelines:</strong> CI/CD implementation</li>
              <li><strong>Github Actions:</strong> CI/CD implementation</li>
              <li><strong>Azure DevOps:</strong> Project management and reporting</li>
              <li><strong>Kubernetes:</strong> Experience with AKS and Azure Container Apps</li>
              <li><strong>Git:</strong> Version control with Azure DevOps and GitHub</li>
              <li><strong>Docker:</strong> Container management with Portainer and Azure Container Apps</li>
              <li><strong>Basic knowledge of:</strong> Go, Java, React, Node</li>
            </ul>
          </SubSection>
        </SectionContent>
      </Section>

      <Section
        theme={theme}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <SectionTitle theme={theme}>Certifications</SectionTitle>
        <SectionContent theme={theme}>
          <ul>
            <li>AZ-900, Azure Fundamentals</li>
            <li>AZ-104, Azure Administrator Associate</li>
            <li>AZ-400, Azure DevOps Expert</li>
          </ul>
        </SectionContent>
      </Section>
    </AboutContainer>
  );
};

export default About; 