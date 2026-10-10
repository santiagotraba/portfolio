import Portfolio from "./Portfolio";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper focus:outline-none"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <Portfolio />
    </>
  );
}

export default App;
