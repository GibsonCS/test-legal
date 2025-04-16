import { useForm } from "react-hook-form";
import { Handshake } from "lucide-react";
import { useState } from "react";
import { Result } from "../Components/Result/Index";

interface FormInput {
  name: string;
  idAreaOfInteresse: string;
  idLocalization: string;
}

export const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const [users, setUsers] = useState([]);
  const [result, setResult] = useState(false);

  const handleForm = async (data: FormInput) => {
    const response = await fetch("http://localhost:3000/api/find-connection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setUsers(await response.json());
    setResult(true);
  };

  return (
    <section className="flex flex-col h-full items-center p-24">
      {!result && (
        <div className="flex flex-col items-center w-max p-6  shadow-sm rounded-md">
          <h1 className="italic w-max text-2xl pb-6 flex items-center gap-2">
            <Handshake /> Entre com os dados para buscar pessoas compatíveis{" "}
            <Handshake />
          </h1>
          <form
            className="flex flex-col text-center w-max p-8 gap-4 text-xl"
            onSubmit={handleSubmit(handleForm)}
          >
            <label htmlFor="name">Nome seu nome</label>
            <input
              className="border rounded-md bg-sky-50 text-sky-950"
              type="text"
              {...register("name", { required: "O campo nome é obrigatório" })}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}

            <label htmlFor="areaOfInteresse">Área de interesse</label>
            <select
              className="bg-sky-700 border border-sky-900 rounded-md"
              {...register("idAreaOfInteresse")}
            >
              <option value="0">Tecnologia</option>
              <option value="1">Saúde</option>
              <option value="2">Esporte</option>
              <option value="3">Educação</option>
              <option value="4">Culinária</option>
              <option value="5">Cosméticos</option>
            </select>
            <label htmlFor="location">Localização</label>
            <select
              className="bg-sky-700 border border-sky-900 rounded-md"
              {...register("idLocalization")}
            >
              <option value="0">São Paulo</option>
              <option value="1">Rio de Janeiro</option>
              <option value="2">Minas</option>
              <option value="2">Brasilia</option>
              <option value="3">Acre</option>
              <option value="5">Manaus</option>
            </select>
            <button
              className="border border-slate-900 rounded-md p-1 mt-5 hover:cursor-pointer bg-gradient-to-bl from-slate-900 to-slate-400 hover:shadow-md hover:shadow-sky-300 transition-all duration-500"
              type="submit"
            >
              Buscar conexões
            </button>
          </form>
        </div>
      )}
      {result && (
        <div className="flex flex-col items-center gap-3">
          <Result users={users} />
          <button
            type="button"
            onClick={() => setResult(false)}
            className="border w-max p-0.5 rounded-md hover:cursor-pointer hover:scale-95 transition-all duration-500 hover:shadow-md shadow-sky-100"
          >
            Voltar
          </button>
        </div>
      )}
    </section>
  );
};
