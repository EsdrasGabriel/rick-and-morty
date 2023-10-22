import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { DataInfos } from "../App";

interface FilteredCharacterInfos extends DataInfos {
  species: string;
  origin: string;
  location: string;
  episode: string[];
}

export const CharacterInfos = () => {
  const { id } = useParams();

  const { data, isFetching } = useQuery<FilteredCharacterInfos[]>({
    queryKey: ["character"],
    queryFn: async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      return [response.data];
    },
  });

  return (
    <>
      <nav className="w-screen bg-green-500">
        <Link to={`/`}>Voltar</Link>
      </nav>
      {isFetching && <span>Carregando...</span>}
      {data?.map((data: FilteredCharacterInfos) => {
        return (
          <div key={data.id} className="flex flex-col items-center justify-center gap-1 w-fit h-fit">
            <img src={data.image} alt="Imagem do Personagem" />
            <h1 className="text-2xl font-semibold">{data.name}</h1>
          </div>
        );
      })}
    </>
  );
};
