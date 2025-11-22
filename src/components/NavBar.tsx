import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  const linkBase =
    "px-4 py-2 rounded-lg font-medium text-sm md:text-base transition";
  const active = "bg-sky-500 text-white shadow-md";
  const inactive = "text-gray-100 hover:bg-white/10 hover:text-white";

  return (
    <header className="w-full bg-black/70 backdrop-blur-md shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-400 to-emerald-400" />
          <span className="text-white font-bold text-lg md:text-xl tracking-wide">
            Plataforma Futuro do Trabalho
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          <Link
            to="/home"
            className={`${linkBase} ${
              location.pathname === "/home" ? active : inactive
            }`}
          >
            Início
          </Link>
          <Link
            to="/diagnostico"
            className={`${linkBase} ${
              location.pathname === "/diagnostico" ? active : inactive
            }`}
          >
            Diagnóstico
          </Link>
          <Link
            to="/carreiras"
            className={`${linkBase} ${
              location.pathname === "/carreiras" ? active : inactive
            }`}
          >
            Carreiras & Roadmap
          </Link>
          <Link
            to="/transicao"
            className={`${linkBase} ${
              location.pathname === "/transicao" ? active : inactive
            }`}
          >
            Transição
          </Link>
          <Link
            to="/integrantes"
            className={`${linkBase} ${
              location.pathname === "/integrantes" ? active : inactive
            }`}
          >
            Integrantes
          </Link>
          <Link
            to="/sobre"
            className={`${linkBase} ${
              location.pathname === "/sobre" ? active : inactive
            }`}
          >
            Sobre
          </Link>
          <Link
            to="/faq"
            className={`${linkBase} ${
              location.pathname === "/faq" ? active : inactive
            }`}
          >
            FAQ
          </Link>
          <Link
            to="/contato"
            className={`${linkBase} ${
              location.pathname === "/contato" ? active : inactive
            }`}
          >
            Contato
          </Link>
        </nav>

        {/* Mobile bem simples */}
        <Link
          to="/home"
          className="md:hidden text-white text-sm font-semibold underline"
        >
          Home
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
