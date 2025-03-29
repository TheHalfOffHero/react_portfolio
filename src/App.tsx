import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Navigation from './components/Navigation';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const AppContainer = styled.div<{ theme: 'light' | 'dark' }>`
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background-color: ${props => props.theme === 'dark' ? '#121212' : '#f5f5f5'};
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#333'};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

function AppContent() {
  const { theme } = useTheme();
  
  return (
    <Router>
      <AppContainer theme={theme}>
        <Navigation />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
