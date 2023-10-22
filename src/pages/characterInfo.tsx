import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { DataInfos } from "../App";

interface FilteredCharacterInfos extends DataInfos {
  species: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
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
      <nav className="flex items-center justify-center w-screen py-5 bg-green-500">
        <Link
          to={`/`}
          className="px-3 py-1 text-xl font-bold rounded-lg bg-zinc-50"
        >
          Voltar
        </Link>
      </nav>
      <section className="flex flex-col items-center justify-center px-5 mt-5">
        {isFetching && <span>Carregando...</span>}
        {data?.map((data: FilteredCharacterInfos) => {
          return (
            <div
              key={data.id}
              className="flex flex-wrap h-full gap-10 p-5 border-2 border-green-500 rounded-lg w-fit max-lg:flex-col"
            >
              <div className="flex flex-col items-center justify-center gap-1">
                <img
                  src={data.image}
                  alt="Imagem do Personagem"
                  className="rounded-lg w-96"
                />
                <h1 className="text-3xl font-bold">{data.name}</h1>
              </div>
              <div className="flex flex-col items-center gap-3 px-5 py-2">
                <div className="w-full">
                  <h3 className="text-5xl font-bold text-green-500">Infos</h3>
                  <div className="flex flex-col w-full gap-5">
                    <p className="text-2xl font-bold text-green-500">
                      Status:{" "}
                      <span className="text-zinc-900">{data.status}</span>
                    </p>
                    <p className="text-2xl font-bold text-green-500">
                      Gender:{" "}
                      <span className="text-zinc-900">{data.gender}</span>
                    </p>
                    <p className="text-2xl font-bold text-green-500">
                      Specie:{" "}
                      <span className="text-zinc-900">{data.species}</span>
                    </p>
                    <p className="text-2xl font-bold text-green-500">
                      Origin:{" "}
                      <span className="text-zinc-900">{data.origin.name}</span>
                    </p>
                    <p className="text-2xl font-bold text-green-500">
                      Location:{" "}
                      <span className="text-zinc-900">
                        {data.location.name}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
