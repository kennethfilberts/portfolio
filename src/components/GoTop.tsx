import { useEffect, useState } from "react";
import Up from "../assets/icons/up.svg";

function GoTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        className="fixed bottom-6 right-6 bg-accent p-3 rounded-lg text-bgc hover:shadow-md hover:shadow-hvr"
        onClick={scrollToTop}
      >
        <img src={Up} alt="Scroll to Top" className="w-4 h-4"/>
      </button>
    )
  );
}

export default GoTop;
