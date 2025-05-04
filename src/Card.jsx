import React from "react";

function Card({ proyect }) {
  return (
    <div className="text-white rounded-md overflow-hidden bg-white/30">
      <img
        src={proyect?.media}
        alt={proyect?.name}
        className="h-auto max-h-[200px] w-full object-cover"
      />
      <div className="p-2 space-y-1">
        <h2 className="font-semibold text-lg">{proyect?.name}</h2>
        <p className="text-sm">{proyect?.description}</p>
        <a
          className="block text-blue-300 hover:underline"
          href={proyect?.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Web
        </a>
        <a
          className="block text-blue-300 hover:underline"
          href={proyect?.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Card;
