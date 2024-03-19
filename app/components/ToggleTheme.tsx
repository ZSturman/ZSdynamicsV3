// Any component
import { useTheme } from "../context/themeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme} >Toggle Theme</button>;
};

export default ThemeToggle;
