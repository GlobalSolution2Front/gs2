import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/fundo.avif";
import NavBar from "../components/NavBar";

interface CadastroFormData {
  nome: string;
  email: string;
  senha: string;
  confirmacao: string;
}

function Cadastro() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CadastroFormData>();

  const onSubmit = (data: CadastroFormData) => {
    console.log("Cadastro:", data);
    navigate("/home");
  };

  const senha = watch("senha");

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <NavBar />

      <main className="flex-1 flex justify-center items-start px-4 py-10">
        <div className="w-full max-w-lg bg-slate-900/90 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-8 text-white">
          <h2 className="text-2xl font-bold text-sky-300 mb-2 text-center">
            Criar conta
          </h2>
          <p className="text-sm text-gray-200 mb-6 text-center">
            Cadastre-se para acessar o diagnóstico, carreiras e ferramentas de
            transição profissional.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-200">
                Nome completo
              </label>
              <input
                type="text"
                {...register("nome", { required: "O nome é obrigatório" })}
                className="w-full mt-1 p-3 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm"
                placeholder="Digite seu nome completo"
              />
              {errors.nome && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.nome.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-200">E-mail</label>
              <input
                type="email"
                {...register("email", { required: "O e-mail é obrigatório" })}
                className="w-full mt-1 p-3 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm"
                placeholder="Digite seu e-mail"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-200">Senha</label>
              <input
                type="password"
                {...register("senha", {
                  required: "A senha é obrigatória",
                  minLength: {
                    value: 6,
                    message: "Mínimo de 6 caracteres",
                  },
                })}
                className="w-full mt-1 p-3 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm"
                placeholder="Crie uma senha"
              />
              {errors.senha && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.senha.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-200">
                Confirmar senha
              </label>
              <input
                type="password"
                {...register("confirmacao", {
                  validate: (value) =>
                    value === senha || "As senhas não coincidem",
                })}
                className="w-full mt-1 p-3 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm"
                placeholder="Repita a senha"
              />
              {errors.confirmacao && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.confirmacao.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-sky-500 hover:bg-sky-400 text-white py-3 rounded-lg font-semibold transition"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Cadastro;
