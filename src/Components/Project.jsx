import React from "react";
import project1 from "../Images/portfolio.png";
import project2 from "../Images/gefys.png";
import project3 from "../Images/risoles.png";
import project4 from "../Images/Bookshelf.png";
import project5 from "../Images/Calculator React.png";
import project6 from "../Images/kopi kenangan wpu.png";
import project7 from "../Images/punipun7.png";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: project1,
    title: "Simple Web Portfolio",
    description: "website portfolio sederhana dengan html,css dan js",
    links: {
      site: "https://alfarabygit.github.io/alby-portofolio/",
      github: "https://github.com/alfarabygit/alby-portofolio",
    },
  },
  {
    img: project2,
    title: "GEFYS",
    description: "Game sederhana dengan software construct 2",
    links: {
      site: "https://indracode.itch.io/gefys",
      github: "https://github.com/alfarabygit/GEFYS",
    },
  },
  {
    img: project3,
    title: "Web Risoles Umi",
    description: "Web makanan sederhana dengan html,css dan js.",
    links: {
      site: "https://alfarabygit.github.io/risoles-umi/",
      github: "https://github.com/alfarabygit/risoles-umi",
    },
  },
  {
    img: project4,
    title: "Bookshelf",
    description: "Projek submission dicoding front end web pemula dengan html,css dan js",
    links: {
      site: "https://alfarabygit.github.io/bookshelf/",
      github: "https://github.com/alfarabygit/bookshelf",
    },
  },
  {
    img: project5,
    title: "React Calculator App",
    description: "Membuat Kalkulator sederhana dengan reactjs",
    links: {
      site: "https://alfarabygit.github.io/calculator-app/",
      github: "https://github.com/alfarabygit/calculator-app",
    },
  },
  {
    img: project6,
    title: "Web Kopi wpu",
    description: "Membuat website kedai kopi wpu dengan html,css js",
    links: {
      site: "https://alfarabygit.github.io/coffee-web/",
      github: "https://github.com/alfarabygit/coffee-web",
    },
  },
  {
    img: project7,
    title: "Punipun7 Web Fanmade",
    description: "Membuat website punipun fanmade dengan html,css,js aos, scrollreveal,swiperjs dan fancybox",
    links: {
      site: "https://alfarabygit.github.io/punipun7web-fanmade/",
      github: "https://github.com/alfarabygit/punipun7web-fanmade",
    },
  },
];
const Project = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="projects">
      <h2 className="mb-8 text-3xl font-bold text-gray-200">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal>
          <div key={index} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} mb-12`}>
            <div className="w-full p-4 md:w-1/2">
              <img src={project.img} alt={project.title} className="object-cover w-full h-full rounded-lg shadow-lg" />
            </div>
            <div className="flex flex-col justify-center w-full p-4 md:w-1/2">
              <h3 className="mb-4 text-2xl font-semibold text-gray-200">{project.title}</h3>
              <p className="mb-4 text-gray-300">{project.description}</p>
              <div className="flex space-x-4">
                <a target="_blank" href={project.links.site} className="px-4 py-2 text-gray-200 transition duration-300 rounded-lg bg-slate-600 hover:bg-slate-700">
                  View Site
                </a>
                <a target="_blank" href={project.links.github} className="px-4 py-2 text-gray-200 transition duration-300 rounded-lg bg-slate-600 hover:bg-slate-700">
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Project;
