import bgImage from "../assets/fundo.avif";
import NavBar from "../components/NavBar";
import { useForm } from "react-hook-form";

interface ContatoForm {
  nome: string;
  email: string;
  mensagem: string;
}

function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContatoForm>();

  const onSubmit = (data: ContatoForm) => {
    console.log("Contato:", data);
    alert("Mensagem enviada! (simulação)");
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <NavBar />

      <main className="flex-1 px-4 py-10 flex justify-center">
        <div className="w-full max-w-4xl bg-slate-900/90 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-300 mb-4">
            Contato
          </h2>
          <p className="text-sm md:text-base text-gray-100 mb-6">
            Use este canal para enviar dúvidas, comentários ou sugestões sobre a
            plataforma.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-200">
                Nome
              </label>
              <input
                type="text"
                {...register("nome", { required: "Informe seu nome" })}
                className="w-full mt-1 p-3 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm"
              />
              {errors.nome && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.nome.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-200">
                E-mail
              </label>
              <input
                type="email"
                {...register("email", { required: "Informe seu e-mail" })}
                className="w-full mt-1 p-3 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-200">
                Mensagem
              </label>
              <textarea
                rows={4}
                {...register("mensagem", {
                  required: "Digite uma mensagem",
                })}
                className="w-full mt-1 p-3 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm"
              />
              {errors.mensagem && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.mensagem.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-400 text-white py-3 px-6 rounded-lg font-semibold transition"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Contato;
