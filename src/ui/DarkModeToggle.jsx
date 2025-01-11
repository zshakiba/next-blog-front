
import { useDarkMode } from "@/context/DarkModeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <SunIcon className="w-5 h-5 text-primary-900" />
      ) : (
        <MoonIcon className="w-5 h-5 text-primary-900" />
      )}
    </button>
  );
}
export default DarkModeToggle;
