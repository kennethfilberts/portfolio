import { TypeAnimation } from "react-type-animation";
import Photo from "../assets/photos/self.jpg";
import { useEffect, useState } from "react";

function Home() {
  const aboutClicked = () => {
    const aboutSection = document.getElementById("About");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth <= 541) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="rounded-lg flex flex-col md:flex-row justify-center items-center gap-10 md:gap-28">
        {isMobile ? (
          <>
            <picture className="overflow-hidden w-72 h-72 rounded-full border-content border-4  z-0">
              <img
                src={Photo}
                alt="self photo"
                className="scale-150 pb-[10rem]"
              />
            </picture>
            <div className="text-center">
              <div className="text-lg">Hi, my name is</div>
              <TypeAnimation
                sequence={["Kenneth Filbert", 1000]}
                wrapper="span"
                speed={30}
                style={{ fontSize: "40px", fontWeight: "600" }}
                repeat={Infinity}
              />
              <div>
                <h1 className="text-lg">
                  I am a college student at <br/>
                  <span className="font-bold text-accent">
                    Bina Nusantara University
                  </span>
                </h1>
              </div>
              <button
                onClick={aboutClicked}
                className="bg-accent p-3 rounded-lg font-bold text-bgc hover:shadow-lg hover:shadow-hvr mt-8"
              >
                Know me more !
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="w-100">
              <div className="text-lg">Hi, my name is</div>
              <TypeAnimation
                sequence={["Kenneth Filbert", 1000]}
                wrapper="span"
                speed={30}
                style={{ fontSize: "56px", fontWeight: "600" }}
                repeat={Infinity}
              />
              <h1 className="text-lg">
                I am a college student at{" "}
                <span className="font-bold text-accent">
                  Bina Nusantara University
                </span>
              </h1>
              <button
                onClick={aboutClicked}
                className="bg-accent p-3 rounded-lg font-bold text-bgc hover:shadow-lg hover:shadow-hvr mt-8"
              >
                Know me more !
              </button>
            </div>
            <picture className="overflow-hidden w-96 h-96 rounded-full border-content border-4">
              <img
                src={Photo}
                alt="self photo"
                className="scale-150 pb-[10rem]"
              />
            </picture>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
