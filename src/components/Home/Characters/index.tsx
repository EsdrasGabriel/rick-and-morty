import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export type DataInfos = {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
};

export const Characters = () => {
  const { data, isFetching } = useQuery<DataInfos[]>({
    queryKey: ["repos"],
    queryFn: async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=2&name=${"rick"}&status=${"alive"}&gender=${"male"}`
      );

      return response.data.results;
    },
  });

  return (
    <>
      <section className="flex flex-col mt-10">
        <div>{isFetching && <p>Carregando...</p>}</div>
        <div className="flex flex-wrap items-center justify-center w-screen h-full gap-10">
          {data?.map((data) => {
            return (
              <div
                key={data.id}
                className="border-4 border-green-500 rounded-xl"
              >
                <Link to={`/characterInfos/${data.id}`} className="flex flex-col items-center justify-center gap-1">
                  <img
                    src={data.image}
                    alt="Imagem do Personagem"
                    className="rounded-lg "
                  />
                  <h2 className="text-2xl font-bold text-zinc-900">
                    {data.name}
                  </h2>
                  <div className="flex justify-center w-full gap-10">
                    <span className="text-lg font-medium text-zinc-700">
                      {data.status}
                    </span>
                    <span className="text-lg font-medium text-zinc-700">
                      {data.gender}
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
