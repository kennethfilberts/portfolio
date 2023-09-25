import C from "../assets/icons/language/c.svg";
import CS from "../assets/icons/language/CS.svg";
import CSS from "../assets/icons/language/css.svg";
import HTML from "../assets/icons/language/html.svg";
import JavaScript from "../assets/icons/language/JavaScript.svg";
import Java from "../assets/icons/language/Java.svg";
import PHP from "../assets/icons/language/Php.svg";
import Python from "../assets/icons/language/Python.svg";
import TypeScript from "../assets/icons/language/typescript-original.svg";

import React from "../assets/icons/frameworks/React.svg";
import Laravel from "../assets/icons/frameworks/laravel-plain.svg";
import NextJs from "../assets/icons/frameworks/nextjs-original.svg";
import Vite from "../assets/icons/frameworks/vite.svg";
import NodeJs from "../assets/icons/frameworks/nodejs-original.svg";
import PyTorch from "../assets/icons/frameworks/pytorch-original.svg";
import TensorFlow from "../assets/icons/frameworks/tensorflow-original.svg";

import Anaconda from "../assets/icons/others/anaconda-original.svg";
import AndroidStudio from "../assets/icons/others/androidstudio-original.svg";
import Composer from "../assets/icons/others/composer-original.svg";
import Figma from "../assets/icons/others/figma-original.svg";
import Github from "../assets/icons/others/github-original.svg";
import Gitlab from "../assets/icons/others/gitlab-original.svg";
import Jupyter from "../assets/icons/others/jupyter-original-wordmark.svg";
import Kaggle from "../assets/icons/others/kaggle-original-wordmark.svg";
import Tailwind from "../assets/icons/others/tailwindcss-plain.svg";
import GraphQL from "../assets/icons/database/graphql-plain.svg";
import SQL from "../assets/icons/database/sql.svg";

import Card from "../components/Card";

function Skills() {
  const languangeConfig = [
    { id: 1, name: "C++", image: C },
    { id: 2, name: "C#", image: CS },
    { id: 3, name: "CSS", image: CSS },
    { id: 4, name: "HTML", image: HTML },
    { id: 5, name: "JavaScript", image: JavaScript },
    { id: 6, name: "Java", image: Java },
    { id: 7, name: "PHP", image: PHP },
    { id: 8, name: "Python", image: Python },
    { id: 9, name: "TypeScript", image: TypeScript },
  ];

  const frameworkConfig = [
    { id: 1, name: "React", image: React },
    { id: 2, name: "Laravel", image: Laravel },
    { id: 3, name: "NextJs", image: NextJs },
    { id: 4, name: "Vite", image: Vite },
    { id: 5, name: "NodeJs", image: NodeJs },
    { id: 6, name: "PyTorch", image: PyTorch },
    { id: 7, name: "TensorFlow", image: TensorFlow },
  ];

  const othersConfig = [
    { id: 1, name: "Anaconda", image: Anaconda },
    { id: 2, name: "Android Studio", image: AndroidStudio },
    { id: 3, name: "Composer", image: Composer },
    { id: 4, name: "Figma", image: Figma },
    { id: 5, name: "Github", image: Github },
    { id: 6, name: "Gitlab", image: Gitlab },
    { id: 7, name: "Jupyter", image: Jupyter },
    { id: 8, name: "Kaggle", image: Kaggle },
    { id: 9, name: "Tailwind", image: Tailwind },
    { id: 10, name: "GraphQL", image: GraphQL },
    { id: 11, name: "SQL", image: SQL },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-10 p-10">
      <div className="p-5 bg-accent rounded-lg shadow-lg">
        <h1 className="text-bgc text-2xl font-black">SKILLS</h1>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10">
        <Card skillConfig={languangeConfig} title={"Programming Language"} />
        <Card skillConfig={frameworkConfig} title={"Frameworks"} />
        <div className="p-5 bg-content rounded-lg flex flex-col">
          <h2 className="text-bgc text-lg font-bold text-center">Others</h2>
          <div className="p-5 bg-content rounded-lg flex">
            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {othersConfig.map((config) => (
                <div key={config.id} className="flex flex-col items-center">
                  <img
                    src={config.image}
                    alt={config.name}
                    className="w-16 h-16 rounded-lg"
                  />
                  <div className="text-bgc text-base font-medium text-center mt-2">
                    {config.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
