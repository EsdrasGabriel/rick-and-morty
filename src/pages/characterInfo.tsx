import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Outlet, useParams } from "react-router-dom";
import { DataInfos } from "../components/Home/Characters";

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
      <Outlet />
      {isFetching && <span>Carregando...</span>}
      {data?.map((data: FilteredCharacterInfos) => {
        return (
          <div key={data.id}>
            <img src={data.image} alt="Imagem do Personagem" />
            <h1>{data.name}</h1>
          </div>
        );
      })}
    </>
  );
};
