import './Switch.css';
import { useTheme } from '../context/ThemeContext';


const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export { ThemeToggle }; 