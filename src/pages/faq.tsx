import bgImage from "../assets/fundo.avif";
import NavBar from "../components/NavBar";

const FAQ_ITEMS = [
  {
    pergunta: "O que é o DNA Profissional?",
    resposta:
      "É um resumo das suas habilidades técnicas, comportamentais e experiências relevantes, gerado a partir do seu currículo ou questionário.",
  },
  {
    pergunta: "As profissões sugeridas são vagas reais?",
    resposta:
      "Não. A plataforma trabalha com carreiras emergentes projetadas para os próximos anos, como um guia de direcionamento, não como um site de vagas.",
  },
  {
    pergunta: "Preciso pagar para usar a plataforma?",
    resposta:
      "No contexto deste projeto acadêmico, todas as funcionalidades são simuladas e gratuitas.",
  },
  {
    pergunta: "Os dados inseridos são salvos em algum lugar?",
    resposta:
      "Nesta versão, os dados são tratados apenas no front-end, sem armazenamento real em banco de dados.",
  },
];

function Faq() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <NavBar />

      <main className="flex-1 px-4 py-10 flex justify-center">
        <div className="w-full max-w-4xl bg-slate-900/90 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-300 mb-4">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.pergunta}
                className="bg-slate-800/90 rounded-xl border border-white/10 p-4"
              >
                <h3 className="text-sm md:text-base font-semibold text-white mb-1">
                  {item.pergunta}
                </h3>
                <p className="text-sm text-gray-200">{item.resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Faq;
