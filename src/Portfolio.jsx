import React from "react";
import Download from "./icons/Download";
import Proyectos from "./Proyectos";

function Portfolio() {
  return (
    <div>
      <div className="absolute top-0 z-[-2] min-h-screen h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] flex flex-col items-center justify-center"></div>{" "}
      {/* Soy el fondo uwu */}
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-white font-bold text-5xl md:text-6xl mb-5">
            Santiago Traba
          </h1>
          <span className="text-lg text-white/80">
            Desarrollador Full Stack
          </span>
          <hr className="my-2 w-64 h-[2px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
        </div>
        <div className="flex gap-2 flex-col md:mx-40 mx-10 text-white text-center justify-center">
          <p>
            ¿Quien soy? Soy un programador Full-Stack orientado al diseño
            Front-end y creacion del material visual.
          </p>
          <p>
            ¿Que hago? Actualmente me dedico a realizar proyectos que me
            permiten avanzar en mi formacion como programador. Me fascina poder
            encontrar la solucion a los problemas con codigo.
          </p>
          <p>
            ¿A donde me dirijo? Mi objetivo principal es impactar el mundo con
            codigo.
          </p>
          <p>
            ¿Que tecnologias uso? El bootcamp de Henry me ha permitido adquirir
            el conocimiento y experiencia fundamental para despegar por lo que
            las principales tecnologias que manejo son: JavaScript, React.js,
            Node.js, Express.js, PostgreSQL, Sequelize, GIT, HTML, CSS, Redux,
            MongoDB, DaisyUI, Tailwind, Entre otras herramientas, tengo
            conocimiento de Jira para la organizacion de tareas del equipo.
          </p>
        </div>

        <a
          href="Cv.pdf"
          target="_blank"
          className="bg-white px-4 py-2 rounded-md mt-5 flex justify-center gap-2 hover:scale-[105%] transition-all w-56"
        >
          <Download className="h-6 w-6" />
          <span className="font-semibold ">Accede a mi CV</span>
        </a>
        <div>
        <h2 className="text-2xl font-bold text-white mb-4">
  Conoce mis proyectos
</h2>
      </div>
      <div className="mt-4">
      <Proyectos />
      </div>
      </div>
      </div>
  );
}

export default Portfolio;
