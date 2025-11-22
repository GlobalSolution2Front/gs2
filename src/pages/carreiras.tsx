import { useState } from "react";
import bgImage from "../assets/fundo.avif";
import NavBar from "../components/NavBar";

interface Carreira {
  id: number;
  nome: string;
  compatibilidade: number;
  justificativa: string;
}

const MOCK_CAREERS: Carreira[] = [
  {
    id: 1,
    nome: "Especialista em Ética de IA",
    compatibilidade: 82,
    justificativa:
      "Forte base técnica e interesse em impacto social e governança de algoritmos.",
  },
  {
    id: 2,
    nome: "Designer de Experiências para Metaverso",
    compatibilidade: 68,
    justificativa:
      "Experiência com interfaces digitais e criatividade aplicada a novos ambientes virtuais.",
  },
  {
    id: 3,
    nome: "Analista de Carbono Digital",
    compatibilidade: 61,
    justificativa:
      "Boa base em dados e interesse em sustentabilidade e transformação climática.",
  },
];

function CarreirasPage() {
  const [careers, setCareers] = useState<Carreira[]>([]);
  const [carreiraAlvo, setCarreiraAlvo] = useState<Carreira | null>(null);

  const handleMapear = () => {
    setCareers(MOCK_CAREERS);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <NavBar />

      <main className="flex-1 px-4 py-8 flex justify-center">
        <div className="w-full max-w-5xl space-y-8">
          <section className="bg-slate-900/90 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 text-white">
            <h2 className="text-2xl font-bold text-emerald-300 mb-2">
              Mapeamento de Carreiras Emergentes
            </h2>
            <p className="text-sm md:text-base text-gray-200 mb-4">
              Com base no seu DNA profissional, a plataforma sugere carreiras
              emergentes projetadas para 2025–2030 e calcula um índice de
              compatibilidade.
            </p>

            <button
              onClick={handleMapear}
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Calcular compatibilidade
            </button>

            <ul className="mt-5 space-y-4">
              {careers.map((c) => (
                <li
                  key={c.id}
                  className="bg-slate-800/90 border border-white/10 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {c.nome}
                    </h3>
                    <p className="text-sm text-gray-200 mt-1">
                      {c.justificativa}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-emerald-300">
                      {c.compatibilidade}% de compatibilidade
                    </p>
                    <button
                      className="mt-2 text-xs bg-emerald-500 hover:bg-emerald-400 text-white px-3 py-1 rounded-lg font-semibold"
                      onClick={() => setCarreiraAlvo(c)}
                    >
                      Gerar roadmap
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {carreiraAlvo && (
            <section className="bg-slate-900/90 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 text-white space-y-4">
              <h3 className="text-xl font-bold text-emerald-300">
                Roadmap para {carreiraAlvo.nome}
              </h3>
              <p className="text-sm text-gray-200">
                Exemplo de roadmap simplificado para demonstrar a lógica da
                plataforma.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h4 className="font-semibold mb-1 text-sky-300">
                    Habilidades dominadas
                  </h4>
                  <ul className="text-sm text-gray-100 space-y-1">
                    <li>• Análise de dados</li>
                    <li>• Programação básica</li>
                    <li>• Comunicação escrita</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-amber-300">
                    Habilidades a desenvolver
                  </h4>
                  <ul className="text-sm text-gray-100 space-y-1">
                    <li>• Governança e ética em IA</li>
                    <li>• Legislação digital</li>
                    <li>• Design de políticas internas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-purple-300">
                    Cursos & certificações
                  </h4>
                  <ul className="text-sm text-gray-100 space-y-1">
                    <li>• Curso de Ética em Inteligência Artificial</li>
                    <li>• Certificação em Responsible AI</li>
                    <li>• Workshop de Governança de Dados</li>
                  </ul>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default CarreirasPage;
