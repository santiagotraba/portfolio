import React from "react";
import { Link } from "react-router-dom" // TONI INSTALAME y mejorame

function Card({ proyect, index }) {
  return (
    <div className="text-white rounded-md overflow-hidden bg-white/30">
      <img
        src={proyect?.media}
        alt={proyect?.name}
        className="h-auto max-h-[200px] "
      />
      <div className="p-2 "> 
        <h2 className="">{proyect?.name}</h2>
        <p>{proyect?.description}</p>
        <Link className="w-full flex justify-start p-1" to={proyect?.url}>Web</Link>
        <Link className="w-full flex justify-start p-1" to={proyect?.github}>Github</Link>
      </div>
    </div>
  );
}

export default Card;

// mt-4 text-black-500 px-4 py-2 border border-white/20 rounded-md transition-all text-white text-sm bg-white-500 transform hover:scale-105
//style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
