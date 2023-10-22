import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSearchSchema = z.object({
  name: z.string(),
  status: z.string(),
  gender: z.string(),
});
type TypeFormSearchSchema = z.infer<typeof formSearchSchema>;

export const Form = () => {
  const { register, handleSubmit } = useForm<TypeFormSearchSchema>({
    resolver: zodResolver(formSearchSchema),
  });

  const algo = () => {

  }

  return (
    <nav className="flex items-center justify-center w-screen px-3 py-5 text-lg font-semibold bg-green-500 h-fit">
      <form className="flex flex-wrap gap-10" onSubmit={handleSubmit(algo)}>
        <input type="text" placeholder="Informe o Nome" {...register('name')} className="p-2 rounded-lg"/>
        <select placeholder="Informe o Status" {...register('status')} className="p-2 rounded-lg">
          <option value="alive">Vivo</option>
          <option value="dead">Morto</option>
          <option value="unknown">Desconhecido</option>
        </select>
        <select placeholder="Informe o Gênero" {...register('gender')} className="p-2 rounded-lg">
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="genderless">Sem Gênero</option>
          <option value="unknown">Desconhecido</option>
        </select>
        <button type="submit" className="px-5 py-2 bg-white rounded-lg">Buscar</button>
      </form>
    </nav>
  );
};
