import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

// caminho da imagem de fundo
import bgImage from "../assets/fundo.avif";

interface LoginFormData {
  email: string;
  senha: string;
}

function LoginTrabalho() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log("Login realizado:", data);
    // 👉 agora vai para HOME
    navigate("/home");
  };

  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleResetSubmit = () => {
    if (!resetEmail) {
      setMensagem("⚠️ Digite um e-mail válido.");
      return;
    }
    setMensagem(
      "✅ Se este e-mail estiver cadastrado, enviaremos instruções para redefinir sua senha."
    );
    setResetEmail("");
    setTimeout(() => {
      setShowReset(false);
      setMensagem("");
    }, 3000);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* topo escuro tecnológico */}
      <header className="flex items-center justify-between px-6 py-4 bg-black/60 backdrop-blur-md shadow-md">
        <h1 className="text-white text-lg md:text-xl font-bold tracking-wide">
          Plataforma Futuro do Trabalho
        </h1>

        <nav className="flex gap-6 text-white/80 text-sm font-medium">
          <button
            className="hover:text-white transition"
            onClick={() => navigate("/sobre")}
          >
            Sobre
          </button>
          <button
            className="hover:text-white transition"
            onClick={() => navigate("/contato")}
          >
            Contato
          </button>
        </nav>
      </header>

      {/* título principal com retângulo translúcido elegante */}
      <section className="flex justify-center px-4 mt-12 text-center">
        <div className="max-w-3xl bg-black/50 backdrop-blur-md px-6 py-6 rounded-2xl shadow-2xl border border-white/10">
          <h2 className="text-white font-extrabold tracking-wide text-3xl md:text-4xl drop-shadow-xl">
            Bem-vindo à Plataforma Futuro do Trabalho
          </h2>

          <p className="mt-3 text-base md:text-lg text-gray-200 font-medium drop-shadow">
            Use Inteligência Artificial para descobrir carreiras emergentes e
            planejar sua transição profissional.
          </p>
        </div>
      </section>

      {/* card de login */}
      <main className="flex flex-1 justify-center items-start px-4 mt-10 mb-10">
        <div className="bg-slate-900/85 backdrop-blur-lg shadow-2xl border border-white/10 p-8 md:p-10 rounded-2xl w-full max-w-lg text-white">
          <h3 className="text-center text-2xl font-bold mb-6 text-sky-300">
            Acesse sua conta
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            {/* email */}
            <div>
              <label className="text-sm font-medium text-gray-200">
                E-mail
              </label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                {...register("email", { required: "O e-mail é obrigatório" })}
                className="w-full mt-1 p-3 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* senha */}
            <div>
              <label className="text-sm font-medium text-gray-200">
                Senha
              </label>
              <input
                type="password"
                placeholder="Digite sua senha"
                {...register("senha", {
                  required: "A senha é obrigatória",
                  minLength: { value: 6, message: "Mínimo de 6 caracteres" },
                })}
                className="w-full mt-1 p-3 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm"
              />
              {errors.senha && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.senha.message}
                </p>
              )}
            </div>

            {/* esqueci senha */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowReset(true)}
                className="text-xs text-sky-300 hover:text-sky-200 hover:underline font-medium"
              >
                Esqueci minha senha
              </button>
            </div>

            {/* botões */}
            <div className="flex items-center justify-between gap-4 mt-2">
              <button
                type="submit"
                className="flex-1 bg-sky-500 hover:bg-sky-400 text-white py-3 rounded-lg font-semibold transition"
              >
                Entrar
              </button>

              <span className="text-gray-300 font-semibold text-sm">ou</span>

              <button
                type="button"
                onClick={() => navigate("/cadastro")}
                className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-white py-3 rounded-lg font-semibold transition"
              >
                Criar conta
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* modal redefinição */}
      {showReset && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-900 text-white p-6 rounded-xl shadow-2xl w-96 border border-slate-700">
            <h4 className="text-lg font-bold mb-3 text-sky-300">
              Redefinir senha
            </h4>

            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm"
            />

            <button
              onClick={handleResetSubmit}
              className="w-full bg-sky-500 hover:bg-sky-400 text-white py-2 mt-4 rounded-lg font-semibold transition"
            >
              Enviar link de recuperação
            </button>

            {mensagem && (
              <p className="text-xs text-gray-200 mt-2 text-center">
                {mensagem}
              </p>
            )}

            <button
              className="w-full mt-4 text-gray-300 hover:text-white hover:underline text-xs"
              onClick={() => setShowReset(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginTrabalho;
