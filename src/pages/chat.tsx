import { useState, type FormEvent } from "react";

import bgImage from "../assets/fundo.avif";
import NavBar from "../components/NavBar";

type MessageSender = "user" | "bot";

interface Message {
  id: number;
  sender: MessageSender;
  text: string;
  timestamp: string;
}

function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "Olá! 👋 Sou sua assistente da Plataforma Futuro do Trabalho. Posso te ajudar com currículo, carreira ou transição profissional. Sobre o que você quer falar hoje?",
      timestamp: "agora",
    },
  ]);
  const [input, setInput] = useState("");

  function formatTime() {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}`;
  }

  function buildBotAnswer(userText: string): string {
    const text = userText.toLowerCase();

    if (text.includes("curriculo") || text.includes("cv")) {
      return (
        "Currículo idealmente tem 1 a 2 páginas, focando em resultados. " +
        "Comece com um resumo profissional, destaque experiências recentes, " +
        "projetos relevantes e habilidades técnicas/comportamentais. " +
        "Se quiser, posso sugerir estrutura de seções pra você."
      );
    }

    if (text.includes("trabalho") || text.includes("vaga") || text.includes("emprego")) {
      return (
        "Para se candidatar a vagas, adapte seu currículo para a descrição da vaga " +
        "e use palavras-chave parecidas. Também vale manter um perfil ativo no LinkedIn " +
        "e participar de comunidades da sua área."
      );
    }

    if (text.includes("junior") || text.includes("estagio") || text.includes("estágio")) {
      return (
        "Para oportunidades júnior/estágio, foque em projetos práticos: " +
        "portfólio no GitHub, participação em desafios e cursos. " +
        "Reforce no currículo o que você já construiu, mesmo que não seja experiência formal."
      );
    }

    if (text.includes("transicao") || text.includes("transição") || text.includes("migrar")) {
      return (
        "Em transição de carreira, é importante mapear suas habilidades atuais " +
        "e ver o que já é aproveitável na nova área. Depois, defina um plano com " +
        "etapas de estudo, projetos e networking. Você quer migrar para qual área?"
      );
    }

    return (
      "Entendi! 👍 Posso te ajudar com: currículo, como se preparar para vagas, " +
      "transição de carreira ou como usar a plataforma. Me conta um pouco mais " +
      "do seu objetivo pra eu responder de forma mais específica."
    );
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const time = formatTime();

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: trimmed,
      timestamp: time,
    };

    const botMessage: Message = {
      id: Date.now() + 1,
      sender: "bot",
      text: buildBotAnswer(trimmed),
      timestamp: time,
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  }

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <NavBar />

      <main className="flex-1 flex justify-center px-4 py-8">
        <section className="w-full max-w-4xl bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Cabeçalho */}
          <header className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-white">
                Assistente de Carreira & Currículo
              </h1>
              <p className="text-xs md:text-sm text-gray-300">
                Tire dúvidas sobre mercado de trabalho, currículo e transição profissional.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-gray-300">Online</span>
            </div>
          </header>

          {/* Área de mensagens */}
          <div className="flex-1 px-4 md:px-6 py-4 space-y-4 overflow-y-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm md:text-base shadow-lg border
                    ${
                      msg.sender === "user"
                        ? "bg-emerald-600/90 border-emerald-300 text-white rounded-br-sm"
                        : "bg-slate-900/90 border-sky-400/60 text-gray-100 rounded-bl-sm"
                    }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span className="mt-1 block text-[10px] text-gray-200/70 text-right">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="px-4 md:px-6 py-4 border-t border-white/10 bg-black/40 flex items-center gap-3"
          >
            <input
              type="text"
              placeholder="Digite sua dúvida sobre currículo, trabalho ou transição de carreira..."
              className="flex-1 bg-slate-900/80 border border-slate-600 focus:border-sky-400 outline-none rounded-xl px-4 py-2 text-sm md:text-base text-white placeholder:text-gray-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 md:px-5 py-2 rounded-xl text-sm md:text-base font-medium bg-sky-600 hover:bg-sky-500 text-white shadow-lg transition-transform hover:scale-105"
            >
              Enviar
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default ChatPage;
