import { useState } from "react";
import bgImage from "../assets/fundo.avif";
import NavBar from "../components/NavBar";

interface DnaProfissional {
  habilidadesTecnicas: string[];
  habilidadesPessoais: string[];
  experiencias: string[];
}

function DiagnosticoPage() {
  const [cvTexto, setCvTexto] = useState("");
  const [dna, setDna] = useState<DnaProfissional | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGerarDNA = () => {
    if (!cvTexto.trim()) return;
    setLoading(true);

    setTimeout(() => {
      setDna({
        habilidadesTecnicas: [
          "Análise de Dados",
          "Modelagem de IA",
          "Desenvolvimento Web",
        ],
        habilidadesPessoais: [
          "Pensamento crítico",
          "Comunicação clara",
          "Adaptabilidade",
        ],
        experiencias: [
          "3 anos em desenvolvimento de software",
          "2 anos atuando com automação de processos",
        ],
      });
      setLoading(false);
    }, 800);
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
            <h2 className="text-2xl font-bold text-sky-300 mb-2">
              Diagnóstico & DNA Profissional
            </h2>
            <p className="text-sm md:text-base text-gray-200 mb-4">
              Cole seu currículo ou escreva um resumo profissional. A
              plataforma usará IA (simulada) para identificar suas habilidades
              e experiências.
            </p>

            <textarea
              value={cvTexto}
              onChange={(e) => setCvTexto(e.target.value)}
              placeholder="Cole aqui seu currículo ou um resumo das suas experiências..."
              className="w-full h-40 md:h-52 p-3 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm"
            />

            <div className="flex justify-end mt-4">
              <button
                onClick={handleGerarDNA}
                disabled={!cvTexto.trim() || loading}
                className="bg-sky-500 hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-2 rounded-lg transition"
              >
                {loading ? "Gerando DNA..." : "Gerar DNA Profissional"}
              </button>
            </div>
          </section>

          {dna && (
            <section className="grid gap-6 md:grid-cols-3">
              <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-5 text-white">
                <h3 className="text-lg font-bold text-sky-300 mb-2">
                  Habilidades Técnicas
                </h3>
                <ul className="space-y-1 text-sm text-gray-100">
                  {dna.habilidadesTecnicas.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-5 text-white">
                <h3 className="text-lg font-bold text-emerald-300 mb-2">
                  Habilidades Comportamentais
                </h3>
                <ul className="space-y-1 text-sm text-gray-100">
                  {dna.habilidadesPessoais.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-5 text-white">
                <h3 className="text-lg font-bold text-purple-300 mb-2">
                  Experiências Relevantes
                </h3>
                <ul className="space-y-1 text-sm text-gray-100">
                  {dna.experiencias.map((exp) => (
                    <li key={exp}>• {exp}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default DiagnosticoPage;
