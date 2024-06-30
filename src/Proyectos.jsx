import { PROYECTS } from "./proyects";
import Card from "./Card";

function Proyectos() {
  return (
    <div className="flex gap-2 justify-center mt-5" >
      {
        console.log(PROYECTS[0])
      }
      {PROYECTS?.map((p, index) => (<Card proyect={p} key={index}/>))}
    </div>
  );
}

export default Proyectos
// mt-4 text-black-500 px-4 py-2 border border-white/20 rounded-md transition-all text-white text-sm bg-white-500 transform hover:scale-105
//style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
