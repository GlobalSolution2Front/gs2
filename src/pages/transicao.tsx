import { useState } from "react";
import bgImage from "../assets/fundo.avif";
import NavBar from "../components/NavBar";

interface Tarefa {
  id: number;
  titulo: string;
  status: "todo" | "done";
}

function TransicaoPage() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState<Tarefa[]>([
    { id: 1, titulo: "Concluir curso de Ética em IA", status: "todo" },
    {
      id: 2,
      titulo: "Atualizar LinkedIn com novo objetivo de carreira",
      status: "todo",
    },
  ]);

  const handleAdd = () => {
    if (!novaTarefa.trim()) return;
    const nova: Tarefa = {
      id: Date.now(),
      titulo: novaTarefa.trim(),
      status: "todo",
    };
    setTarefas((prev) => [...prev, nova]);
    setNovaTarefa("");
  };

  const toggleStatus = (id: number) => {
    setTarefas((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: t.status === "done" ? "todo" : "done" } : t
      )
    );
  };

  const concluidas = tarefas.filter((t) => t.status === "done").length;
  const progresso = tarefas.length
    ? Math.round((concluidas / tarefas.length) * 100)
    : 0;

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <NavBar />

      <main className="flex-1 px-4 py-8 flex justify-center">
        <div className="w-full max-w-5xl space-y-6">
          <section className="bg-slate-900/90 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 text-white">
            <h2 className="text-2xl font-bold text-purple-300 mb-2">
              Gestão da Transição Profissional
            </h2>
            <p className="text-sm md:text-base text-gray-200 mb-4">
              Transforme o roadmap em um plano de ação com metas e tarefas. A
              ideia aqui é simular um painel simples de acompanhamento de
              evolução.
            </p>

            <div className="flex gap-3 mt-2">
              <input
                type="text"
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                placeholder="Ex: Aplicar para vaga júnior em Ética de IA"
                className="flex-1 p-3 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              />
              <button
                onClick={handleAdd}
                className="px-5 py-2 rounded-lg bg-purple-500 hover:bg-purple-400 font-semibold text-white text-sm"
              >
                Adicionar
              </button>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="bg-slate-900/90 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-lg font-bold text-white mb-3">
                Tarefas do plano
              </h3>
              {tarefas.length === 0 ? (
                <p className="text-sm text-gray-300">
                  Nenhuma tarefa cadastrada ainda.
                </p>
              ) : (
                <ul className="space-y-2">
                  {tarefas.map((t) => (
                    <li
                      key={t.id}
                      className={`flex items-center justify-between text-sm rounded-lg px-3 py-2 ${
                        t.status === "done"
                          ? "bg-emerald-600/40 line-through text-gray-200"
                          : "bg-slate-800/90"
                      }`}
                    >
                      <span>{t.titulo}</span>
                      <button
                        onClick={() => toggleStatus(t.id)}
                        className="text-xs px-3 py-1 rounded-md bg-slate-700 hover:bg-slate-600 text-white"
                      >
                        {t.status === "done" ? "Refazer" : "Concluir"}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="bg-slate-900/90 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-lg font-bold text-white mb-3">
                Progresso da transição
              </h3>
              <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-emerald-400"
                  style={{ width: `${progresso}%` }}
                />
              </div>
              <p className="text-sm text-gray-200 mb-4">
                {progresso}% do plano concluído ({concluidas} de{" "}
                {tarefas.length} tarefas).
              </p>

              <p className="text-xs text-gray-300">
                Dica: você pode usar este módulo para acompanhar metas como
                “concluir curso X”, “entregar projeto Y” ou “atualizar
                portfólio” durante a transição para uma nova carreira.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default TransicaoPage;
