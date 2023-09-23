import { useEffect, useState } from "react";
import Moon from "../assets/icons/darkMode/moon.svg";
import Sun from "../assets/icons/darkMode/sun.svg";

function Navbar() {
  const navbarConfig = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Skills", href: "#Skills" },
    { name: "Works", href: "#Works" },
    { name: "Contact", href: "#Contact" },
  ];

  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const prefersDarkMode = darkModeQuery.matches;

  const [theme, setTheme] = useState(prefersDarkMode ? "dark" : "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function darkModeChanges() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="sticky flex justify-around items-center border-b-2 border-content pb-3 p-8">
      <a href={"#Home"} className="text-lg font-bold">
        Kenneth Filbert
      </a>
      <div className="flex gap-x-7">
        {navbarConfig.map((config) => {
          return (
            <div
              key={config.name}
              className="items-center rounded-lg p-4 text-sm hover:bg-accent hover:text-bgc hover:shadow-lg hover:shadow-hvr"
            >
              <a href={config.href}>{config.name}</a>
            </div>
          );
        })}
      </div>

      <button onClick={darkModeChanges}>
        {theme === "light" ? (
          <div className="transition-opacity hover:bg-content/30 rounded-lg p-2">
            <img
              src={Moon}
              alt="dark"
              className="w-6 h-6 "
            />
          </div>
        ) : (
          <div className="transition-opacity hover:bg-content/30 rounded-lg p-2">
            <img
              src={Sun}
              alt="light"
              className="w-6 h-6 "
            />
          </div>
        )}
      </button>
    </div>
  );
}

export default Navbar;
