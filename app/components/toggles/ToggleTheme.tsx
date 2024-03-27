import { useTheme } from "../../context/themeContext";
import { FaRegLightbulb } from "react-icons/fa6";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-darkest-shade rounded-md p-1 border-2 border-darkest-shade bg-lightest-shade opacity-50 hover:opacity-100"
    >
       <FaRegLightbulb />
    </button>
  );
};

export default ThemeToggle;
