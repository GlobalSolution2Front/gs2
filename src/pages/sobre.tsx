import bgImage from "../assets/fundo.avif";
import NavBar from "../components/NavBar";

function Sobre() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <NavBar />

      <main className="flex-1 px-4 py-10 flex justify-center">
        <div className="w-full max-w-4xl bg-slate-900/90 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-8 text-white space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-300">
            Sobre a Plataforma
          </h2>

          <p className="text-sm md:text-base text-gray-100 leading-relaxed">
            A <span className="font-semibold">Plataforma Futuro do Trabalho</span>{" "}
            é uma solução digital que utiliza Inteligência Artificial para
            apoiar profissionais na transição para carreiras emergentes entre
            2025 e 2030.
          </p>

          <p className="text-sm md:text-base text-gray-100 leading-relaxed">
            A partir do currículo ou de um questionário, o sistema gera um{" "}
            <strong>DNA Profissional</strong>, mapeando habilidades técnicas e
            comportamentais, experiências relevantes e possíveis caminhos de
            evolução. Com base nisso, o usuário recebe recomendações de
            profissões do futuro, cursos, certificações e um roadmap de
            desenvolvimento.
          </p>

          <p className="text-sm md:text-base text-gray-100 leading-relaxed">
            Este projeto foi desenvolvido como trabalho acadêmico, integrando
            conceitos de engenharia de software, modelagem de negócios,
            experiência do usuário e uso aplicado de IA.
          </p>

          <ul className="list-disc list-inside text-sm md:text-base text-gray-100 space-y-1">
            <li>Diagnóstico e geração de DNA Profissional;</li>
            <li>Mapeamento de carreiras emergentes e índice de compatibilidade;</li>
            <li>Roadmap personalizado de desenvolvimento;</li>
            <li>Gestão da transição com metas, tarefas e indicadores.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Sobre;
