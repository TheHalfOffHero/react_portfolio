import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { useTheme } from '../context/ThemeContext';
import { ThemeToggle } from './ThemeToggle';

const Nav = styled.nav<{ theme: 'light' | 'dark' }>`
  background-color: ${props => props.theme === 'dark' ? '#1a1a1a' : '#ffffff'};
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)<{ theme: 'light' | 'dark' }>`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#333'};
  text-decoration: none;
  
  &:hover {
    color: ${props => props.theme === 'dark' ? '#cccccc' : '#666'};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)<{ theme: 'light' | 'dark' }>`
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#333'};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: ${props => props.theme === 'dark' ? '#cccccc' : '#666'};
  }
`;

const Navigation = () => {
  const { theme } = useTheme();

  return (
    <Nav theme={theme}>
      <NavContainer>
        <Logo to="/" theme={theme}>Matt Ruiz</Logo>
        <NavLinks>
          <NavLink to="/" theme={theme}>Home</NavLink>
          <NavLink to="/about" theme={theme}>About</NavLink>
          <NavLink to="/projects" theme={theme}>Projects</NavLink>
          <ThemeToggle />
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navigation; 