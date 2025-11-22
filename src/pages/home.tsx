import { Link } from "react-router-dom";
import bgImage from "../assets/fundo.avif";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <NavBar />

      <main className="flex flex-col items-center px-4 py-10">

        {/* TÍTULO */}
        <section className="max-w-4xl w-full bg-black/55 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl px-6 md:px-10 py-8 text-center text-white mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Bem-vindo à Plataforma Futuro do Trabalho
          </h1>
          <p className="text-sm md:text-lg text-gray-200">
            Use Inteligência Artificial para analisar seu perfil, descobrir
            carreiras emergentes e planejar uma transição profissional estruturada.
          </p>
        </section>

        {/* CARDS DE NAVEGAÇÃO */}
        <section className="max-w-5xl w-full grid gap-6 md:grid-cols-3">

          {/* DIAGNÓSTICO */}
          <Link to="/diagnostico" className="hover:scale-105 transition-all">
            <div className="bg-slate-900/85 border border-sky-500/40 hover:border-sky-400 rounded-2xl shadow-xl p-6 text-white flex flex-col justify-between">
              <h2 className="text-xl font-bold text-sky-300 mb-2">Diagnóstico & DNA</h2>
              <p className="text-sm text-gray-200">
                Envie seu currículo e gere um DNA profissional com habilidades e
                experiências analisadas por IA.
              </p>
            </div>
          </Link>

          {/* CARREIRAS */}
          <Link to="/carreiras" className="hover:scale-105 transition-all">
            <div className="bg-slate-900/85 border border-emerald-500/40 hover:border-emerald-400 rounded-2xl shadow-xl p-6 text-white flex flex-col justify-between">
              <h2 className="text-xl font-bold text-emerald-300 mb-2">
                Carreiras & Roadmap
              </h2>
              <p className="text-sm text-gray-200">
                Veja profissões emergentes, índice de compatibilidade e receba um roadmap completo.
              </p>
            </div>
          </Link>

          {/* TRANSIÇÃO PROFISSIONAL */}
          <Link to="/transicao" className="hover:scale-105 transition-all">
            <div className="bg-slate-900/85 border border-purple-500/40 hover:border-purple-400 rounded-2xl shadow-xl p-6 text-white flex flex-col justify-between">
              <h2 className="text-xl font-bold text-purple-300 mb-2">
                Gestão da Transição
              </h2>
              <p className="text-sm text-gray-200">
                Organize metas, tarefas, progresso e relatórios da sua migração profissional.
              </p>
            </div>
          </Link>

        </section>

      </main>
    </div>
  );
}

export default Home;
