import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import profileImage from '../assets/MattRuiz.jpg';

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${props => props.theme === 'dark' ? '#ffffff' : '#333'};
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Title = styled(motion.h1)<{ theme: 'light' | 'dark' }>`
  font-size: 4rem;
  font-weight: bold;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#333'};
  margin: 0;
`;

const Subtitle = styled(motion.p)<{ theme: 'light' | 'dark' }>`
  font-size: 1.5rem;
  color: ${props => props.theme === 'dark' ? '#cccccc' : '#666'};
  max-width: 600px;
  line-height: 1.6;
`;

const Home = () => {
  const { theme } = useTheme();

  return (
    <HeroSection>
      <ProfileContainer>
        <ProfileImage
          src={profileImage}
          alt="Matt Ruiz"
          theme={theme}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <TextContainer>
          <Title
            theme={theme}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to My Portfolio
          </Title>
          <Subtitle
            theme={theme}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a DevOps Engineer with a passion for cloud infrastructure and automation.
            From managing Kubernetes clusters to building CI/CD pipelines, I love creating
            scalable solutions that empower development teams.
          </Subtitle>
        </TextContainer>
      </ProfileContainer>
    </HeroSection>
  );
};

export default Home; 