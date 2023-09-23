import { TypeAnimation } from "react-type-animation";
import Photo from "../assets/photos/self.jpg";

function Home() {
  const aboutClicked = () => {
    const aboutSection = document.getElementById("About");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-4 rounded-lg flex justify-center items-center gap-[100px]">
        <div>
          <div className="text-lg">Hi, my name is</div>
          <TypeAnimation
            sequence={["Kenneth Filbert", 1000]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "56px", display: "inline-block", fontWeight: "600" }}
            repeat={Infinity}
          />
          <h1 className="text-lg">
            I am a student college at{" "}
            <span className="font-bold text-accent">
              Bina Nusantara University
            </span>
          </h1>
          <button onClick={aboutClicked} className="bg-accent p-3 rounded-lg font-bold text-bgc hover:shadow-lg hover:shadow-hvr mt-8">
            Know me more !
          </button>
        </div>

        <picture className="overflow-hidden w-96 h-96 rounded-full border-content border-4">
          <img src={Photo} alt="self photo" className="scale-150 pb-[10rem]" />
        </picture>
      </div>
    </div>
  );
}

export default Home;
