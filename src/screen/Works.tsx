import Github from "../assets/icons/others/github-original.svg";
import React from "../assets/icons/frameworks/React.svg";
import TypeScript from "../assets/icons/language/typescript-original.svg";
import SQL from "../assets/icons/database/sql.svg";
import Tensorflow from "../assets/icons/frameworks/tensorflow-original.svg";
import Python from "../assets/icons/language/Python.svg";
import CS from "../assets/icons/language/CS.svg";
import Figma from "../assets/icons/others/figma-original.svg";
import HTML from "../assets/icons/language/html.svg";
import CSS from "../assets/icons/language/css.svg";
import JavaScript from "../assets/icons/language/JavaScript.svg";

function Works() {
  const projects = [
    {
      title: "Binus Recycle App",
      description:
        "A mobile application that helps to BINUS students to go-green as well helps them to get more Community Service Hour (ComServ). This application use React Native",
      link: "https://github.com/kennethfilberts/binus-recycle-app",
      image: [Github, React, TypeScript],
    },
    {
      title: "Binus Recycle API",
      description: "A backend server that run for Binus Recycle App",
      link: "https://github.com/Scleepy/BinusRecycleAPI",
      image: [Github, SQL, JavaScript],
    },
    {
      title: "Garbage Classification",
      description:
        "An AI that can scan types of garbage (plastic, paper, cardboard, metal, glass). This AI use ResNet50V2 for the base model and Tensorflow.",
      link: "https://github.com/kennethfilberts/garbage_classification",
      image: [Github, Tensorflow, Python],
    },
    {
      title: "Kpopztation",
      description:
        "A website that implements CRUD for a store. This website using C# and .NET",
      link: "https://github.com/kennethfilberts/kpopztation",
      image: [Github, CS],
    },
    {
      title: "Project 2",
      description: "Description of Project 2 goes here.",
      link: "https://github.com/kennethfilberts/binus-recycle-app",
      image: [Github, Figma, HTML, CSS, JavaScript],
    },
    {
      title: "Project 2",
      description: "Description of Project 2 goes here.",
      link: "https://github.com/kennethfilberts/binus-recycle-app",
      image: [Github, Figma, HTML, CSS, JavaScript],
    },
  ];

  return (
    <div className="min-h-screen bg-content p-10 flex flex-col justify-center items-center">
      <div className="bg-accent p-6 rounded-lg mb-10 shadow-lg">
        <h1 className="text-3xl font-bold text-bgc">WORKS / PROJECTS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline bg-bgc p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer flex flex-col items-start"
          >
            <div className="bg-bgc p-4 rounded-lg flex flex-col items-start">
              <h2 className="text-xl font-semibold text-content mb-4">
                {project.title}
              </h2>

              <p className="text-content mb-4">{project.description}</p>

              <div className="flex gap-4">
                {project.image.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="bg-white p-2 rounded-lg shadow-md"
                  >
                    <img src={image} alt="" className="h-9 w-9" />
                  </div>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Works;
