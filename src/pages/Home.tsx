import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
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
        I'm a DevOps engineer with a deep passion for technology and continuous learning.
        Welcome to my portfolio!
      </Subtitle>
    </HeroSection>
  );
};

export default Home; 