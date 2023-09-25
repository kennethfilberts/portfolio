import { useEffect, useState } from "react";
import Moon from "../assets/icons/darkMode/moon.svg";
import Sun from "../assets/icons/darkMode/sun.svg";

function Navbar() {
  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const prefersDarkMode = darkModeQuery.matches;

  const [theme, setTheme] = useState<string>(
    prefersDarkMode ? "dark" : "light"
  );
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth <= 768 && window.innerWidth > 541) {
      setIsTablet(true);
    } else if (window.innerWidth <= 541) {
      setIsMobile(true);
    }
  }, [window]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function darkModeChanges() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="relative flex justify-around items-center border-b-2 border-content p-4 md:p-8">
      <a href={"#Home"} className="text-lg font-bold">
        {isMobile ? "KF" : isTablet ? "KF" : "Kenneth Filbert"}
      </a>

      <button onClick={darkModeChanges}>
        {theme === "light" ? (
          <div className="transition-opacity hover:bg-content/30 rounded-lg p-2">
            <img src={Moon} alt="dark" className="w-6 h-6" />
          </div>
        ) : (
          <div className="transition-opacity hover:bg-content/30 rounded-lg p-2">
            <img src={Sun} alt="light" className="w-6 h-6" />
          </div>
        )}
      </button>
    </div>
  );
}

export default Navbar;
