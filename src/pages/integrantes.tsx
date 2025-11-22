import bgImage from "../assets/fundo.avif";
import NavBar from "../components/NavBar";

interface Integrante {
  nome: string;
  rm: string;
  turma: string;
  github: string;
  linkedin: string;
  foto?: string; // já existia – mantido
}

const INTEGRANTES: Integrante[] = [
  {
    nome: "Julia Queiroz de Oliveira",
    rm: "RM561583",
    turma: "1TDSPI",
    github: "https://github.com/Ju-queiroz",
    linkedin: "https://www.linkedin.com/in/julia-queiroz-de-oliveira-180576379/",
    foto: "../julia.jpg",
  },
  {
    nome: "Leticia Santiago e Silva",
    rm: "RM565799",
    turma: "1TDSPI",
    github: "https://github.com/santiago-leticia",
    linkedin:
      "https://www.linkedin.com/in/leticia-santiago-6b9219354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    foto: "../leticia.png",
  },
  {
    nome: "Juliana  Da Silva Stigliani",
    rm: "RM561171",
    turma: "1TDSPJ",
    github: "https://github.com/justigliani",
    linkedin: "https://www.linkedin.com/in/usuario3",
    foto: "../juliana.jpg",
  },
];

function Integrantes() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <NavBar />

      <main className="flex-1 px-4 py-10 flex justify-center">
        <div className="w-full max-w-5xl bg-slate-900/90 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-300 mb-6 text-center">
            Integrantes do Projeto
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {INTEGRANTES.map((int) => (
              <div
                key={int.rm}
                className="bg-slate-800/90 border border-white/10 rounded-xl p-5 text-center shadow-lg"
              >
                {/* 🔥 Agora as fotos aparecem corretamente */}
                {int.foto && (
                  <img
                    src={int.foto}
                    alt={int.nome}
                    className="w-28 h-28 mx-auto rounded-full object-cover mb-3 border-2 border-sky-400 shadow-lg"
                  />
                )}

                <h3 className="text-lg font-semibold text-white">{int.nome}</h3>
                <p className="text-sm text-gray-300 mt-1">RM: {int.rm}</p>
                <p className="text-sm text-gray-300">Turma: {int.turma}</p>

                <div className="mt-4 flex flex-col gap-2 text-sm">
                  <a
                    href={int.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-300 hover:text-sky-200 underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={int.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-300 hover:text-sky-200 underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Integrantes;
