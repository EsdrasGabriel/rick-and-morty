import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DataFetch } from "../../../App";

const formSearchSchema = z.object({
  name: z.string(),
  status: z.string(),
  gender: z.string(),
});
type TypeFormSearchSchema = z.infer<typeof formSearchSchema>;

interface FormProps {
  setDataFetch: React.Dispatch<React.SetStateAction<DataFetch>>;
}

export const Form = (props: FormProps) => {
  const { register, handleSubmit } = useForm<TypeFormSearchSchema>({
    resolver: zodResolver(formSearchSchema),
  });

  const search = (data: TypeFormSearchSchema) => {
    props.setDataFetch({
      name: data.name,
      status: data.status,
      gender: data.gender,
    });
  };

  return (
    <nav className="flex items-center justify-center w-screen px-3 py-5 text-lg font-semibold bg-green-500 h-fit">
      <form className="flex flex-wrap gap-10" onSubmit={handleSubmit(search)}>
        <div className="flex items-center justify-center gap-1">
          <label htmlFor="name" className="text-xl font-bold text-white">Name:</label>
          <input type="text" {...register("name")} className="p-2 rounded-lg" />
        </div>
        <div className="flex items-center justify-center gap-1">
          <label htmlFor="status" className="text-xl font-bold text-white">
            Status:
          </label>
          <select
            {...register("status")}
            className="p-2 rounded-lg"
            onChange={(e) => e.target.value}
          >
            <option value="" placeholder="Enter Status"></option>
            <option value="alive">Vivo</option>
            <option value="dead">Morto</option>
            <option value="unknown">Desconhecido</option>
          </select>
        </div>
        <div className="flex items-center justify-center gap-1">
          <label htmlFor="gender" className="text-xl font-bold text-white">
            Gender:
          </label>
          <select
            {...register("gender")}
            className="p-2 rounded-lg"
            onChange={(e) => e.target.value}
          >
            <option value=""></option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
            <option value="genderless">Sem Gênero</option>
            <option value="unknown">Desconhecido</option>
          </select>
        </div>
        <button type="submit" className="px-5 py-2 bg-white rounded-lg">
          Buscar
        </button>
      </form>
    </nav>
  );
};
